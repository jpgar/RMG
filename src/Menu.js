import React from 'react';
import Category from './Category';

const Menu = ({ menuData, addMenuItem, deleteMenuItem, deleteCategory }) => {
  return (
    <div>
      {menuData.map((category) => (
        <Category
          key={category.category}
          category={category}
          addMenuItem={addMenuItem}
          deleteMenuItem={deleteMenuItem}
          deleteCategory={deleteCategory}
        />
      ))}
    </div>
  );
};

export default Menu;
