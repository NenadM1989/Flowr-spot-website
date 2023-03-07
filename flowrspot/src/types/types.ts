import { Dispatch, SetStateAction, ReactNode } from "react";

export interface RootState {
  favorites: {
    favorites: number[];
  };
  flowers: {
    flowers: IFlower[];
  };
}

export interface IFlower {
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

export interface IFavoritesState {
  favorites: Array<string>;
}

export interface IFlowersState {
  flowers: Array<string>;
}

export interface IProfileProps {
  funct: (arg: boolean) => void;
  funcLog: (arg: boolean) => void;
}

export interface IParams {
  id: string;
}

export interface IFlowerInfo {
  name: string;
  latin_name: string;
  profile_picture: string;
  sightings: number;
}

export interface ICreateAnAccountProps {
  func: (arg: boolean) => void;
}

export interface IModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

export type CardSightingProps = {
  picture: string;
};

export interface CardListProps {
  flowers: IFlower[];
}

export interface ICardCommentsProps {
  width: string;
}

export interface ICardProps {
  name: string;
  latinName: string;
  profilePicture: string;
  sightings: number;
  id: number;
}

export interface IButtonProps {
  children: ReactNode;
  color: string;
  background: string;
}

export interface IRegisterData {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
}

export interface ILoginData {
  email: string;
  password: string;
}
