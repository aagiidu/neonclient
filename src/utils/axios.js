import axios from 'axios'

axios.interceptors.response.use((res) => {
	return res
}, (err) => {
	if (err.response && err.response.data.message === 'bad token'){
		// logout here
	}
	return err
})

const Get = async url => {
	return await axios({
		method: 'get',
		url,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin':'*'
		},
	})
}

const Post = async (url, data = {}) => {
	return await axios({
		method: 'post',
		url,
		data: data,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin':'*',
		},
	})
}

const PostFile = async (url, formData) => {
	return await axios({
		method: 'post',
		url,
		data: formData,
		headers: {
			'Content-Type': 'multipart/form-data',
			'Access-Control-Allow-Origin':'*',
		},
	})
}


export { Get, Post, PostFile }
