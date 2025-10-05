import { useTranslations } from '../i18n/utils';
import { ASSETS_IMG_SAAS, ASSETS_IMG_SERVICES } from './constants';
import type { LanguageKey } from '../i18n/ui';

export const getServices = (lang: LanguageKey) => {
  const t = useTranslations(lang);

  return [
    {
      title: t("services.devops.title"),
      image: `${ASSETS_IMG_SERVICES}${t("services.devops.image")}`,
      link: `/${lang}/services/devops`,
    },
    {
      title: t("services.ai_agents.title"),
      image: `${ASSETS_IMG_SERVICES}${t("services.ai_agents.image")}`,
      link: `/${lang}/services/ai-agents`,
    },
    {
      title: t("services.process_automation.title"),
      image: `${ASSETS_IMG_SERVICES}${t("services.process_automation.image")}`,
      link: `/${lang}/services/process-automation`,
    },
    {
      title: t('services.custom_development.title'),
      image: `${ASSETS_IMG_SERVICES}${t("services.custom_development.image")}`,
      link: `/${lang}/services/custom-development`,
    },
  ];
};

export const getSaasServices = (lang: LanguageKey) => {
  const t = useTranslations(lang);

  return [
    {
      title: t("saas_services.ip_info.title"),
      image: `${ASSETS_IMG_SAAS}${t("saas_services.ip_info.image")}`,
      description: t("saas_services.ip_info.description"),
      link: `/${lang}/saas/ip-info`,
    },
  ];
};