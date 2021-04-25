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
        <div className="flex-1 w-100">{children}</div>
      </div>
    </>
  );
};

export default FullLayout;
