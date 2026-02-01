import { useNavigate } from "../../hooks/useNavigation";

const useResetViewModel = () => {
const navigate = useNavigate();
  const onContinue = () => {
    navigate.reset({
      index: 0,
      routes: [{ name: 'LogIn' }],
    });
  };

  return {
    onContinue,
  };
};

export default useResetViewModel;
