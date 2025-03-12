import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

function AddTodo() {
  const [value, setValue] = React.useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) {
      return;
    }
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <form 
      onSubmit={handleSubmit} 
      style={{ 
        display: "flex", 
        justifyContent: "center", 
        marginTop: "20px", 
        gap: "10px" 
      }}
    >
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a new task..."
        style={{ 
          padding: "10px", 
          width: "250px", 
          borderRadius: "5px", 
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px"
        }}
      />
      <button 
        type="submit" 
        style={{ 
          padding: "10px 15px", 
          backgroundColor: "#28a745", 
          color: "white", 
          border: "none", 
          borderRadius: "5px", 
          cursor: "pointer",
          fontSize: "16px"
        }}
      >
        Add
      </button>
    </form>
  );
}

export default AddTodo;
