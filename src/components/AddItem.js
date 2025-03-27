import React from "react";
import { useNavigate } from "react-router-dom";
import ItemForm from "./ItemForm";

function AddItem({ onAdd }) {
  const navigate = useNavigate();

  function handleAdd(newBook) {
    onAdd(newItem);
    navigate("/");
  }

  return <ItemForm initialData={{ itemName: "", description: "", status: false }} onSubmit={handleAdd} />;
}

export default AddItem;