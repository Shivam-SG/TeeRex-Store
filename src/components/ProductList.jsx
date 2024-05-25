import React from 'react';
import { Grid } from '@mui/material';
import ProductCard from './ProductCard';

const ProductList = ({ products, onAddToCart }) => (
  <Grid container spacing={3}>
    {products.map((product) => (
      <Grid item key={product.id} xs={12} sm={6} md={4}>
        <ProductCard product={product} onAddToCart={onAddToCart} />
      </Grid>
    ))}
  </Grid>
);

export default ProductList;
