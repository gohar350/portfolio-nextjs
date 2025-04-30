"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column ${
        isMenuOpen ? "header-show" : ""
      }`}
    >
      {/* Mobile Menu Toggle Button */}
      <i
        className={`header-toggle d-xl-none bi ${
          isMenuOpen ? "bi-x" : "bi-list"
        }`}
        onClick={toggleMenu}
      ></i>

      <div className="profile-img">
        <Image
          src="/assets/img/gohar.jpg"
          alt="Profile Picture"
          className="Image-fluid rounded-circle"
          width={120}
          height={100}
        />
      </div>

      <Link
        href="/"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">Gohar Butt</h1>
      </Link>

      <div className="social-links text-center">
        {/* <Link href="#" className="twitter">
          <i className="bi bi-twitter-x"></i>
        </Link> */}
        <Link
          href="https://www.facebook.com/gohar.butt.1654/"
          className="facebook"
        >
          <i className="bi bi-facebook"></i>
        </Link>
        <Link href="https://www.instagram.com/povgohar/" className="instagram">
          <i className="bi bi-instagram"></i>
        </Link>
        {/* <Link href="#" className="google-plus">
          <i className="bi bi-skype"></i>
        </Link> */}
        <Link
          href="https://www.linkedin.com/in/gohar-butt-390122209/"
          className="linkedin"
        >
          <i className="bi bi-linkedin"></i>
        </Link>
      </div>

      <nav id="navmenu" className="navmenu" onClick={toggleMenu}>
        <ul>
          <li>
            <Link href="/" className={pathname === "/" ? "active" : ""}>
              <i className="bi bi-house navicon"></i> Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? "active" : ""}
            >
              <i className="bi bi-person navicon"></i> About
            </Link>
          </li>
          <li>
            <Link
              href="/resume"
              className={pathname === "/resume" ? "active" : ""}
            >
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={pathname === "/portfolio" ? "active" : ""}
            >
              <i className="bi bi-images navicon"></i> Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? "active" : ""}
            >
              <i className="bi bi-envelope navicon"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
