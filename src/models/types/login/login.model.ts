import UserModel from "../../interfaces/user.model";

export type LoginPayload = {
  username: string;
  password: string;
};

export type LoginResponse = {
  user: UserModel | null;
};
