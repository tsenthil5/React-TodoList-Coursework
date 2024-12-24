import React from 'react';
export default function AddItem({ Items, HandleItemChange, AddNewItem }) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent form from reloading the page
        AddNewItem();
      }}
    >
      <input
        type="text"
        value={Items.Items}
        name="Items"
        onChange={HandleItemChange}
      ></input>
      <button type="submit">+</button>
    </form>
  );
}
