import React from "react";
import { Navbar, Sidebar } from "./menu";
import "./layout.css";

const FullLayout = ({ children }) => {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="d-flex h-100">
        <Sidebar />
        <div className="pb-5 mb-5 flex-1 w-100 overflow-y-auto">
          <div className="pb-5">{children}</div>
        </div>
      </div>
    </>
  );
};

export default FullLayout;