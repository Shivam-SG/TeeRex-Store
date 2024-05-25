import React from 'react';
import { Container, Grid } from '@mui/material';
import ProductList from '../components/ProductList';
import Filter from '../components/Filter';

const HomePage = ({ products, filters, onFilterChange, onClearFilters, onAddToCart }) => {
  return (
    <Container style={{ marginTop: 79 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={3}>
          <Filter 
            filters={filters} 
            onFilterChange={onFilterChange} 
            onClearFilters={onClearFilters} 
          />
        </Grid>
        <Grid item xs={12} md={9}>
          <ProductList 
            products={products} 
            onAddToCart={onAddToCart} 
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default HomePage;
