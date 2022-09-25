import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import styled from "@emotion/styled";
import {
  Button,
  Popover,
  Stack,
  Typography,
  TextField,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import PriceSlider from "./Slider";
import { MdClearAll } from "react-icons/md";

const FilterContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  backgroundColor: "white",
  width: "80%",
  borderRadius: "10px",
  justifyContent: "space-around",
});

const buttonStyles = {
  backgroundColor: "purple",
};






const FilterBar = ({
  locations,
  filters,
  applyFilters,
  setFilters,
  propertyTypeList,
  clearFilters,
}) => {
  const [filtersApplied, setFiltersApplied] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

 
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handlePriceChange = (e, newValue) =>{
    setFilters({...filters,price:newValue})

  }
  console.log(filters.moveInDate.$d);
  console.log("property", filters);
  return (
    <FilterContainer>
      <Stack
        flexDirection="row"
        alignItems="center"
        justifyContent="space-around"
      >
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <FormHelperText>Location</FormHelperText>
          <Select
            labelId="location"
            id="location"
            value={filters.location}
            label="location"
            onChange={(e) =>
              setFilters({ ...filters, location: e.target.value })
            }
          >
            {locations.map((location, index) => {
              return (
                <MenuItem key={index} value={location}>
                  {location}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
        <FormControl>
          <FormHelperText>When</FormHelperText>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              disablePast
              openTo="year"
              views={["year", "month"]}
              value={filters.moveInDate}
              onChange={(newValue) => {
                setFilters({ ...filters, moveInDate: newValue.$d });
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 100, position: "relative" }}>
          <FormHelperText>Price</FormHelperText>
          <Stack
            component="button"
            onClick={handleClick}
            sx={{
              border: "1px solid gray",
              borderRadius: "5px",
              padding: "1rem 2rem",
              backgroundColor: "white",
            }}
          >
            <Typography fontWeight="700">{`$${filters.price[0]}-$${filters.price[1]}`}</Typography>
          </Stack>
          <Popover open={anchorEl} anchorEl={anchorEl} onClose={handleClose}>
            <PriceSlider
              price={filters.price}
              handleChange={handlePriceChange}
              />
          </Popover>
        </FormControl>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <FormHelperText>Property Type</FormHelperText>
          <Select
            labelId="propertyType"
            id="propertyType"
            value={filters.propertyType || ""}
            label="propertyType"
            onChange={(newValue) =>
              setFilters({ ...filters, propertyType: newValue.target.value })
            }
          >
            <MenuItem value="">select</MenuItem>

            {propertyTypeList &&
              propertyTypeList.map((property, index) => {
                return (
                  <MenuItem key={index} value={property}>
                    {property}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </Stack>

      <Button 
         variant="contained"
         sx={buttonStyles} 
         onClick={applyFilters}>
        Search
      </Button>
        <Button 
          variant="outline"
          onClick={clearFilters}>
          <MdClearAll />
          Clear Filters
        </Button>
     
    </FilterContainer>
  );
};

export default FilterBar;
