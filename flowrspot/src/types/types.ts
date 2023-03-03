export interface RootState {
  favorites: {
    favorites: number[];
  };
  flowers: {
    flowers: Flower[];
  };
}

export interface Flower {
  id: number;
  name: string;
  latin_name: string;
  sightings: number;
  profile_picture: string;
}
