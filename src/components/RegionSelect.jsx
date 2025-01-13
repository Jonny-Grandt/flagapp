import React from "react";
import { MenuItem, FormControl, Select, InputLabel } from "@mui/material";

const RegionSelect = ({ selectedRegion, setSelectedRegion }) => {
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  return (
    <FormControl
      variant="outlined"
      sx={{
        minWidth: 200,
        backgroundColor: "#2B3844",
        borderRadius: 1,
      }}
    >
      <InputLabel sx={{ color: "#F2F2F2" }}>Filter by Region</InputLabel>
      <Select
        value={selectedRegion}
        onChange={handleChange}
        label="Filter by Region"
        sx={{
          color: "#F2F2F2",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "#F2F2F2",
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#FFFFFF",
          },
          "& .MuiSvgIcon-root": {
            color: "#F2F2F2",
          },
        }}
      >
        <MenuItem value="">All Regions</MenuItem>
        {regions.map((region) => (
          <MenuItem key={region} value={region}>
            {region}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default RegionSelect;
