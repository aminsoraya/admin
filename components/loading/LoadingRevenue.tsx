import React from "react";

function LoadingRevenue() {
  return (
    <div className="w-full grid grid-cols-4 gap-5">
      <div className="w-full h-24 bg-gray-300 animate-pulse rounded-lg"></div>
      <div className="w-full h-24 bg-gray-300 animate-pulse rounded-lg"></div>
      <div className="w-full h-24 bg-gray-300 animate-pulse rounded-lg"></div>
      <div className="w-full h-24 bg-gray-300 animate-pulse rounded-lg"></div>
    </div>
  );
}

export default LoadingRevenue;
