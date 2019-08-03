import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  articleList: [],
	recommendList: [],
	articlePage: 1
});

const changeHomeData = (state, action) => {
	return state.merge({
    topicList: fromJS(action.topicList),
    articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	});
};

const addArticleList = (state, action) => {
	return state.merge({
		'articleList': state.get('articleList').concat(action.list),
		'articlePage': action.nextPage
	});
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case 'change_home_data':
      return changeHomeData(state, action);
    case 'add_article_list':
			return addArticleList(state, action);
		default:
			return state;
	}
}