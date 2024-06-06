import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaUser,
  FaPlusCircle,
  FaBell,
  FaSearch,
  FaEnvelope,
} from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import Navbar from "./Navbar";

const IconContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  textDecoration: "none",
  color: "black",
  "&:hover": {
    color: "blue",
  },
});

const Sidebar = () => {
  return (
    <aside className="flex justify-center bg-gray-100 w-40 p-4">
      <div className="flex flex-col items-center space-y-12">
        <Link to="/" style={{ textDecoration: "none" }}>
          <Navbar />
        </Link>
        <Tooltip title="Home" placement="bottom">
          <Link to="/" style={{ textDecoration: "none" }}>
            <IconContainer>
              <FaHome size={24} />
            </IconContainer>
          </Link>
        </Tooltip>
        <Tooltip title="Notifications" placement="bottom">
          <Link to="/notifications" style={{ textDecoration: "none" }}>
            <IconContainer>
              <FaBell size={24} />
            </IconContainer>
          </Link>
        </Tooltip>
        <Tooltip title="Search" placement="bottom">
          <Link to="/search" style={{ textDecoration: "none" }}>
            <IconContainer>
              <FaSearch size={24} />
            </IconContainer>
          </Link>
        </Tooltip>

        <Tooltip title="Messages" placement="bottom">
          <Link to="/messages" style={{ textDecoration: "none" }}>
            <IconContainer>
              <FaEnvelope size={24} />
            </IconContainer>
          </Link>
        </Tooltip>
        <Tooltip title="Post" placement="bottom">
          <Link to="/create-spire" style={{ textDecoration: "none" }}>
            <IconContainer>
              <FaPlusCircle size={24} />
            </IconContainer>
          </Link>
        </Tooltip>
        <Tooltip title="Profile" placement="bottom">
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <IconContainer>
              <FaUser size={34} />
            </IconContainer>
          </Link>
        </Tooltip>
      </div>
    </aside>
  );
};

export default Sidebar;
