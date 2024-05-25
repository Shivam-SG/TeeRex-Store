import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';
import productsData from './data/products';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [filters, setFilters] = useState({ search: '', gender: '', color: '', type: '' });

  const addToCart = (product) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === product.id);
      if (existingItem) {
        const productInStock = productsData.find((p) => p.id === product.id);
        if (existingItem.quantity >= productInStock.quantity) {
          alert('Insufficient stock');
          return prevItems;
        }
        return prevItems.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.id === productId) {
          if (quantity <= 0) {
            return null;
          }
          const productInStock = productsData.find((product) => product.id === productId);
          if (quantity > productInStock.quantity) {
            alert('Insufficient stock');
            return item;
          }
          return { ...item, quantity };
        }
        return item;
      }).filter(Boolean);
    });
  };

  const filterProducts = () => {
    return productsData.filter((product) => {
      return (
        (filters.search === '' || 
          product.name.toLowerCase().includes(filters.search.toLowerCase()) || 
          product.color.toLowerCase().includes(filters.search.toLowerCase()) || 
          product.type.toLowerCase().includes(filters.search.toLowerCase())) &&
        (filters.gender === '' || product.gender === filters.gender) &&
        (filters.color === '' || product.color === filters.color) &&
        (filters.type === '' || product.type === filters.type)
      );
    });
  };

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const handleClearFilters = () => {
    setFilters({ search: '', gender: '', color: '', type: '' });
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              products={filterProducts()}
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              onAddToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cartItems={cartItems}
              onRemoveFromCart={removeFromCart}
              onUpdateQuantity={updateQuantity}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
