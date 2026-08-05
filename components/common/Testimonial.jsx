export default function Testimonials({ testimonials = [] }) {
  return (
    <section className="section" id="testimonials">
      <div className="shell">
        <div className="head" data-reveal>
          <span className="eyebrow">Recommendations</span>
          <h2>
            What colleagues <span className="grad">say</span>
          </h2>
          <p>Unedited recommendations from people I&apos;ve shipped with.</p>
        </div>

        <div className="rail">
          {testimonials.map((t, i) => (
            <article
              className="card rail__item"
              key={t.name}
              data-reveal
              style={{ "--i": i % 3 }}
            >
              <blockquote className="quote">{t.quote}</blockquote>
              <footer className="who">
                <span className="who__n">{t.name}</span>
                <span className="who__p">{t.position}</span>
              </footer>
            </article>
          ))}
        </div>

        <p className="rail__hint">
          <i className="bi bi-arrow-left-right" aria-hidden="true" />
          Swipe for more
        </p>
      </div>
    </section>
  );
}
