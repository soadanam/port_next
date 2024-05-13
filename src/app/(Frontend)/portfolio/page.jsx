import React from "react";
import PortfolioMenu from "./_partials/PortfolioMenu";
import PortfolioGrid from "./_partials/PortfolioGrid";
import SidebarMenu from "@/src/components/SidebarMenu";

const page = () => {
  return (
    <div className="flex gap-0">
        
      <SidebarMenu flex={true} />
      <div>
        <PortfolioMenu />
        <PortfolioGrid />
      </div>
    </div>
  );
};

export default page;
