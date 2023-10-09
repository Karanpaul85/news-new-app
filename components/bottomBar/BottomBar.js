import React, { useState } from "react";
import styles from "./BottomBar.module.css";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import { Home, Search, Person } from "@mui/icons-material";
const BottomBar = () => {
  const [value, setValue] = useState("home");
  return (
    <Box sx={{ width: 500 }}>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Home"
            value="home"
            icon={<Home />}
          />
          <BottomNavigationAction
            label="Search"
            value="search"
            icon={<Search />}
          />
          <BottomNavigationAction
            label="Profile"
            value="profile"
            icon={<Person />}
          />
        </BottomNavigation>
      </Paper>
    </Box>
  );
};
export default BottomBar;