const CATEGORY_META = {
  languages: { icon: "bi-code-slash", name: "Languages" },
  frontend: { icon: "bi-window-stack", name: "Frontend" },
  stateManagement: { icon: "bi-diagram-3", name: "State Management" },
  styling: { icon: "bi-palette", name: "Styling & UI" },
  realTime: { icon: "bi-broadcast-pin", name: "Real-Time" },
  backend: { icon: "bi-hdd-network", name: "Backend" },
  ai: { icon: "bi-robot", name: "AI & Prompt Engineering" },
  devops: { icon: "bi-gear-wide-connected", name: "DevOps & Tools" },
  testing: { icon: "bi-check2-circle", name: "Testing" },
  seo: { icon: "bi-graph-up-arrow", name: "SEO & Performance" },
  practices: { icon: "bi-kanban", name: "Practices" },
};

/* The homepage hero already owns the headline numbers, so the counter strip
   is opt-in — it renders on /about where there is no hero. */
export default function Stats({ stats = {}, showCounters = false }) {
  const { skills = [], technicalSkills = {}, stats: counters = [] } = stats;

  return (
    <section className="section" id="skills">
      <div className="shell">
        {showCounters && (
          <div className="metrics" data-reveal style={{ marginBottom: "clamp(3rem, 8vw, 4.5rem)" }}>
            {counters.map((c) => (
              <div className="metric" key={c.title}>
                <div className="metric__val">
                  <span data-count={c.value} data-suffix={c.suffix ?? ""}>
                    {c.value}
                    {c.suffix ?? ""}
                  </span>
                </div>
                <div className="metric__label">{c.title}</div>
              </div>
            ))}
          </div>
        )}

        <div className="head" data-reveal>
          <span className="eyebrow">Capabilities</span>
          <h2>
            The toolkit behind <span className="grad">the work</span>
          </h2>
          <p>
            Depth where it matters — rendering strategy, state, real-time data
            and Core Web Vitals — plus the AI workflow that compounds all of it.
          </p>
        </div>

        <div className="bars" data-reveal>
          {skills.map((skill, i) => (
            <div key={skill.name}>
              <div className="bar__top">
                <span className="bar__name">{skill.name}</span>
                <span className="bar__val">{skill.percentage}%</span>
              </div>
              <div
                className="bar__track"
                role="meter"
                aria-valuenow={skill.percentage}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={skill.name}
              >
                <span
                  className="bar__fill"
                  style={{ "--w": `${skill.percentage}%`, "--i": i }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="techgrid" style={{ marginTop: "clamp(3rem, 8vw, 4.5rem)" }}>
          {Object.entries(technicalSkills).map(([key, list], i) => {
            const meta = CATEGORY_META[key] ?? { icon: "bi-star", name: key };
            return (
              <div className="card techcat" key={key} data-reveal style={{ "--i": i }}>
                <h3 className="techcat__head">
                  <i className={`bi ${meta.icon}`} aria-hidden="true" />
                  {meta.name}
                </h3>
                <div className="techcat__tags">
                  {list.map((item) => (
                    <span className="tag" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
