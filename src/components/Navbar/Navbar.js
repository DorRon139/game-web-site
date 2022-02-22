import React, { useState } from "react";
import "./navbar.css";
import { Button } from "@mui/material";

const Navbar = (props) => {
  return (
    <nav>
      <a
        onClick={() => {
          props.onSelectGame(0);
        }}
      >
        <img src={"/images/logo.png"} />
        <h3>ReactGames</h3>
      </a>
      <ul>
        <li>
          <Button>About</Button>
        </li>
        <li>
          <Button>Contact Us</Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
