import axios from "axios";
import { URL } from "../URL";

export class AuthService {
  static async postRegister(data: any): Promise<any> {
    try {
      const response = await axios.post(
        "https://flowrspot-api.herokuapp.com/api/v1/users/register",
        data
      );
      return response;
    } catch (err) {
      console.log("Error occurred", err);
      throw err;
    }
  }

  static async postLogin(data: any): Promise<any> {
    try {
      const response = await axios.post(
        "https://flowrspot-api.herokuapp.com/api/v1/users/login",
        data
      );
      return response;
    } catch (err) {
      console.log("Error occurred", err);
      throw err;
    }
  }
}
