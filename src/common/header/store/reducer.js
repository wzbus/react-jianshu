import { fromJS } from 'immutable';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case 'changeList':
      return state.set('list', action.data).set('totalPage', action.totalPage);
    case 'search_focus':
      return state.set('focused', true);
    case 'search_blur':
      return state.set('focused', false);
    case 'mouse_enter':
			return state.set('mouseIn', true);
		case 'mouse_leave':
      return state.set('mouseIn', false);
    case 'change_page':
			return state.set('page', action.page);
    default:
      return state;
  }
}