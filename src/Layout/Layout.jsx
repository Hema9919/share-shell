import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { LanguageProvider } from "../context/LanguageContext";

export default function Layout() {
  return (
    <LanguageProvider>
      <div className="app-container">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </LanguageProvider>
  );
}
