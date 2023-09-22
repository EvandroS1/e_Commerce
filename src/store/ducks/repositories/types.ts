// Action types
export enum RepositoriesTypes {
  LOAD_REQUEST = '@repositories/LOAD_REQUEST',
  LOAD_SUCCES = '@repositories/LOAD_SUCCES',
  LOAD_FAILURE = '@repositories/LOAD_FAILURE',
  LOAD_REQUEST_MENS_CLOTHING = '@repositories/LOAD_REQUEST_MENS_CLOTHING',
  LOAD_REQUEST_WOMENS_CLOTHING = '@repositories/LOAD_REQUEST_WOMENS_CLOTHING',
  LOAD_REQUEST_JEWELERY = '@repositories/LOAD_REQUEST_JEWELERY',
  LOAD_REQUEST_ELECTRONICS = '@repositories/LOAD_REQUEST_ELECTRONICS',
}

// Data types

export interface Repository {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

// State type

export interface RepositoriesState {
  readonly data: Repository[];
  readonly loading: boolean;
  readonly error: boolean;
}
