import {useState} from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import styled from '@emotion/styled';



// const FormControl = styled(FormControl)({

// })

const FilterBar = () => {
    const [filters,setFilters] = useState({
        location:'',
        price:"",
        moveInDate:'',
        PropertyType:'',
        
    });
    
    const handleChange = (event) => {
        setFilters({...filters,location:event.target});
      };
  return (
    <div>
         <FormControl sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="location">filters.location</InputLabel>
        <Select
          labelId="location"
          id="location"
          value={filters.location}
          label="location"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>With label + helper text</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={filters.location}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={filters.location}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 120 }}>
        <Select
          value={filters.location}
          onChange={handleChange}
          displayEmpty
          inputProps={{ 'aria-label': 'Without label' }}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <FormHelperText>Without label</FormHelperText>
      </FormControl>
        
    </div>
  )
}

export default FilterBar