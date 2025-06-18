"use client";

import { useEffect, useState } from "react";
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import EditIcon from '@mui/icons-material/Edit';

export default function Home() {
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState("");

  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodo(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  const handleAdd = () => {
    if (newTodo.trim() === "") return;
    const newItem = {
      id: Date.now(),
      text: newTodo.trim(),
    };
    setTodo([...todo, newItem]);
    setNewTodo("");
  };

  const handleDelete = (id) => {
    setTodo(todo.filter((item) => item.id !== id));
  };

  const handleEdit = (item) => {
    setEditingId(item.id);
    setEditingText(item.text);
  };

  const handleSave = (id) => {
    const updated = todo.map((item) =>
      item.id === id ? { ...item, text: editingText } : item
    );
    setTodo(updated);
    setEditingId(null);
    setEditingText("");
  };

  return (
    <div className="box border border-white w-[80%] mx-auto text-center mt-20 rounded-2xl">
      <div className="input flex gap-7 justify-center mt-7 mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Enter your To-Do task here"
          className="w-[40%] text-black rounded-3xl h-11 p-2 font-bold"
        />
        <button
          onClick={handleAdd}
          className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:text-purple-600 hover:text-4xl"
        >
          Add
        </button>
      </div>

      {todo.map((item) => (
        <div
          key={item.id}
          className="card border border-white w-[60%] rounded-3xl mx-auto mt-7 mb-11 flex justify-between p-4"
        >
          <div className="max-w-[75%] flex-col text-xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            {editingId === item.id ? (
              <input
                type="text"
                value={editingText}
                onChange={(e) => setEditingText(e.target.value)}
                className="text-black px-2 py-1 w-full rounded"
              />
            ) : (
              item.text
            )}
          </div>

          <div className="icons flex gap-4">
            {editingId === item.id ? (
              <button onClick={() => handleSave(item.id)}>
                <span className="text-green-600 font-bold text-lg">Save</span>
              </button>
            ) : (
              <>
                <button onClick={() => handleEdit(item)}>
                  <EditIcon className="text-blue-500 text-2xl hover:text-3xl" />
                </button>
                <button onClick={() => handleDelete(item.id)}>
                  <DeleteRoundedIcon className="text-red-500 text-2xl hover:text-3xl" />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
