"use client";

import { useEffect, useState } from "react";

const links = [
  ["Jogos", "#smaug"],
  ["Web", "#web"],
  ["Habilidades", "#habilidades"],
  ["Pokégotchi", "#pokegotchi"],
  ["Sobre mim", "#sobre"],
  ["Contato", "#contato"],
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <div className={`mobile-nav${open ? " is-open" : ""}`}>
      <button className="mobile-nav-trigger" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
        <span>{open ? "Fechar" : "Menu"}</span><i aria-hidden="true" />
      </button>
      <div className="mobile-nav-panel" id="mobile-navigation" aria-hidden={!open}>
        <nav aria-label="Navegação mobile">
          {links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
        </nav>
        <a className="mobile-nav-contact" href="https://wa.me/5511997396671" target="_blank" rel="noreferrer">Conversar pelo WhatsApp <span>↗</span></a>
      </div>
    </div>
  );
}
