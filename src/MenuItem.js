import React from 'react';

const MenuItem = ({ item, category, deleteMenuItem }) => {
  return (
    <div className="menu-item">
      <img
        src={item.image}
        alt={item.name}
        className="menu-item-image"
        onError={(e) => {
          e.target.src = '/images/placeholder.png'; 
        }}
      />
      <div className="menu-item-details">
        <span className="item-name">{item.name}</span>
        <span className="item-price">${item.price.toFixed(2)}</span>
      </div>
      <button
        onClick={() => deleteMenuItem(category, item.name)}
        className="delete-button"
      >
        Delete
      </button>
    </div>
  );
};

export default MenuItem;
