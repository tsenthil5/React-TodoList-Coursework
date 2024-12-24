import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import AddItem from './AddItems';
import AddedItem from './AddedItem';
import { v4 as uuid } from 'uuid';
import './App.css';
export function App() {
  const [Items, setItems] = useState({ Items: '' });
  const [CurrentList, setCurrentList] = useState([]);
  function HandleItemChange(e) {
    setItems((prevText) => ({ ...prevText, [e.target.name]: e.target.value }));
  }

  function AddNewItem() {
    setCurrentList((prevObj) => [
      ...prevObj,
      { id: uuid(), value: Items.Items },
    ]);
    setItems({ Items: '' });
  }
  function RemoveItem(index) {
    const newList = CurrentList.filter((value, id) => id !== index);
    setCurrentList(newList);
  }

  return (
    <div className="ToDoList">
      <h1>To Do List</h1>
      <div className="AddItemArea">
        <AddedItem CurrentList={CurrentList} RemoveItem={RemoveItem} />
      </div>
      <AddItem
        Items={Items}
        HandleItemChange={HandleItemChange}
        AddNewItem={AddNewItem}
      />
    </div>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
