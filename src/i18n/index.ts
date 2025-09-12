export type Lang = "es" | "en";

import es from "./es";
import en from "./en";

export const dict: Record<Lang, Record<string, string>> = { es, en };
