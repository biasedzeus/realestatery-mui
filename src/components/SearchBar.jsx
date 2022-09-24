import { InputBase, Stack, styled, Typography } from "@mui/material";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
const Search = styled(Stack)({
  position: "relative",
  borderRadius: "5px",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "rgba(white, 0.25)",
  },
  marginLeft: 0,
});

const SearchIconWrapper = styled("div")({
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginLeft:'10px'
});

const SearchBar = ({searchWord, handleChange}) => {
    console.log(searchWord)
  return (
    <Stack
      sx={{
        width: "100%",
        padding:'1rem',
        justifyContent: "space-around",
        alignItems:'center',
        
        flexDirection: {
          xs:'column',
          sm: "row",
        },
        paddingTop:'3rem'
      }}
    >
      <Typography variant="h4" fontWeight="700">Search Properties to rent</Typography>
      <Search>
        <SearchIconWrapper>
          <AiOutlineSearch />
        </SearchIconWrapper>
        <InputBase
        value={searchWord}
        onChange={(e) =>handleChange(e)}
        sx={{width:'100%',paddingLeft:'2rem'}}
          placeholder="Search…"
          inputProps={{ "aria-label": "search" }}
        />
      </Search>
    </Stack>
  );
};

export default SearchBar;
