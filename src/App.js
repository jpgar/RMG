
import React, { useState } from 'react';
import Menu from './Menu';
import CategoryForm from './CategoryForm';
import './App.css';

const App = () => {
  // Mock menu data
  const [menuData, setMenuData] = useState([
    {
      category: 'Breakfast',
      items: [
        { name: 'Eggs Benedict', price: 5.99, image: '/images/eggs-benedict.jpeg' },
        { name: 'Avocado Toast', price: 6.99, image: '/images/avocado-toast.jpeg' },
        { name: 'Omelette', price: 5.49, image: '/images/omelette.jpg' },
      ],
    },
    {
      category: 'Main Course',
      items: [
        { name: 'Grilled Salmon', price: 12.99, image: '/images/grilled-salmon.jpg' },
        { name: 'Chicken Piccata', price: 13.99, image: '/images/chicken-picatta.jpg' },
        { name: 'Beef Tenderloin', price: 14.99, image: '/images/beef-tenderloin.jpg' },
      ],
    },
    {
      category: 'Drinks',
      items: [
        { name: 'Coffee', price: 3.99, image: '/images/coffee.jpeg' },
        { name: 'Tea', price: 2.99, image: '/images/tea.jpeg' },
        { name: 'Soda', price: 1.99, image: '/images/soda.jpeg' },
      ],
    },
  ]);
  

  const addMenuItem = (categoryName, newItem) => {
    setMenuData((prevMenu) =>
      prevMenu.map((category) =>
        category.category === categoryName
          ? { ...category, items: [...category.items, newItem] }
          : category
      )
    );
  };

  const deleteMenuItem = (categoryName, itemName) => {
    setMenuData((prevMenu) =>
      prevMenu.map((category) =>
        category.category === categoryName
          ? {
              ...category,
              items: category.items.filter((item) => item.name !== itemName),
            }
          : category
      )
    );
  };

  const addCategory = (newCategoryName) => {
    if (menuData.some((category) => category.category === newCategoryName)) {
      alert('Category already exists!');
      return;
    }
  
    setMenuData((prevMenu) => [
      ...prevMenu,
      { category: newCategoryName, items: [] },
    ]);
  };
  
  

  const deleteCategory = (categoryName) => {
    setMenuData((prevMenu) =>
      prevMenu.filter((category) => category.category !== categoryName)
    );
  };

  return (
    <div className="App">
      <h1>Restaurant Menu Generator</h1>
      <Menu
        menuData={menuData}
        addMenuItem={addMenuItem}
        deleteMenuItem={deleteMenuItem}
        deleteCategory={deleteCategory}
      />
      <CategoryForm addCategory={addCategory} />
    </div>
  );
};


export default App;
