import React from "react";
import Image from "next/image";
import Link from "next/link";

const Landing = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <Image src="/assets/img/bg-gohar.jpg" alt="" fill priority />
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <div className="hero-badge" data-aos="fade-down" data-aos-delay="100">
          <span className="badge-icon">
            <i className="bi bi-robot"></i>
          </span>
          <span className="badge-text">AI-Powered Developer</span>
        </div>
        <h2 data-aos="fade-up" data-aos-delay="200">
          Muhammad Gohar
        </h2>
        <p data-aos="fade-up" data-aos-delay="300">
          I'm a{" "}
          <span
            className="typed"
            data-typed-items="Frontend Engineer!, React Developer!, Next.js Expert!, AI Prompt Engineer!, TypeScript Developer!, Claude AI Power User!, SEO Specialist!, Full-Stack Developer!"
          >
            Frontend Engineer!
          </span>
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
        </p>
        <div className="hero-stats" data-aos="fade-up" data-aos-delay="400">
          <div className="stat-item">
            <span className="stat-number">5x</span>
            <span className="stat-label">AI Productivity</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100K+</span>
            <span className="stat-label">Daily Users</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2+</span>
            <span className="stat-label">Years Exp</span>
          </div>
        </div>
        <div className="hero-cta" data-aos="fade-up" data-aos-delay="500">
          <Link href="/portfolio" className="cta-button primary">
            <i className="bi bi-briefcase"></i> View Projects
          </Link>
          <Link href="/contact" className="cta-button secondary">
            <i className="bi bi-envelope"></i> Contact Me
          </Link>
        </div>
        <div className="social-links" data-aos="fade-up" data-aos-delay="600">
          <Link
            href="https://www.linkedin.com/in/gohar-butt-390122209/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="bi bi-linkedin"></i>
          </Link>
          <Link
            href="https://github.com/gohar350"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="bi bi-github"></i>
          </Link>
          <Link href="mailto:gohar350butt@gmail.com" aria-label="Email">
            <i className="bi bi-envelope-fill"></i>
          </Link>
        </div>
      </div>
      <div
        className="hero-scroll-indicator"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <span>Scroll Down</span>
        <i className="bi bi-chevron-double-down"></i>
      </div>
    </section>
  );
};

export default Landing;
