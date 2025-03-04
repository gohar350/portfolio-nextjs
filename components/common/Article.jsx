import React from "react";
import Image from "next/image";

const Article = ({ data = {} }) => {
  return (
    <section id={data?.title} className={`${data?.title ?? ""} section`}>
      <div className="container section-title" data-aos="fade-up">
        <h2>{data?.title?.toUpperCase() ?? "Untitled"}</h2>
        <p>{data?.des ?? ""}</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 justify-content-center">
          {data?.img && (
            <div className="col-lg-4">
              <Image
                src={data?.img}
                className="img-fluid"
                alt="Profile"
                width={400}
                height={100}
              />
            </div>
          )}

          {data?.role && (
            <div className="col-lg-8 content">
              <h2>{data?.role?.name ?? "Role Missing"}</h2>
              <p className="fst-italic py-3">{data?.role?.intro ?? ""}</p>

              {/* Splitting info into two columns */}
              <div className="row">
                {[0, 1].map((colIndex) => (
                  <div key={colIndex} className="col-lg-6">
                    <ul>
                      {data?.role?.info?.length
                        ? data?.role?.info
                            ?.slice(
                              colIndex *
                                Math.ceil((data?.role?.info?.length || 0) / 2),
                              (colIndex + 1) *
                                Math.ceil((data?.role?.info?.length || 0) / 2)
                            )
                            .map((item, index) => (
                              <li key={index}>
                                <i className="bi bi-chevron-right"></i>{" "}
                                <strong>{item.label}:</strong>{" "}
                                {item.link ? (
                                  <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    {item.value}
                                  </a>
                                ) : (
                                  <span>{item.value ?? "N/A"}</span>
                                )}
                              </li>
                            ))
                        : null}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Article;
