export default function Resume({ resumeData = {}, primary = false }) {
  const H = primary ? "h1" : "h2";
  const {
    summary = {},
    experience = [],
    education = [],
    projects = [],
    certifications = [],
    languages = [],
    leadership = [],
  } = resumeData;

  return (
    <section className="section" id="resume">
      <div className="shell">
        <div className="head" data-reveal>
          <span className="eyebrow">Résumé</span>
          <H>
            {primary ? (
              <>
                Résumé — <span className="grad">Muhammad Gohar</span>
              </>
            ) : (
              <>
                Three years, <span className="grad">shipped</span>
              </>
            )}
          </H>
          <p>{summary?.intro}</p>
        </div>

        <div className="resume__grid">
          {/* ── Experience timeline ─────────────────────────── */}
          <div>
            <h3 className="subhead">Professional Experience</h3>
            <div className="timeline">
              {experience.map((job, i) => (
                <article className="tl" key={job.title + job.year} data-reveal style={{ "--i": i }}>
                  <span className="tl__when">{job.year}</span>
                  <h4 className="tl__role">{job.title}</h4>
                  <p className="tl__org">{job.company}</p>
                  <ul className="tl__list">
                    {job.responsibilities.map((r) => (
                      <li key={r}>{r}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="block">
              <h3 className="subhead">Project Highlights</h3>
              <div className="stack">
                {projects.map((p) => (
                  <div className="stack__row" key={p.title} data-reveal>
                    <span className="stack__t">{p.title}</span>
                    <span className="stack__m">{p.tech}</span>
                    {p.responsibilities?.map((r) => (
                      <p
                        key={r}
                        style={{
                          fontSize: "0.88rem",
                          color: "var(--text-dim)",
                          marginTop: "0.35rem",
                        }}
                      >
                        {r}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Side rail ───────────────────────────────────── */}
          <aside>
            <div className="block" style={{ marginTop: 0 }}>
              <h3 className="subhead">Education</h3>
              {education.map((e) => (
                <div key={e.degree} data-reveal>
                  <span className="tl__when">{e.year}</span>
                  <h4 style={{ fontSize: "var(--step-1)", margin: "0.3rem 0" }}>
                    {e.degree}
                  </h4>
                  <p className="tl__org">{e.institution}</p>
                  <p style={{ fontSize: "0.88rem", color: "var(--text-dim)" }}>
                    {e.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="block">
              <h3 className="subhead">Certifications</h3>
              <div className="stack" data-reveal>
                {certifications.map((c) => (
                  <div className="stack__row" key={c.name}>
                    <span className="stack__t">{c.name}</span>
                    <span className="stack__m">
                      {[c.institution, c.year].filter(Boolean).join(" · ")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="block">
              <h3 className="subhead">Languages</h3>
              <div className="techcat__tags" data-reveal>
                {languages.map((l) => (
                  <span className="tag" key={l}>
                    {l}
                  </span>
                ))}
              </div>
            </div>

            <div className="block">
              <h3 className="subhead">Leadership</h3>
              <div className="stack" data-reveal>
                {leadership.map((l) => (
                  <div className="stack__row" key={l}>
                    <span className="stack__t">{l}</span>
                  </div>
                ))}
              </div>
            </div>

            {summary?.details?.length > 0 && (
              <div className="block">
                <h3 className="subhead">Details</h3>
                <div className="stack" data-reveal>
                  {summary.details.map((d) => (
                    <div className="stack__row" key={d}>
                      <span className="stack__m" style={{ fontSize: "0.8rem" }}>
                        {d}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
