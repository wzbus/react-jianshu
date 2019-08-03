import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	list: []
});

export default (state = defaultState, action) => {
  if (action.type === 'changeList') {
    return state.set('list', action.data);
  }
  if (action.type === 'search_focus') {
    return state.set('focused', true);
  }
  if (action.type === 'search_blur') {
    return state.set('focused', false);
  }
  return state;
}