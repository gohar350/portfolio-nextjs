import Link from "next/link";

export default function Portfolio({ portfolioItems = [] }) {
  return (
    <section id="portfolio" className="portfolio section dark-background">
      <div className="container section-title">
        <h2>Portfolio</h2>
        <p>Here are the Links of Products I am working on!</p>
      </div>

      <div className="container">
        <div className="portfolio-grid">
          {portfolioItems?.map((item) => (
            <div key={item?.id} className={`portfolio-item ${item?.category}`}>
              <div className="portfolio-content">
                <img
                  src={item?.thumbnail}
                  alt={`${item?.title} Thumbnail`}
                  className="portfolio-img"
                  width={300}
                  height={200}
                />
                <div className="portfolio-info">
                  <h4>{item?.title}</h4>
                  <Link href={item?.link || "#"} className="details-link">
                    Visit Site
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
