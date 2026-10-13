"use client";
import { useState } from "react";
import Image from "next/image";
import { navLinks } from "@/lib/data";
import { LOGO } from "@/lib/brand";

// Figma: cream patti. Dahni taraf logo, bayen taraf links (mobile par hamburger).
export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="topbar">
      <div className="container topbar-in">
        <a href="#top" className="logo" aria-label={LOGO.alt}>
          <Image src={LOGO.src} alt={LOGO.alt} width={LOGO.width} height={LOGO.height} priority />
        </a>
        <nav aria-label="مرکزی مینو">
          <ul className={open ? "open" : ""}>
            {navLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <button className="burger" aria-label="مینو" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
}
