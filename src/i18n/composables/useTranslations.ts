import { watch } from "vue";
import { loadTranslations } from "../utils/load";
import { locale, translations } from "../store";
import { onMounted } from "vue";

export const useTranslations = () => {
  onMounted(() => {
    // Force English locale for the entire site
    locale.value = "en";
  });

  // Do not persist or auto-detect locale; keep site in English only.

  watch(
    locale,
    async (newLocale) => {
      if (!newLocale) return;
      translations.value = (await loadTranslations("common", newLocale)) ?? {};
    },
    { immediate: true },
  );
};
