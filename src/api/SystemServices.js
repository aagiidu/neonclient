import { Post, Get } from '../utils/axios'
import {sysPort} from '../utils/constants'

export default class SystemServices {

	static async Login (username, password) {
		let query = { username, password }
		const response = await Post(`${sysPort}/api/login`, query)
		if (response && response.status === 200) {
			const userInfo = response.data.user
			return {result: 'success', data: userInfo.data }
		} else {
			return {result: 'error', message: 'Нэвтрэлт амжилтгүй. Нэвтрэх мэдээллээ шалгана уу.'}
		}
	}

    static async Register (query) {
		const response = await Post(`${sysPort}/api/register`, query)
		if (response && response.status === 200) {
			const userInfo = response.data.user
			return {result: 'success', data: userInfo.data }
		} else {
			return {isOk: false, message: 'Нэвтрэлт амжилтгүй. Нэвтрэх мэдээллээ шалгана уу.'}
		}
	}

	static async getUserInfo () {
		return await Get(`/api/userinfo`)
	}

}