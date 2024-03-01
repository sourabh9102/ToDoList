import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addTodo,
  editTodo,
  toggleTodo,
  deleteTodo,
  clearCompleted,
  toDos,
} from "../redux/todoSlice";

function TodoList() {
  const todos = useSelector(toDos);
  const dispatch = useDispatch();
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDescription, setNewTodoDescription] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editedTodoTitle, setEditedTodoTitle] = useState("");
  const [editedTodoDescription, setEditedTodoDescription] = useState("");

  const handleAddTodo = () => {
    if (newTodoTitle.trim() !== "") {
      dispatch(
        addTodo({
          title: newTodoTitle,
          description: newTodoDescription,
        })
      );
      setNewTodoTitle("");
      setNewTodoDescription("");
    }
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const handleDeleteTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const handleEditTodo = (id, title, description) => {
    setEditingId(id);
    setEditedTodoTitle(title);
    setEditedTodoDescription(description);
  };

  const handleSaveEdit = (id) => {
    if (editedTodoTitle.trim() !== "") {
      dispatch(
        editTodo({
          id: id,
          title: editedTodoTitle,
          description: editedTodoDescription,
        })
      );
      setEditingId(null);
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4 text-center pt-5 mt-5">
        Todo List
      </h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodoTitle}
          onChange={(e) => setNewTodoTitle(e.target.value)}
          placeholder="Enter a new todo title..."
          className="flex-1 mr-2 px-3 py-2 border rounded-md focus:outline-none"
        />
        <input
          type="text"
          value={newTodoDescription}
          onChange={(e) => setNewTodoDescription(e.target.value)}
          placeholder="Enter a new todo description..."
          className="flex-1 px-3 py-2 border rounded-md focus:outline-none"
        />
        <button
          onClick={handleAddTodo}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
        >
          Add Todo
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className="mb-4">
            {editingId === todo.id ? (
              <div>
                <input
                  type="text"
                  value={editedTodoTitle}
                  onChange={(e) => setEditedTodoTitle(e.target.value)}
                  className="mr-2 px-3 py-2 border rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  value={editedTodoDescription}
                  onChange={(e) => setEditedTodoDescription(e.target.value)}
                  className="mr-2 px-3 py-2 border rounded-md focus:outline-none mb-4"
                />
                <button
                  onClick={() => handleSaveEdit(todo.id)}
                  className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
                >
                  Save
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="ml-2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <div className="flex items-center">
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => handleToggleTodo(todo.id)}
                  className="mr-2"
                />
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                  }}
                  className="flex-1"
                >
                  {todo.title} - {todo.description}
                </span>
                <button
                  onClick={() =>
                    handleEditTodo(todo.id, todo.title, todo.description)
                  }
                  className="mr-2 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteTodo(todo.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Delete
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      <div className="flex justify-end">
        <button
          onClick={handleClearCompleted}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none"
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default TodoList;
