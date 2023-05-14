import axios from "axios";

const API_DOMAIN = "https://645ba40ca8f9e4d6e76e9095.mockapi.io";

const getTodos = async () => {
  const userId = localStorage.getItem("user_token");
  return await axios.get(`${API_DOMAIN}/users/${userId}/todos`, {});
};

const addTodo = async (data) => {
  const userId = localStorage.getItem("user_token");
  return await axios.post(`${API_DOMAIN}/users/${userId}/todos`, data);
};

const editTodo = async (todoId, data) => {
  const userId = localStorage.getItem("user_token");
  return await axios.put(`${API_DOMAIN}/users/${userId}/todos/${todoId}`, data);
};

const deleteTodo = async (todoId) => {
  const userId = localStorage.getItem("user_token");
  return await axios.delete(`${API_DOMAIN}/users/${userId}/todos/${todoId}`);
};

export { getTodos, addTodo, editTodo, deleteTodo };
