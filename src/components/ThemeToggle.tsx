//import React from "react";
import useTheme from "../hooks/useTheme";

export default function ThemeToggle(){
  const { theme, toggle } = useTheme();
  return (
    <button aria-label="Cambiar tema" className="btn ghost" onClick={toggle}>
      {theme === "light" ? "🌙 Oscuro" : "🌞 Claro"}
    </button>
  );
}
