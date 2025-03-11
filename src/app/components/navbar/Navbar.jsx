"use client";
import "./navbar.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "./navLinks";
import NavbarButton from "./navbarButton/NavbarButton";
import Image from "next/image";
import { useState } from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const path = usePathname();
  const isActive = (href) => path === href;
  const blackThemeLinks = [
    "/mybooking",
    "/help",
    "/edit",
    "/payment",
    "/privacyPolicy",
    "/faq",
    "/serviceAgreement",
  ].includes(path);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };
  return (
    <div className="navbar-wrapper">
      <nav className="navbar-container">
        <div className="navbar-logo-div">
          <div className="menu-icon" onClick={toggleMenu}>
            <Image
              src={blackThemeLinks ? "/menublack.png" : "/menu.png"}
              alt="menu"
              height={21}
              width={32}
            />
          </div>

          <Link href="/">
            {blackThemeLinks ? (
              <Image
                src="/uridoblack.png"
                width={135}
                height={30}
                alt="uRido"
                className="navbar-urido-logo"
              />
            ) : (
              <Image
                src="/uridowhite.png"
                width={135}
                height={30}
                alt="uRido"
                className="navbar-urido-logo"
              />
            )}
          </Link>
        </div>

        <div
          className={`navbar-links ${
            blackThemeLinks ? "black-color-links" : ""
          }`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "active-link" : ""}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <Image
                src="/uridoblack.png"
                width={92}
                height={25}
                alt="uRido"
              />
              <Image
                src="/cross.png"
                alt="cross"
                width={30}
                height={30}
                onClick={() => setMenuOpen(false)}
              />
            </div>

            <div className="mobile-menu-links">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={isActive(link.href) ? "active-link" : ""}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="navbar-button-container">
          <NavbarButton />
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
