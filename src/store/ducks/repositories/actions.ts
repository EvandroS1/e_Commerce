import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = () => action(RepositoriesTypes.LOAD_REQUEST);

export const loadSucces = (data: Repository[]) =>
  action(RepositoriesTypes.LOAD_SUCCES, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

// Em seu arquivo de ações
export const loadRequestMensClothing = () =>
  action(RepositoriesTypes.LOAD_REQUEST_MENS_CLOTHING);
export const loadRequestWomensClothing = () =>
  action(RepositoriesTypes.LOAD_REQUEST_WOMENS_CLOTHING);
export const loadRequestJewelery = () =>
  action(RepositoriesTypes.LOAD_REQUEST_JEWELERY);
export const loadRequestElectronics = () =>
  action(RepositoriesTypes.LOAD_REQUEST_ELECTRONICS);
