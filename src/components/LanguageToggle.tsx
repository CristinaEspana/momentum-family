import { useI18n, type Lang } from "@/lib/i18n";

export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useI18n();
  const opts: Lang[] = ["es", "en"];
  return (
    <div
      className={`inline-flex items-center rounded-full border border-border bg-background/70 p-0.5 text-xs font-medium ${className}`}
      role="group"
      aria-label="Language"
    >
      {opts.map((l) => (
        <button
          key={l}
          type="button"
          onClick={() => setLang(l)}
          aria-pressed={lang === l}
          className={`min-w-[36px] rounded-full px-2.5 py-1 uppercase tracking-wide transition-colors ${
            lang === l
              ? "bg-primary text-primary-foreground"
              : "text-foreground/70 hover:text-foreground"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
