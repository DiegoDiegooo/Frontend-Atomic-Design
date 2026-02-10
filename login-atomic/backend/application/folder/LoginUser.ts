import { User } from "../../domain/folder/User";

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export class LoginUser {
  execute({ email, password }: LoginRequest): LoginResponse {
    
    if (!email || !password) {
      throw new Error("Credenciales inválidas");
    }

    return {
      user: {
        id: "1",
        name: "Diego",
        email
      },
      token: "fake-jwt-token"
    };
  }
}