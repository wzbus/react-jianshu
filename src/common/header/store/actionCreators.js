import { fromJS } from 'immutable';
import axios from 'axios';

export const getList = () => {
  return (dispatch) => {
    axios.get('./api/headerList.json').then((res) => {
      const data = res.data;
      const action = {
        type: 'changeList',
        data: fromJS(data.data),
        totalPage: Math.ceil(data.data.length / 10)
      };
			dispatch(action);
		}).catch(() => {
			console.log('error');
		})
  }
}

export const changePage = (page) => ({
	type: 'change_page',
	page
});