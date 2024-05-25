import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = ({ cartItems, onRemoveFromCart, onUpdateQuantity }) => {
  const calculateTotal = () => {
    return cartItems
      .reduce((acc, item) => acc + item.price * item.quantity, 0)
      .toFixed(2);
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Shopping Cart
      </Typography>
      <List>
        {cartItems.map((item) => (
          <ListItem
            key={item.id}
            style={{ display: "flex", alignItems: "center" }}
          >
            <img
              src={item.image}
              alt={item.name}
              style={{ width: 50, height: 50, marginRight: 10 }}
            />
            <ListItemText
              primary={item.name}
              secondary={`₹${item.price.toFixed(2)} x ${item.quantity}`}
            />
            <IconButton
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
            >
              <RemoveIcon />
            </IconButton>
            <Typography variant="body1">{item.quantity}</Typography>
            <IconButton
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
            >
              <AddIcon />
            </IconButton>
            <IconButton edge="end" onClick={() => onRemoveFromCart(item.id)}>
              <DeleteIcon />
            </IconButton>
          </ListItem>
        ))}
      </List>
      <hr />
      <Typography variant="h6" style={{ marginTop: 16 }}>
        Total: ₹{calculateTotal()}
      </Typography>
    </div>
  );
};

export default Cart;
