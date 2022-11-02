import axios from "axios";

const api = axios.create({
	baseURL: "teste.com",
});

export default api;