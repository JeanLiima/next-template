import api from "config/api";

export const exampleApi = {
	getList: async () => (await api.get("/list")).data,
};