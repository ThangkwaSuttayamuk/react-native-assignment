import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParams } from '../navigations/RootNavigation';

export function useNavigate() {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const navigateTo = <T extends keyof RootStackParams>(
    screen: T,
    params?: RootStackParams[T]
  ) => {
    navigation.navigate(screen as any, params as any);
  };

  const replaceTo = <T extends keyof RootStackParams>(
    screen: T,
    params?: RootStackParams[T]
  ) => {
    navigation.replace(screen as any, params as any);
  };

  const popTo = <T extends keyof RootStackParams>(
    screen: T,
    params?: RootStackParams[T]
  ) => {
    navigation.popTo(screen as any, params as any);
  };

  return {
    navigation: navigateTo,
    replace: replaceTo,
    popTo,
    goBack: () => navigation.goBack(),
    setParams: navigation.setParams,
    reset: navigation.reset,
  };
}
