import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spire from "../components/Spire";
import SpireTrends from "../components/spireTrends";
import { setSpires } from "../redux/slices/spireSlice";
import SearchBar from "../components/searchBar";

const HomePage = () => {
  const spires = useSelector((state) => state.spires.spires);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchQuotes = async () => {
      try {
        const response = await fetch(
          "https://api.quotable.io/quotes?tags=motivational&limit=5"
        );
        const data = await response.json();
        const quotes = data.results.map((quote) => ({
          content: quote.content,
          user: { username: quote.author },
        }));
        dispatch(setSpires(quotes));
      } catch (error) {
        console.error("Error fetching quotes:", error);
      }
    };

    fetchQuotes();
  }, [dispatch]);

  const sampleSpire = {
    content: "Latest trends loading...",
    user: {
      username: "",
    },
  };

  return (
    <div className="container mx-auto h-full flex flex-row items-center">
      <div className="w-3/1 h-full  items-center justify-center overflow-auto">
        <div className="w-full max-w-2xl p-4">
          <SearchBar />
        </div>
        {spires.map((spire, index) => (
          <div
            key={index}
            className="w-full max-w-2xl p-6 mb-4 bg-white rounded-lg shadow-lg"
          >
            <Spire spire={spire} />
          </div>
        ))}
      </div>
      <div className="w-1/3 h-full">
        <SpireTrends spire={sampleSpire} />
      </div>
    </div>
  );
};

export default HomePage;
