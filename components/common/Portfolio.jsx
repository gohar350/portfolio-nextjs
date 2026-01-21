"use client";
import Link from "next/link";
import { useState } from "react";

const fallbackImage = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Cdefs%3E%3ClinearGradient id='grad' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' style='stop-color:%23667eea'/%3E%3Cstop offset='100%25' style='stop-color:%23764ba2'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='300' height='200' fill='url(%23grad)'/%3E%3Ctext x='150' y='100' font-family='Arial' font-size='16' fill='white' text-anchor='middle' dominant-baseline='middle'%3EProject%3C/text%3E%3C/svg%3E";

function PortfolioCard({ item, index }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div
      className={`portfolio-item ${item?.category} ${item?.featured ? 'featured' : ''}`}
      data-aos="fade-up"
      data-aos-delay={100 + index * 50}
    >
      <div className="portfolio-card">
        {item?.featured && (
          <div className="featured-badge">
            <i className="bi bi-star-fill"></i> Featured Project
          </div>
        )}
        <div className="portfolio-img-wrapper">
          <img
            src={imgError ? fallbackImage : item?.thumbnail}
            alt={`${item?.title}`}
            className="portfolio-img"
            onError={() => setImgError(true)}
          />
        </div>
        <div className="portfolio-info">
          <h4>{item?.title}</h4>
          {item?.tech && <span className="portfolio-tech">{item.tech}</span>}
          {item?.description && <p className="portfolio-desc">{item.description}</p>}
          <Link
            href={item?.link || "#"}
            className="details-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-box-arrow-up-right"></i> Visit Site
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio({ portfolioItems = [] }) {
  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Portfolio</h2>
        <p>High-performance live sports platforms serving 100K+ daily active users</p>
      </div>

      <div className="container">
        <div className="portfolio-grid">
          {portfolioItems?.map((item, index) => (
            <PortfolioCard key={item?.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
