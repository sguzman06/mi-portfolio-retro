import { useMemo } from "react";
import ThemeToggle from "./ThemeToggle";
import { useActiveSection } from "../hooks/useActiveSection";

const links = [
  { href: "#inicio", label: "inicio" },
  { href: "#sobre-mi", label: "sobre mi" },
  { href: "#skills", label: "skills" },
  { href: "#proyectos", label: "proyectos" },
  { href: "#experiencia", label: "experiencia" },
  { href: "#educacion", label: "educacion" },
  { href: "#contactos", label: "contactos" },
];

export default function NavBar(){
  const ids = useMemo(() => links.map(l => l.href.slice(1)), []);
  const active = useActiveSection(ids);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        {/* BRAND con logo */}
        <a href="#inicio" className="brand">
          <img src="/brand/sg-logo.png" alt="Logo SG" className="logo" />
          <span>sofia guzman</span>
        </a>

        <div className="menu">
          {links.map(l => (
            <a key={l.href} href={l.href}
               className={active === l.href.slice(1) ? "active" : ""}>
              {l.label}
            </a>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
