import axios from 'axios'
import { URL } from '../URL'

export class RandomFlowerList {
  static async getFlowers() {
    try {
      const flowers = await axios.get(`${URL}/flowers`)
      return flowers
    } catch (error) {
      console.log(error)
    }
  }

  static async getFlowerById(id: number) {
    try {
      const flower = await axios.get(`${URL}/flowers/${id}`)
      return flower
    } catch (error) {
      console.log(error)
    }
  }
}
