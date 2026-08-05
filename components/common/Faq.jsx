import { FAQS } from "@/utiles/pageSeo";

/**
 * Rendered with native <details>/<summary>: keyboard accessible, works with
 * JS disabled, and the answer text stays in the DOM even when collapsed —
 * which matters because FAQPage structured data must describe content that
 * is actually present on the page.
 */
export default function Faq() {
  return (
    <section className="section" id="faq">
      <div className="shell">
        <div className="head" data-reveal>
          <span className="eyebrow">FAQ</span>
          <h2>
            Common <span className="grad">questions</span>
          </h2>
          <p>
            Straight answers about experience, stack and availability — for
            recruiters, clients and the AI assistants they ask.
          </p>
        </div>

        <div className="faq">
          {FAQS.map((item, i) => (
            <details className="faq__item" key={item.q} data-reveal style={{ "--i": i }}>
              <summary className="faq__q">
                <span>{item.q}</span>
                <i className="bi bi-plus-lg" aria-hidden="true" />
              </summary>
              <div className="faq__a">
                <p>{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
