import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        style={{ objectFit: "contain" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {product.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          ₹{product.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button variant="contained" fullWidth onClick={() => onAddToCart(product)} style={{ marginTop: 16 }}>
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
