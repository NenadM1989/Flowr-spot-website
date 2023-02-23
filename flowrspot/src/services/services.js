import axios from "axios";
import { URL } from "../URL";

export class RandomFlowerList {
  static async getFlowers() {
    try {
      const flowers = await axios.get(`${URL}/flowers`);
      //console.log(flowers);
      return flowers;
    } catch (error) {
      console.log(error);
    }
  }

  static async getFlowerById(id) {
    //console.log(URL);
    try {
      const flower = await axios.get(`${URL}/flowers/${id}`);
      return flower;
    } catch (error) {
      console.log(error);
    }
  }
}
