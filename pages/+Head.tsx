import { usePageContext } from "vike-react/usePageContext";

export default function Head() {
  const pageContext = usePageContext() as any;
  const locale = pageContext.locale || "en";
  const urlPathname = pageContext.urlPathname || "/";
  const siteUrl =
    typeof process !== "undefined" && process.env?.SITE_URL
      ? process.env.SITE_URL
      : "https://berget.ai";

  return (
    <>
      <meta charSet="UTF-8" />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/logos/berget-icon-black.svg"
        media="(prefers-color-scheme: light)"
      />
      <link
        rel="icon"
        type="image/svg+xml"
        href="/logos/berget-icon-white.svg"
        media="(prefers-color-scheme: dark)"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="keywords"
        content="AI cloud, secure cloud, compliant cloud, sustainable infrastructure, AI applications, Europe cloud service"
      />
      <meta httpEquiv="Accept-CH" content="DPR, Viewport-Width, Width" />
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      <link rel="dns-prefetch" href="//api.berget.ai" />
      <link rel="preconnect" href="//api.berget.ai" crossOrigin="" />
      <link rel="canonical" href={`${siteUrl}${urlPathname}`} />
      <meta property="og:url" content={`${siteUrl}${urlPathname}`} />
      <meta
        property="og:type"
        content={
          urlPathname.startsWith("/blog/") && urlPathname !== "/blog/"
            ? "article"
            : "website"
        }
      />
      <meta property="og:site_name" content="Berget AI" />
      <meta
        property="og:locale"
        content={locale === "sv" ? "sv_SE" : "en_US"}
      />
    </>
  );
}
