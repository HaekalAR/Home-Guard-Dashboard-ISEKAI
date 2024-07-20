import React from "react";

const TopNav = ({ isConnected }) => {
  return (
    <div className="w-full h-fit bg-[#151515] m-2 md:p-7 p-2 rounded-md">
      <h1 className="text-white font-semibold text-xl md:pt-1">Dashboard</h1>

      <div className="flex items-center mt-2">
        <div
          className={`w-2 h-2 rounded-full ${
            isConnected ? "bg-[#00ff00]" : "bg-[#ff0000]"
          }`}
        ></div>
        <p className="text-white text-sm ml-2">
          {isConnected ? "Connected" : "Disconnected"}
        </p>
      </div>
    </div>
  );
};

export default TopNav;
