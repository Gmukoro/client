import React from "react";

const SpireTrends = ({ spire }) => {
  return (
    <div className=" p-4 shadow w- 100 h-full">
      <h3 className="font-bold text-xl">Trends</h3>
      <h3 className="text-lg">{spire.content}</h3>
    </div>
  );
};

export default SpireTrends;
