import { create } from 'zustand';
import { LoadingModel } from '../models/types/loading.model';

const useSplashStore = create<LoadingModel>(set => ({
  isLoading: true,
  setLoading: payload => set({ isLoading: payload }),
}));

export default useSplashStore;