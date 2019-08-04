import { fromJS } from 'immutable';
import axios from 'axios';

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch({
        type: 'change_home_data',
        topicList: result.topicList,
        articleList: result.articleList,
        recommendList: result.recommendList
      });
		});
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	}
}

const addHomeList = (list, nextPage) => ({
	type: 'add_article_list',
	list: fromJS(list),
	nextPage
});

export const toggleTopShow = (show) => ({
	type: 'toggle_top_scroll',
	show
});