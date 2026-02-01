import mockUsers from '../../assets/mock/mock.json';
import {
  LoginPayload,
  LoginResponse,
} from '../../models/types/login/login.model';

export const useLoginService = async (payload: LoginPayload) => {
  const selectedUser = Object.values(mockUsers).find(
    user => user.username === payload.username && user.password === payload.password,
  );

  if(selectedUser){
    return { user: selectedUser } as LoginResponse;
  }else{
    return { user: null } as LoginResponse;
  }
};
