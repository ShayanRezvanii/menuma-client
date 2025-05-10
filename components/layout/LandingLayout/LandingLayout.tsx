/** @format */

import React from "react";

interface LandingLayoutProps {
  children: React.ReactNode;
}

function LandingLayout({ children }: LandingLayoutProps) {
  return (
    <div className="  bg-[#E9E9E9] mx-auto  max-w-[1440px] min-h-screen">
      {children}
    </div>
  );
}

export default LandingLayout;
