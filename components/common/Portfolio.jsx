import Link from "next/link";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      category: "app",
      title: "Racing And Sports",
      link: "https://racingandsports.co.uk/",
      thumbnail: "https://racingandsports.co.uk/assets/svg/rasBrandLogo.svg", // Replace with actual thumbnail
    },
    {
      id: 2,
      category: "app",
      title: "Football First",
      link: "https://www.footballfirst.com/",
      thumbnail:
        "https://cms.footballfirst.com/tenanta945c709-47b7-4ed3-8cd2-cdef7275b99c/app/public/images/logo/header_dark_logo_1738321431.svg",
    },
    {
      id: 3,
      category: "app",
      title: "Betway Scores",
      link: "https://www.betwayscores.com/",
      thumbnail:
        "https://www.betwayscores.com/_next/image?url=%2Fimages%2FBetwayLogoNew.png&w=384&q=75",
    },
    {
      id: 4,
      category: "app",
      title: "Score Mania",
      link: "https://www.scoremania.com/",
      thumbnail:
        "https://cms.scoremania.com/tenant6e72ff02-9663-421f-b24d-b5c63955202d/app/public/images/logo/header_light_logo_1738229166.svg",
    },
  ];

  return (
    <section id="portfolio" className="portfolio section dark-background">
      <div className="container section-title">
        <h2>Portfolio</h2>
        <p>Here are the Links of Products I am working on!</p>
      </div>

      <div className="container">
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className={`portfolio-item ${item.category}`}>
              <div className="portfolio-content">
                <img
                  src={item.thumbnail}
                  alt={`${item.title} Thumbnail`}
                  className="portfolio-img"
                  width={300}
                  height={200}
                />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
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
