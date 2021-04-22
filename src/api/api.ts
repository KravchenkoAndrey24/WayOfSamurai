import axios from "axios";

const baseUrl = 'https://social-network.samuraijs.com/api/1.0/';

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '2d65fe0a-1514-46af-a3fa-b8e3058ff155'
	}
});


export const getUsersAPI = (currentPage: number = 1, pageSize: number = 5) => {
	return instance
		.get(`users?page=${currentPage}&count=${pageSize}`)
		.then(response => response.data)
}

export const followUser = (id: string) => {
	return instance
		.post(baseUrl + `follow/${id}`)
		.then(response => response.data)
}

export const unfollowUser = (id: string) => {
	return instance
		.delete(baseUrl + `follow/${id}`)
		.then(response => response.data)
}

export const authMe = () => {
	return instance
		.get(baseUrl + `auth/me`)
		.then(response => response.data)
}