// src/components/Loader.jsx
import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-gray-300 border-t-secondary-green rounded-full animate-spin"></div>
    </div>
  );
};

export default Loader;
