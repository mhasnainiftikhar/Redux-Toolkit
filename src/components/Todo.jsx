import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todos/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [newTitle, setNewTitle] = useState("");

  const handleEdit = (todo) => {
    setEditId(todo.id);
    setNewTitle(todo.title);
  };

  const handleUpdate = (id) => {
    if (newTitle.trim() === "") return;
    dispatch(updateTodo({ id, title: newTitle }));
    setEditId(null);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2 style={{ color: "#007bff" }}>Todo List</h2>
      <ul style={{ listStyle: "none", padding: "0" }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ marginBottom: "10px", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px", borderRadius: "5px", background: "#fff", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  style={{ padding: "5px", marginRight: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
                />
                <button onClick={() => handleUpdate(todo.id)} style={{ padding: "5px 10px", borderRadius: "5px", background: "#28a745", color: "white", border: "none", cursor: "pointer" }}>Save</button>
              </>
            ) : (
              <>
                <span style={{ flexGrow: "1", textAlign: "left" }}>{todo.title}</span>
                <button onClick={() => handleEdit(todo)} style={{ marginRight: "10px", padding: "5px 10px", borderRadius: "5px", background: "#ffc107", color: "black", border: "none", cursor: "pointer" }}>Edit</button>
                <button onClick={() => dispatch(removeTodo({ id: todo.id }))} style={{ padding: "5px 10px", borderRadius: "5px", background: "#dc3545", color: "white", border: "none", cursor: "pointer" }}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;