import React from "react";
import Header from "./header/Header";
import { Outlet } from "react-router-dom";

export default function MyWebLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
