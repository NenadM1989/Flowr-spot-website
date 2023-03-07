import axios from "axios";
import { URL } from "../URL";
import { IRegisterData, ILoginData } from "../types/types";

export class AuthService {
  public static async postRegister(data: IRegisterData) {
    try {
      const response = await axios.post(`${URL}/users/register`, data);
      return response;
    } catch (err) {
      console.log("Error occurred", err);
      throw err;
    }
  }

  public static async postLogin(data: ILoginData) {
    try {
      const response = await axios.post(`${URL}/users/login`, data);
      return response;
    } catch (err) {
      console.log("Error occurred", err);
      throw err;
    }
  }
}
