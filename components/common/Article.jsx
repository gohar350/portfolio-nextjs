import Image from "next/image";

export default function Article({ data = {}, primary = false }) {
  const info = data?.role?.info ?? [];
  // Exactly one <h1> per page: this section owns it on /about.
  const H = primary ? "h1" : "h2";

  return (
    <section className="section" id="about">
      <div className="shell">
        <div className="head" data-reveal>
          <span className="eyebrow">About</span>
          <H>
            {primary ? (
              <>
                Muhammad Gohar — <span className="grad">Full Stack Engineer</span>
              </>
            ) : (
              <>
                Engineering for <span className="grad">scale and speed</span>
              </>
            )}
          </H>
          <p>{data?.description}</p>
        </div>

        <div className="about__grid">
          {data?.img && (
            <figure className="portrait" data-reveal>
              <Image
                src={data.img}
                alt="Muhammad Gohar"
                width={520}
                height={650}
                sizes="(max-width: 899px) 340px, 40vw"
                priority
              />
              <figcaption className="portrait__tag">
                <span className="pulse" aria-hidden="true" />
                Lahore, Pakistan
              </figcaption>
            </figure>
          )}

          <div>
            <h3
              className="tl__role"
              style={{ marginBottom: "1rem" }}
              data-reveal
            >
              {data?.role?.name}
            </h3>

            <p className="about__bio" data-reveal style={{ "--i": 1 }}>
              {data?.role?.intro}
            </p>

            <div className="factgrid" data-reveal style={{ "--i": 2 }}>
              {info.map((item) => (
                <div className="fact" key={item.label}>
                  <span className="fact__k">{item.label}</span>
                  <span className="fact__v">
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
