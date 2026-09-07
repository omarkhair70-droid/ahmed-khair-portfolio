import { contactDetails } from "./contact-details";

type ContactActionsProps = {
  variant: "home" | "about";
};

const links = [
  { label: "Behance", href: contactDetails.behance, detail: "Selected work" },
  { label: "LinkedIn", href: contactDetails.linkedin, detail: "Professional profile" },
  { label: "WhatsApp", href: contactDetails.whatsapp, detail: contactDetails.phone },
] as const;

export default function ContactActions({ variant }: ContactActionsProps) {
  const about = variant === "about";
  const prefix = about ? "about-page-end" : "contact";

  return (
    <>
      <a className={`${prefix}__primary contact-action`} href={contactDetails.emailHref}>
        <span className="contact-action__label">Start a <span>conversation</span></span>
        <span className="contact-action__detail">
          <span>{contactDetails.email}</span>
          <span aria-hidden="true">↗</span>
        </span>
      </a>
      <nav className={`${prefix}__links contact-links`} aria-label="Professional contact links">
        {links.map((link) => (
          <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${link.label}${link.label === "WhatsApp" ? `, ${contactDetails.phone}` : ""}, opens in a new tab`}>
            <span className="contact-link__name">{link.label}<span aria-hidden="true"> ↗</span></span>
            <span className="contact-link__detail">{link.detail}</span>
          </a>
        ))}
      </nav>
    </>
  );
}
