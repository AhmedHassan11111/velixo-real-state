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
                {col.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-paper/70 hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-paper/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="text-xs text-mist">{content.footer.legal}</span>
          <span className="text-xs text-mist">{content.footer.velixoCredit}</span>
        </div>
      </SectionContainer>
    </footer>
  );
}
