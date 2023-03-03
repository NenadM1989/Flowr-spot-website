import { Dispatch, SetStateAction, ReactNode } from "react";

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

export type NavbarProps = {
  func: (boolean: boolean) => void;
  funct: (boolean: boolean) => void;
  log: (boolean: boolean) => void;
  openProfile: Dispatch<SetStateAction<boolean>>;
};

export interface FavoritesState {
  favorites: Array<string>;
}

export interface FlowersState {
  flowers: Array<string>;
}

export interface ProfileProps {
  funct: (arg: boolean) => void;
  funcLog: (arg: boolean) => void;
}

export interface Params {
  id: string;
}

export interface FlowerInfo {
  name: string;
  latin_name: string;
  profile_picture: string;
  sightings: number;
}

export interface CreateAnAccountProps {
  func: (arg: boolean) => void;
}

export interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export type CardSightingProps = {
  picture: string;
};

export interface CardListProps {
  flowers: Flower[];
}

export interface CardCommentsProps {
  width: string;
}

export interface CardProps {
  name: string;
  latinName: string;
  profilePicture: string;
  sightings: number;
  id: number;
}

export interface ButtonProps {
  children: ReactNode;
  color: string;
  background: string;
}

export interface RegisterData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

export interface LoginData {
  email: string;
  password: string;
}
