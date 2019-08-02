const defaultState = {
  focused: false,
  list: []
};

export default (state = defaultState, action) => {
  if (action.type === 'changeList') {
    return {
      list: action.data
    }
  }
  if (action.type === 'search_focus') {
    return {
      focused: true
    }
  }
  if (action.type === 'search_blur') {
    return {
      focused: false
    }
  }
  return state;
}