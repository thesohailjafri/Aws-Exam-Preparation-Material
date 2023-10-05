import axios, { AxiosRequestConfig } from 'axios'

const axiosInstance = axios.create({
	baseURL: '/api',
})

class APIClient<T> {
	endpoint: string
	constructor(endpoint: string) {
		this.endpoint = endpoint
	}

	getAll = async (config: AxiosRequestConfig) => {
		return axiosInstance.get<T>(this.endpoint, config).then((response) => response.data)
	}

	getOne = async (slug: string) => {
		return axiosInstance.get<T>(`${this.endpoint}/${slug}`).then((response) => response.data)
	}
}

export default APIClient
