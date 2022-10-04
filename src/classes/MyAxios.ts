import axios, { Axios } from 'axios'

export default class MyAxios {
	axios: Axios
	path: string

	constructor(path: string) {
		this.axios = axios
		this.path = path
	}

	getOne = async () => {
		return (await this.axios.get(this.path)).data[0]
	}

	getAll = async () => {
		return await (await this.axios.get(this.path)).data
	}

	update = async (id: string, body: unknown) => {
		return await (await this.axios.put(`${this.path}/${id}`, body)).data
	}
}
