import React, { useEffect, useState } from "react";
import {
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import { Home, Search, Person } from "@mui/icons-material";
import Link from "next/link";
const BottomBar = () => {
  const [value, setValue] = useState("home");
  useEffect(() => {}, [value]);
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
          <Link href="/">
            <BottomNavigationAction label="Home" value="home" icon={<Home />} />
          </Link>
          <Link href="/eng">
          <BottomNavigationAction
            label="Search"
            value="search"
            icon={<Search />}
          />
          </Link>
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
