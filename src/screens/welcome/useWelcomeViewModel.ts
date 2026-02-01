import { useTranslation } from 'react-i18next';
import { useNavigate } from '../../hooks/useNavigation';
import useLanguageStore from '../../stores/useLanguageStore';

export type Language = 'en' | 'th';

const useWelcomeViewModel = () => {
  const { setLanguage } = useLanguageStore();
  const navigate = useNavigate();
  const { i18n } = useTranslation();

  const onSelectLanguage = (lang: Language) => {
    navigate.navigation('Policy');
    setLanguage(lang);
    i18n.changeLanguage(lang);
  };

  return {
    onSelectLanguage,
  };
};

export default useWelcomeViewModel;
