export default function ContactSection({ data = {}, primary = false }) {
  const H = primary ? "h1" : "h2";
  const channels = [
    {
      icon: "bi-envelope",
      k: "Email",
      v: data.email,
      href: `mailto:${data.email}`,
    },
    {
      icon: "bi-telephone",
      k: "Phone",
      v: data.phone,
      href: `tel:${(data.phone || "").replace(/\s/g, "")}`,
    },
    {
      icon: "bi-geo-alt",
      k: "Based in",
      v: data.location,
      href: null,
    },
  ];

  return (
    <section className="section" id="contact">
      <div className="shell">
        <div className="contact__wrap" data-reveal>
          <div className="contact__inner">
            <span className="eyebrow">Contact</span>
            <H className="contact__title">
              {primary ? (
                <>
                  Contact <span className="grad">Muhammad Gohar</span>
                </>
              ) : (
                <>
                  Let&apos;s build something <span className="grad">fast</span>
                </>
              )}
            </H>
            <p className="contact__lede">
              Open to senior full stack roles, freelance builds and consulting on
              performance, SEO and AI-assisted delivery. I reply within a day.
            </p>

            <div className="channels">
              {channels.map((c) => {
                const inner = (
                  <>
                    <i className={`bi ${c.icon}`} aria-hidden="true" />
                    <span>
                      <span className="channel__k">{c.k}</span>
                      <span className="channel__v">{c.v}</span>
                    </span>
                  </>
                );

                return c.href ? (
                  <a className="channel" href={c.href} key={c.k}>
                    {inner}
                  </a>
                ) : (
                  <div className="channel" key={c.k}>
                    {inner}
                  </div>
                );
              })}
            </div>

            <div className="hero__actions" style={{ marginBottom: 0 }}>
              <a href={`mailto:${data.email}`} className="btn btn--primary">
                <i className="bi bi-send" aria-hidden="true" />
                Email me
              </a>
              <a
                href={data.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost"
              >
                <i className="bi bi-linkedin" aria-hidden="true" />
                Connect on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
