import { useState } from 'react';
import { NativeScrollEvent, NativeSyntheticEvent } from 'react-native';
import { useNavigate } from '../../hooks/useNavigation';

const usePolicyViewModel = () => {
  const navigate = useNavigate();
  const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);

  const onDecline = () => {
    // Handle decline action - go back
    navigate.goBack();
  };

  const onAccept = () => {
    if (!hasScrolledToBottom) return;
    // Handle accept action - navigate to next screen (e.g., Login)
    console.log('Policy accepted');
    navigate.reset({
      index: 0,
      routes: [{ name: 'LogIn' }],
    });
  };

  const onBack = () => {
    navigate.goBack();
  };

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    const paddingToBottom = 20;
    const isAtBottom = layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
    
    if (isAtBottom && !hasScrolledToBottom) {
      setHasScrolledToBottom(true);
    }
  };

  return {
    onDecline,
    onAccept,
    onBack,
    handleScroll,
    hasScrolledToBottom,
  };
};

export default usePolicyViewModel;
