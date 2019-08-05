import axios from 'axios';

export const getDetail = (id) => {
	return (dispatch) => {
		axios.get('./api/detail.json?id=' + id).then((res) => {
      const result = res.data.data;
			dispatch({
        type: 'change_detail',
        title: result.title,
        content: result.content
      });
		}).catch(() => {
			console.log('error');
		});
	}
}