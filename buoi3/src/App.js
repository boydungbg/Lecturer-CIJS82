import { useState } from "react";
import Task from "./components/task/task";
import { get, save } from "./repositories/TodoRepository";

function App() {
  const [todos, setTodos] = useState(get());
  const [title, setTitle] = useState("");
  const onSubmit = (title) => {
    let newTodos = [
      {
        title: title,
        status: false,
      },
      ...(todos ?? []),
    ];
    setTodos(newTodos);
    save(newTodos);
    setTitle("");
  };

  const onChangeTitle = (value) => {
    setTitle(value);
  };

  const onCompleted = ({ title, status }) => {
    console.log(title, status);
    let newTodos = todos.map((todo) => {
      if (todo.title === title) {
        todo.status = status;
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <div className="flex h-[100vh] justify-center items-center">
      <div className="mx-auto w-2/4 bg-white  p-6">
        <div className="w-full">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(title);
            }}
          >
            <input
              type="text"
              placeholder="Enter your task here..."
              className="h-[40px] px-2 w-full border-b-2 border-neutral-950 outline-0"
              value={title}
              onChange={(e) => {
                onChangeTitle(e.target.value);
              }}
            />
          </form>
        </div>
        <div className="flex flex-col h-[500px] overflow-auto mt-4 mb-8">
          {/* Render List data */}
          {todos?.map((value, index) => (
            // binding data to component
            <Task
              key={index}
              status={value.status}
              title={value.title}
              todos={todos}
              onCompleted={onCompleted}
            />
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="text-2xl">{todos?.length ?? 0} Tasks</div>
          <div className="text-2xl">Todo app</div>
        </div>
      </div>
    </div>
  );
}

export default App;
