export default () => {
  const siteUrl = process.env.SITE_URL || "https://berget.ai";
  return `${siteUrl}/api/og?title=${encodeURIComponent("Berget AI")}`;
};
