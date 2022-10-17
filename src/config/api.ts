import axios from "axios";

const api = axios.create({
	baseURL: "https://web-production-38f2.up.railway.app",
});

export default api;