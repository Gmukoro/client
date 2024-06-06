import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addSpire } from "../redux/slices/spireSlice";

const SpireForm = () => {
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSpire({ content }));
    setContent("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="w-full p-2 border border-gray-300 rounded mb-2"
        placeholder="What's on your mind?"
      ></textarea>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Post
      </button>
    </form>
  );
};

export default SpireForm;
