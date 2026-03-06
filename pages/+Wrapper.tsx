import { I18nextProvider } from "react-i18next";
import { usePageContext } from "vike-react/usePageContext";
import { Config } from "vike-react/Config";
import { createI18nInstance } from "@/i18n-server";

export default function Wrapper({ children }: { children: React.ReactNode }) {
  const pageContext = usePageContext() as any;
  const locale = pageContext.locale || "en";
  const i18nInstance = createI18nInstance(locale);

  return (
    <I18nextProvider i18n={i18nInstance}>
      <Config lang={locale} />
      {children}
    </I18nextProvider>
  );
}
