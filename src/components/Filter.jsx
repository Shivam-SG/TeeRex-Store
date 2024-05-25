import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
} from "@mui/material";

const Filter = ({ filters, onFilterChange, onClearFilters }) => {
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filters.search}
        onChange={(e) => onFilterChange("search", e.target.value)}
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Gender</InputLabel>
        <Select
          value={filters.gender}
          onChange={(e) => onFilterChange("gender", e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="male">Male</MenuItem>
          <MenuItem value="female">Female</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Color</InputLabel>
        <Select
          value={filters.color}
          onChange={(e) => onFilterChange("color", e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="red">Red</MenuItem>
          <MenuItem value="blue">Blue</MenuItem>
          <MenuItem value="black">black</MenuItem>
          <MenuItem value="pink">Pink</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Type</InputLabel>
        <Select
          value={filters.type}
          onChange={(e) => onFilterChange("type", e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="polo">Polo</MenuItem>
          <MenuItem value="round">Round</MenuItem>
          <MenuItem value="hoodie">Hoodie</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Price Range</InputLabel>
        <Select
          value={filters.price}
          onChange={handleFilterChange}
          name="price"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="0-100">₹0 - 100</MenuItem>
          <MenuItem value="101-200">₹101 - ₹200</MenuItem>
          <MenuItem value="201-400">₹201 - ₹400</MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        fullWidth
        onClick={onClearFilters}
        style={{ marginTop: 16 }}
      >
        Clear Filters
      </Button>
    </div>
  );
};
export default Filter;
