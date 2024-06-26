import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Spire from "../components/Spire";
import SpireTrends from "../components/SpireTrends";
import { fetchSpires, incrementPage } from "../redux/slices/spireSlice";
import SpirePost from "../components/spirePost";
import Sidebar from "../components/sidebar";

const HomePage = () => {
  const dispatch = useDispatch();
  const spires = useSelector((state) => state.spires.spires);
  const spiresStatus = useSelector((state) => state.spires.status);
  const error = useSelector((state) => state.spires.error);
  const page = useSelector((state) => state.spires.page);
  const hasMore = useSelector((state) => state.spires.hasMore);

  useEffect(() => {
    if (spiresStatus === "idle") {
      dispatch(fetchSpires(page));
    }
  }, [spiresStatus, dispatch, page]);

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop >=
        document.documentElement.offsetHeight - 500 &&
      spiresStatus !== "loading" &&
      hasMore
    ) {
      dispatch(incrementPage());
      dispatch(fetchSpires(page + 1));
    }
  }, [dispatch, spiresStatus, page, hasMore]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  let content;
  if (spiresStatus === "loading" && spires.length === 0) {
    content = (
      <div className="w-full p-6 mb-4 bg-white">
        <div className="text-center">Loading spires...</div>
      </div>
    );
  } else if (
    spiresStatus === "succeeded" ||
    (spiresStatus === "loading" && spires.length > 0)
  ) {
    content = spires.map((spire, index) => (
      <div key={index} className="w-full p-6 mb-4 bg-white">
        <Spire spire={spire} />
      </div>
    ));
    if (spiresStatus === "loading" && hasMore) {
      content.push(
        <div key="loading" className="w-full p-6 mb-4 bg-white">
          <div className="text-center">Loading more spires...</div>
        </div>
      );
    }
  } else if (spiresStatus === "failed") {
    content = (
      <div className="w-full p-6 mb-4 bg-white">
        <div className="text-center">{error}</div>
      </div>
    );
  }

  const sampleSpire = {
    content: "Latest trends loading...",
    user: {
      username: "",
    },
  };

  return (
    <div className="container  h-full flex flex-row">
      <Sidebar />
      <div className="w-2/3 h-full flex flex-col overflow-auto">
        <div className="w-full p-4">
          <SpirePost />
        </div>
        <div className="w-full flex flex-col">{content}</div>
      </div>
      <div className="w-2/4 h-full mr-8">
        <SpireTrends spire={sampleSpire} />
      </div>
    </div>
  );
};

export default HomePage;
