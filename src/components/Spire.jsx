// src/components/Spire.jsx
import React from "react";
import { FaComment, FaHeart, FaRetweet, FaCopy, FaShare } from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";

const IconContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textDecoration: "none",
  color: "gray",
  "&:hover": {
    color: "black",
  },
});

const Spire = ({ spire }) => {
  return (
    <div className="max-w-xl w-full h-full bg-white border border-gray-300 rounded-lg p-4 shadow-lg flex flex-col justify-center mb-4">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-12 w-12 rounded-full"
            src={`https://i.pravatar.cc/150?u=${spire.user.username}`}
            alt={spire.user.username}
          />
        </div>
        <div className="flex-1">
          <div className="text-lg font-bold text-gray-900">
            {spire.user.username}
          </div>
          <p className="mt-1 text-gray-700">{spire.content}</p>
        </div>
      </div>
      <div className="flex justify-around mt-4">
        <Tooltip title="Comment" placement="bottom">
          <IconContainer>
            <FaComment
              className="text-gray-600 hover:text-gray-800"
              size={20}
            />
          </IconContainer>
        </Tooltip>

        <Tooltip title="Like" placement="bottom">
          <IconContainer>
            <FaHeart className="text-gray-600 hover:text-gray-800" size={20} />
          </IconContainer>
        </Tooltip>

        <Tooltip title="Repost" placement="bottom">
          <IconContainer>
            <FaRetweet
              className="text-gray-600 hover:text-gray-800"
              size={20}
            />
          </IconContainer>
        </Tooltip>

        <Tooltip title="Copy" placement="bottom">
          <IconContainer>
            <FaCopy className="text-gray-600 hover:text-gray-800" size={20} />
          </IconContainer>
        </Tooltip>

        <Tooltip title="Share" placement="bottom">
          <IconContainer>
            <FaShare className="text-gray-600 hover:text-gray-800" size={20} />
          </IconContainer>
        </Tooltip>
      </div>
    </div>
  );
};

export default Spire;
