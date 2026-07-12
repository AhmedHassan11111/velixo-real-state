import { SectionContainer } from "@/components/kit/SectionContainer";
import { content } from "@/data/content";

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
