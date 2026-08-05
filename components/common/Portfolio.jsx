"use client";

import { useState } from "react";

function WorkCard({ item, index }) {
  const [broken, setBroken] = useState(false);
  const showLogo = Boolean(item.thumbnail) && !broken;

  return (
    <article
      className={`work__item ${item.featured ? "work__item--featured" : ""}`}
      data-reveal
      style={{ "--i": index }}
    >
      <div className="work__shot">
        {item.featured && (
          <span className="work__flag">
            <i className="bi bi-star-fill" aria-hidden="true" />
            Featured
          </span>
        )}
        {showLogo ? (
          /* Third-party brand logos — plain <img> so a broken remote URL
             degrades to the wordmark instead of failing the optimizer. */
          <img
            src={item.thumbnail}
            alt=""
            loading="lazy"
            decoding="async"
            onError={() => setBroken(true)}
          />
        ) : (
          <span className="work__mark" aria-hidden="true">
            {item.title}
          </span>
        )}
      </div>

      <div className="work__body">
        <h3 className="work__title">{item.title}</h3>
        {item.tech && <p className="work__tech">{item.tech}</p>}
        {item.description && <p className="work__desc">{item.description}</p>}
        <a
          className="work__link"
          href={item.link || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit live site
          <i className="bi bi-arrow-up-right" aria-hidden="true" />
        </a>
      </div>
    </article>
  );
}

export default function Portfolio({ portfolioItems = [], primary = false }) {
  const H = primary ? "h1" : "h2";
  return (
    <section className="section" id="portfolio">
      <div className="shell">
        <div className="head" data-reveal>
          <span className="eyebrow">Selected work</span>
          <H>
            {primary ? (
              <>
                Portfolio — <span className="grad">live platforms</span>
              </>
            ) : (
              <>
                Platforms running <span className="grad">live, right now</span>
              </>
            )}
          </H>
          <p>
            Real-time sports products in production across the UK and South
            Africa — sub-second data, 90+ Lighthouse scores, 100K+ daily users.
          </p>
        </div>

        <div className="work">
          {portfolioItems.map((item, i) => (
            <WorkCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
