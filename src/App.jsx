import React from "react";
import AddTodo from "./Components/AddTodo";
import Todo from "./Components/Todo";

function App() {
  return (
    <div style={{ textAlign: "center", padding: "20px", background: "#e3f2fd", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "32px", color: "#007bff", marginBottom: "20px" }}>My Todo App</h1>
      <div style={{ maxWidth: "500px", margin: "0 auto", padding: "20px", background: "#fff", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
        <AddTodo />
        <Todo />
      </div>
    </div>
  );
}

export default App;