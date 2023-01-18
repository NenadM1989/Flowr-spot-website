import axios from "axios";
import { URL } from "../URL";

export class RandomFlowerList {
  static async getFlowers() {
    try {
      const flowers = await axios.get(URL);
      return flowers;
    } catch (error) {
      console.log(error);
    }
  }
}
