import axios from "axios";
import { URL } from "../URL";

export class AuthService {
  static async postRegister(data) {
    try {
      const response = await axios.post(`${URL}/users/register`, data);
      return response;
    } catch (err) {
      console.log("Error occurred", err);
    }
  }
}
