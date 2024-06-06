import React from "react";
import {
  FaCamera,
  FaImage,
  FaSmile,
  FaMapMarkerAlt,
  FaTag,
  FaPaperPlane,
} from "react-icons/fa";
import Tooltip from "@mui/material/Tooltip";

const SearchBar = () => {
  return (
    <div className="flex flex-col w-full max-w-xl p-4 bg-white shadow-md rounded-lg mb-4">
      <input
        type="text"
        placeholder="Inspire Me!"
        className="w-full p-3 border border-gray-300 rounded-lg mb-2"
      />
      <div className="flex justify-between items-center">
        <div className="flex space-x-4 text-gray-500">
          <Tooltip title="Camera" placement="bottom">
            <span>
              <FaCamera size={20} />
            </span>
          </Tooltip>
          <Tooltip title="Image" placement="bottom">
            <span>
              <FaImage size={20} />
            </span>
          </Tooltip>
          <Tooltip title="Emoji" placement="bottom">
            <span>
              <FaSmile size={20} />
            </span>
          </Tooltip>
          <Tooltip title="Location" placement="bottom">
            <span>
              <FaMapMarkerAlt size={20} />
            </span>
          </Tooltip>
          <Tooltip title="Tag" placement="bottom">
            <span>
              <FaTag size={20} />
            </span>
          </Tooltip>
        </div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Post
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
