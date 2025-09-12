import { createContext, useContext, useMemo, useState } from "react";
import { dict } from "../i18n";     // valor
import type { Lang } from "../i18n"; // tipo  ✅

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: (key: string) => string };

const LangContext = createContext<Ctx | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => (localStorage.getItem("lang") as Lang) || "es");
  const t = (key: string) => dict[lang][key] ?? dict.es[key] ?? key;

  const value = useMemo(() => ({
    lang,
    setLang: (l: Lang) => { localStorage.setItem("lang", l); setLang(l); },
    t,
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [lang]);

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
