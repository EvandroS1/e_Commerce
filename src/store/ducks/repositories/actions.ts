import { action } from 'typesafe-actions';
import { RepositoriesTypes, Repository } from './types';

export const loadRequest = (category: string) => action(RepositoriesTypes.LOAD_REQUEST, category);

export const loadSucces = (data: Repository[]) =>
  action(RepositoriesTypes.LOAD_SUCCES, { data });

export const loadFailure = () => action(RepositoriesTypes.LOAD_FAILURE);

