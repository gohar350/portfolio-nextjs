import contact from "@/utiles/contact";

const SOCIALS = [
  { href: contact.linkedin, icon: "bi-linkedin", label: "LinkedIn" },
  { href: contact.github, icon: "bi-github", label: "GitHub" },
  { href: `mailto:${contact.email}`, icon: "bi-envelope", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer__in">
        <p className="footer__note">
          © {new Date().getFullYear()} Muhammad Gohar — Frontend Engineer,
          Lahore.
          <br />
          Built with Next.js · No UI framework, no animation library.
        </p>

        <div className="footer__socials">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              aria-label={s.label}
            >
              <i className={`bi ${s.icon}`} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
