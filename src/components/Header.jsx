import styled from "@emotion/styled";
import {
    Box,
  Button,
  IconButton,
  Link,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiHomeSmile2Fill } from "react-icons/ri";
import {ImMenu} from 'react-icons/im';

const HeaderContainer = styled(Stack)({
  // backgroundColor:'red',
  width: "90vw",
  flexDirection: "row",
  justifyContent: "space-around",
  borderBottom: "1px solid black",
  alignItems: "center",
});

const NavContainer = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
});
const Header = () => {
  return (
    <HeaderContainer>
      <NavContainer>

        <Stack flexDirection="row" alignItems="center">
        <IconButton sx={{display:{xs:'block', sm:'none'}}}><ImMenu size="2rem" /></IconButton>
          <RiHomeSmile2Fill color="purple" size="3rem" />
          <Typography fontWeight="700" fontSize="1.5rem">
            Estatery
          </Typography>
        </Stack>
        <Stack
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
          }}
          flexDirection="row"
        >
          <ListItem>
            <ListItemButton selected>
              {" "}
              <ListItemText primary="Rent" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              {" "}
              <ListItemText primary="Buy" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              {" "}
              <ListItemText primary="Sell" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              {" "}
              <ListItemText primary="ManagePropety" />
              <IoIosArrowDown />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              {" "}
              <ListItemText primary="Resources" />
              <IoIosArrowDown />
            </ListItemButton>
          </ListItem>
        </Stack>
      </NavContainer>
      <Stack flexDirection="row" gap=".4rem" justifyContent="space-between">
        <Button
          sx={{ height: "fit-content", color: "purple", borderColor: "purple" }}
          variant="outlined"
        >
          Login
        </Button>
        <Button
          sx={{ height: "fit-content", backgroundColor: "purple" }}
          variant="contained"
        >
          Sign Up
        </Button>
      </Stack>
    </HeaderContainer>
  );
};

export default Header;
