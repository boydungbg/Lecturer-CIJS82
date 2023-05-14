import React, { useEffect, useState } from "react";
import {
  BrowserRouter,
  HashRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AppContext from "./context/AppContext";
import { addTodo, deleteTodo, editTodo, getTodos } from "./services/todos";
import HomePage from "./pages";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

const PrivateRouter = ({ children }) => {
  if (!localStorage.getItem("user_token")) {
    return <Navigate to={"/sign-in"}></Navigate>;
  }
  return children;
};
const PublicRouter = ({ children }) => {
  if (localStorage.getItem("user_token")) {
    return <Navigate to={"/"}></Navigate>;
  }
  return children;
};

function App() {
  const [todos, setTodos] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    const userId = localStorage.getItem("user_token");
    getTodos(userId).then(({ data }) => {
      setTodos(data);
    });
  }, [user]);

  const onAddTodo = (title) => {
    let newTodos = [
      {
        title: title,
        status: false,
      },
      ...(todos ?? []),
    ];
    addTodo({
      title: title,
      status: false,
    });
    setTodos(newTodos);
  };

  const onCompleteTodo = (taskId) => {
    // Tìm index của task trong mảng todos thông qua taskid
    let indexExist = todos.findIndex(({ id }) => id === taskId);
    todos[indexExist] = {
      ...todos[indexExist],
      status: !todos[indexExist].status,
    };
    setTodos([...todos]);
    editTodo(taskId, todos[indexExist]);
  };

  const onDeleteTodo = (taskId) => {
    let indexExist = todos.findIndex(({ id }) => id === taskId);
    todos.splice(indexExist, 1);
    deleteTodo(taskId);
    setTodos([...todos]);
  };

  const onEditTodo = (taskId, title) => {
    // Tìm index của task trong mảng todos thông qua taskid
    let indexExist = todos.findIndex(({ id }) => id === taskId);
    todos[indexExist] = {
      ...todos[indexExist],
      title: title,
    };
    editTodo(taskId, todos[indexExist]);
    setTodos([...todos]);
    // save(todos);
  };

  // Khỏi tạo router provider chuyền routes vừa được khởi tạo
  return (
    <AppContext.Provider
      value={{
        todos: todos,
        user: user,
        setUser: setUser,
        onAddTodo: onAddTodo,
        onCompleteTodo: onCompleteTodo,
        onDeleteTodo: onDeleteTodo,
        onEditTodo: onEditTodo,
      }}
    >
      <BrowserRouter basename="/CIJS182">
        <Routes>
          <Route
            path="/"
            Component={() => (
              <PrivateRouter>
                <HomePage />
              </PrivateRouter>
            )}
          ></Route>
          <Route
            path="/sign-in"
            Component={() => (
              <PublicRouter>
                <LoginPage />
              </PublicRouter>
            )}
          ></Route>
          <Route
            path="/sign-up"
            Component={() => (
              <PublicRouter>
                <RegisterPage />
              </PublicRouter>
            )}
          ></Route>
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;
