import React, { useState } from 'react';

const CategoryForm = ({ addCategory }) => {
  const [newCategory, setNewCategory] = useState('');

  const handleAddCategory = () => {
    if (newCategory.trim() === '') {
      alert('Category name cannot be empty!');
      return;
    }

    addCategory(newCategory);
    setNewCategory('');
  };

  return (
    <div className="add-category">
      <input
        type="text"
        placeholder="New Category Name"
        value={newCategory}
        onChange={(e) => setNewCategory(e.target.value)}
      />
      <button onClick={handleAddCategory}>Add Category</button>
    </div>
  );
};

export default CategoryForm;
