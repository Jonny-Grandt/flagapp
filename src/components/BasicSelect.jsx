import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({ region, setRegion }) {
  const handleChange = (event) => {
    setRegion(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 160 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Region</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={region}
          label="Region"
          onChange={handleChange}
        >
          <MenuItem value="all">All</MenuItem>
          <MenuItem value="region/Africa">Africa</MenuItem>
          <MenuItem value="region/America">America</MenuItem>
          <MenuItem value="region/Asia">Asia</MenuItem>
          <MenuItem value="region/Europ">Europe</MenuItem>
          <MenuItem value="region/Oceania">Oceania</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
