import Link from "next/link";

export default function Portfolio() {
  const portfolioItems = [
    {
      id: 1,
      category: "app",
      title: "Racing And Sports",
      img: "https://racingandsports.co.uk/_next/image?url=https%3A%2F%2Fras-live.ams3.digitaloceanspaces.com%2Fimages%2Fland%2F900%2F2728_maximilian-doncaster-1.webp&w=3840&q=75",
      link: "https://racingandsports.co.uk/",
    },
    {
      id: 2,
      category: "product",
      title: "Product 1",
      img: "/assets/img/portfolio/product-1.jpg",
    },
    {
      id: 3,
      category: "branding",
      title: "Branding 1",
      img: "/assets/img/portfolio/branding-1.jpg",
    },
    {
      id: 4,
      category: "books",
      title: "Books 1",
      img: "/assets/img/portfolio/books-1.jpg",
    },
    {
      id: 5,
      category: "app",
      title: "App 2",
      img: "/assets/img/portfolio/app-2.jpg",
    },
    {
      id: 6,
      category: "product",
      title: "Product 2",
      img: "/assets/img/portfolio/product-2.jpg",
    },
    {
      id: 7,
      category: "branding",
      title: "Branding 2",
      img: "/assets/img/portfolio/branding-2.jpg",
    },
    {
      id: 8,
      category: "books",
      title: "Books 2",
      img: "/assets/img/portfolio/books-2.jpg",
    },
  ];

  return (
    <section id="portfolio" className="portfolio section light-background">
      <div className="container section-title">
        <h2>Portfolio</h2>
        <p>Here are the Links of Products I am working on !</p>
      </div>

      <div className="container">
        <div className="portfolio-grid">
          {portfolioItems.map((item) => (
            <div key={item.id} className={`portfolio-item ${item.category}`}>
              <div className="portfolio-content">
                <img
                  src={item.img}
                  alt={item.title}
                  className="portfolio-img"
                />
                <div className="portfolio-info">
                  <h4>{item.title}</h4>
                  <details>
                    <img
                      src={item.img}
                      alt={item.title}
                      className="lightbox-img"
                    />
                  </details>
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
