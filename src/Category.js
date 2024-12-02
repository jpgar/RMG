import React, { useState } from 'react';
import MenuItem from './MenuItem';

const Category = ({ category, addMenuItem, deleteMenuItem, deleteCategory }) => {
  const [newItem, setNewItem] = useState({ name: '', price: '', image: '' });
  const [showForm, setShowForm] = useState(false);

  const handleAddItem = () => {
    if (!newItem.name || !newItem.price || !newItem.image) {
      alert('Please fill out all fields!');
      return;
    }

    const urlRegex = /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp))$/i;
    if (!urlRegex.test(newItem.image)) {
      alert('Please enter a valid image URL!');
      return;
    }

    addMenuItem(category.category, {
      ...newItem,
      price: parseFloat(newItem.price),
    });

    setNewItem({ name: '', price: '', image: '' });
    setShowForm(false);
  };

  return (
    <div className="category">
      <div className="category-header">
        <h2>{category.category}</h2>
        <button
          onClick={() => deleteCategory(category.category)}
          className="delete-category-button"
        >
          Delete Category
        </button>
      </div>
      <div>
        {category.items.map((item) => (
          <MenuItem key={item.name} item={item} />
        ))}
      </div>
        <button
            onClick={() => setShowForm(!showForm)}
            className="toggle-form-button"
        >
            {showForm ? 'Hide Form' : 'Add Item'}
        </button>
        {showForm && (
  <div className="add-item">
    <input
      type="text"
      placeholder="Name"
      value={newItem.name}
      onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
    />
    <input
      type="number"
      placeholder="Price"
      value={newItem.price}
      onChange={(e) => setNewItem({ ...newItem, price: e.target.value })}
    />
    <input
      type="text"
      placeholder="Image URL"
      value={newItem.image}
      onChange={(e) => setNewItem({ ...newItem, image: e.target.value })}
    />
    <button onClick={handleAddItem}>Add Item</button>
  </div>
)}

      
    </div>
  );
};

export default Category;
