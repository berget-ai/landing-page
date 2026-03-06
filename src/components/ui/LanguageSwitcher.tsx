import { useTranslation } from "react-i18next";
import { Button } from "@berget-ai/ui";
import { CountryFlag } from "@/components/ui/country-flag";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "sv" : "en";
    i18n.changeLanguage(newLang);
  };

  const { t } = useTranslation();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="bg-transparent"
      onClick={toggleLanguage}
      aria-label={t("languageSwitcher.label")}
      title={t("languageSwitcher.title")}
    >
      {i18n.language === "en" ? (
        <CountryFlag code="se" size="md" />
      ) : (
        <CountryFlag code="eu" size="md" />
      )}
    </Button>
  );
}
