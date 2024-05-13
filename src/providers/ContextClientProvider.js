"use client"
import { useEffect, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

export default function ContextClientProvider({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    function sidebarShowHide() {
      const documentWidth = document.documentElement.clientWidth;
      if (documentWidth < 768) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    }
    sidebarShowHide();

    window.addEventListener("resize", sidebarShowHide);
    return () => window.removeEventListener("resize", sidebarShowHide);
  }, []);

  return (
    <GlobalContext.Provider value={{ sidebarOpen, setSidebarOpen }}>
      {children}
    </GlobalContext.Provider>
  );
}
