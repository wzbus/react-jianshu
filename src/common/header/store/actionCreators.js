import axios from 'axios';

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      const action = {
        type: 'changeList',
        data: data.data
      };
			dispatch(action);
		}).catch(() => {
			console.log('error');
		})
  }
}