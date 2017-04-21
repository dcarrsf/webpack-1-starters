import * as types from '../action-types';

/*
 * action creators
 */

export default function updateUser (info) {
  return {
    type: types.UPDATE_USER,
    info,
  };
}
