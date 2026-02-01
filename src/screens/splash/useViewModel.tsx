import useThemeStore from '../../stores/useThemeStore';

const useViewModel = () => {
  const { isDarkMode } = useThemeStore();

  return {
    isDarkMode,
  };
};

export default useViewModel;
