interface UserModel {
  id: number;
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  pin: string;
  phoneNumber: string;
  email: string;
  isBiometricEnabled: boolean;
};

export default UserModel;
