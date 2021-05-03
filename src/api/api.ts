import axios from "axios";
import { userType } from "../redux/usersReducer";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	withCredentials: true,
	headers: {
		'API-KEY': '2d65fe0a-1514-46af-a3fa-b8e3058ff155'
	}
});

type GetUsersType = {
	items: userType[]
	totalCount: number
	error: string
}
type followUserType = {
	resultCode: number
	messages: string[]
	data: {}
}

export const usersAPI = {
	getUsers: (currentPage: number = 1, pageSize: number = 5) => {
		return instance
			.get<GetUsersType>(`users?page=${currentPage}&count=${pageSize}`)
			.then(response => response.data)
	},
	followUser: (id: string) => {
		return instance
			.post<followUserType>(`follow/${id}`)
			.then(response => response.data)
	},
	unfollowUser: (id: string) => {
		return instance
			.delete<followUserType>(`follow/${id}`)
			.then(response => response.data)
	}
}

type authMeType = {
	data: {
		id: number
		email: string
		login: string
	}
	resultCode: number
	messages: string[]
}
type getProfileType = {
	aboutMe: string,
	userId: 0,
	lookingForAJob: true,
	lookingForAJobDescription: string,
	fullName: string,
	contacts: {
		facebook: string,
		website: string,
		vk: string,
		twitter: string,
		instagram: string,
		youtube: string,
		github: string,
		mainLink: string,
	},
	photos: {
		small: string,
		large: string
	}
}

export const authAPI = {
	authMe: () => {
		return instance
			.get<authMeType>(`auth/me`)
			.then(response => response.data)
	},
	getProfile: (userId: string) => {
		return profileAPI.getProfile(userId);
	}
}

type updateUserStatusType = {
	resultCode: number
	messages: string[],
	data: {},
	fieldsErrors: string[]
}

export const profileAPI = {
	getProfile: (userId: string) => {
		return instance
			.get<getProfileType>(`profile/` + userId)
			.then(res => res.data)
	},
	getUserStatus: (userId: string) => {
		return instance
			.get<string>(`profile/status/` + userId)
	},
	updateUserStatus: (status: string) => {
		return instance.put<updateUserStatusType>('profile/status/', { status: status })
			.then(data => data.data);
	}
}
