"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
          src="/assets/img/gohar.jpeg"
          alt=""
          className="Image-fluid rounded-circle"
          width={120}
          height={100}
        />
      </div>

      <Link
        href="index.html"
        className="logo d-flex align-items-center justify-content-center"
      >
        <h1 className="sitename">Gohar Butt</h1>
      </Link>

      <div className="social-links text-center">
        <Link href="#" className="twitter">
          <i className="bi bi-twitter-x"></i>
        </Link>
        <Link href="#" className="facebook">
          <i className="bi bi-facebook"></i>
        </Link>
        <Link href="#" className="instagram">
          <i className="bi bi-instagram"></i>
        </Link>
        <Link href="#" className="google-plus">
          <i className="bi bi-skype"></i>
        </Link>
        <Link href="#" className="linkedin">
          <i className="bi bi-linkedin"></i>
        </Link>
      </div>

      <nav id="navmenu" className="navmenu">
        <ul>
          <li>
            <Link href="/hero" className="active">
              <i className="bi bi-house navicon"></i>Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              <i className="bi bi-person navicon"></i> About
            </Link>
          </li>
          <li>
            <Link href="/resume">
              <i className="bi bi-file-earmark-text navicon"></i> Resume
            </Link>
          </li>
          <li>
            <Link href="/portfolio">
              <i className="bi bi-images navicon"></i> Portfolio
            </Link>
          </li>
          <li>
            <Link href="/services">
              <i className="bi bi-hdd-stack navicon"></i> Services
            </Link>
          </li>

          <li>
            <Link href="/contact">
              <i className="bi bi-envelope navicon"></i> Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
