import axios from 'axios';

export const logout = () => ({
	type: 'logout',
	value: false
})

export const login = (accout, password) => {
	return (dispatch) => {
		axios.get('./api/login.json?account=' + accout + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch({
          type: 'login',
          value: true
        });
			} else {
				alert('登录失败');
			}
		});
	}
}