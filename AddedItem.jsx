import React from 'react';
export default function AddedItem({ CurrentList, RemoveItem }) {
  return (
    <>
      {CurrentList.map((item, id) => (
        <div className="indItems" key={item.id}>
          <input type="checkbox" />
          {item.value}
          <button onClick={() => RemoveItem(id)}>-</button>
        </div>
      ))}
    </>
  );
}
