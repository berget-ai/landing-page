import type { PageContext } from "vike/types";

export function lang(pageContext: PageContext) {
  return (pageContext as any).locale || "en";
}
