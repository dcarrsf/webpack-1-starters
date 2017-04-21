import * as types from '../action-types';

/*
 * action creators
 */
export default function getFooBarAction(id) {
  switch (id) {
    case 'Foo':
      return { type: types.CLICKED_FOO };
    case 'Bar':
      return { type: types.CLICKED_BAR };
    default: break;
  }
  return { type: types.ERROR_ID };
}
