import { SectionContainer } from "@/components/kit/SectionContainer";
import { content } from "@/data/content";

const SocialIcon = ({ platform }: { platform: "linkedin" | "instagram" | "x" }) => {
  if (platform === "linkedin") {
    return (
      <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  }
  if (platform === "instagram") {
    return (
      <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
      </svg>
    );
  }
  return (
    <svg className="size-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
};

export function Footer() {
  return (
    <footer className="bg-ink text-paper py-16">
      <SectionContainer>
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <span className="font-display text-2xl font-bold">
            {content.footer.headline}
          </span>
          <div className="flex gap-8">
            {content.footer.columns.map((col) => (
              <div key={col.title} className="flex flex-col gap-2">
                <span className="text-xs uppercase tracking-widest text-mist">
                  {col.title}
                </span>
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("https://");

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      className="text-sm text-paper/70 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noreferrer" : undefined}
                    >
                      {link.label}
                    </a>
                  );
                })}
              </div>
            ))}
            <div className="flex flex-col gap-2">
              <span className="text-xs uppercase tracking-widest text-mist">
                Connect
              </span>
              <div className="flex items-center gap-4">
                {content.footer.socials.map((social) => (
                  <a
                    key={social.platform}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noreferrer"
                    className="text-paper/70 transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    <SocialIcon platform={social.platform} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-mist">{content.footer.legal}</span>
          <a
            href={content.footer.creditHref}
            className="text-xs text-mist transition-colors hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            target="_blank"
            rel="noreferrer"
          >
            {content.footer.velixoCredit}
          </a>
        </div>
      </SectionContainer>
    </footer>
  );
}
