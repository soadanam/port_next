import React from "react";

const PortfolioMenu = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-24">
      <div>
        <h1 className="text-5xl">Portfolio</h1>
      </div>
      <div className="mt-20">
        <ul className="flex gap-10 text-gray-500">
          <li className="cursor-pointer">ALL</li>
          <li className="cursor-pointer">BRANDING</li>
          <li className="cursor-pointer">DESIGN</li>
          <li className="cursor-pointer">MOTION GRAPHIC</li>
          <li className="cursor-pointer">PHOTOGRAPHY</li>
          <li className="cursor-pointer">PAINT</li>
          <li className="cursor-pointer">STATIC</li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioMenu;
