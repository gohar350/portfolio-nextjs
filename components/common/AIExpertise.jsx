export default function AIExpertise({ aiExpertise = [], aiWorkflow = [] }) {
  return (
    <section className="section" id="ai">
      <div className="shell">
        <div className="head" data-reveal>
          <span className="eyebrow">AI in the loop</span>
          <h2>
            Shipping with <span className="grad">Claude in the stack</span>
          </h2>
          <p>
            Not autocomplete — a workflow. Claude Code reads the codebase,
            drafts the implementation, writes the tests and the docs, and I
            review every line before it lands.
          </p>
        </div>

        <div className="aigrid">
          {aiExpertise.map((item, i) => (
            <article
              className="card aicard"
              key={item.title}
              data-reveal
              style={{ "--i": i }}
            >
              <span className="aicard__icon">
                <i className={item.icon} aria-hidden="true" />
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>

        {aiWorkflow.length > 0 && (
          <div style={{ marginTop: "clamp(3rem, 8vw, 4.5rem)" }}>
            <h3 className="subhead">The workflow</h3>
            <div className="flow" data-reveal>
              {aiWorkflow.map((step, i) => (
                <div className="flow__step" key={step.step}>
                  <span className="flow__n">{i + 1}</span>
                  <span className="flow__t">
                    {step.step.replace(/^\d+\.\s*/, "")}
                  </span>
                  <span className="flow__d">{step.desc}</span>
                </div>
              ))}
            </div>
            <p className="rail__hint">
              <i className="bi bi-arrow-left-right" aria-hidden="true" />
              Swipe to see every step
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
