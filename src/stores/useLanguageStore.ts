import { create } from 'zustand';

type LanguageModel = {
  language: 'th' | 'en';
  setLanguage: (language: 'th' | 'en') => void;
};

const useLanguageStore = create<LanguageModel>(set => ({
  language: 'th',
  setLanguage: payload => set({ language: payload }),
}));

export default useLanguageStore;
