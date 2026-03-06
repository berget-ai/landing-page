import { usePageContext } from "vike-react/usePageContext";
import { useTranslation } from "react-i18next";
import { Home, Search, Mail } from "lucide-react";
import { Button } from "@berget-ai/ui";

export default function Page() {
  const pageContext = usePageContext();
  const { t } = useTranslation();
  const is404 = pageContext.is404;

  if (is404) {
    return (
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-9xl font-bold text-white/20 mb-4">404</h1>
          <h2 className="text-4xl font-bold text-white mb-6">
            {t("notFound.heading")}
          </h2>
          <p className="text-xl text-white/60 mb-8">{t("notFound.message")}</p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <a href="/">
                <Home className="mr-2 h-5 w-5" />
                {t("notFound.buttons.home")}
              </a>
            </Button>

            <Button variant="secondary" size="lg" asChild>
              <a href="/products">
                <Search className="mr-2 h-5 w-5" />
                {t("notFound.buttons.products")}
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild>
              <a href="/contact">
                <Mail className="mr-2 h-5 w-5" />
                {t("notFound.buttons.contact")}
              </a>
            </Button>
          </div>

          <div className="mt-12 p-6 bg-white/5 rounded-lg border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-2">
              {t("notFound.help.title")}
            </h3>
            <p className="text-white/60 text-sm">
              {t("notFound.help.description")}
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-9xl font-bold text-white/20 mb-4">500</h1>
        <h2 className="text-4xl font-bold text-white mb-6">
          Something went wrong
        </h2>
        <p className="text-xl text-white/60 mb-8">
          An unexpected error occurred. Please try again later.
        </p>
        <Button size="lg" asChild>
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Go Home
          </a>
        </Button>
      </div>
    </div>
  );
}
