import axios from "axios";

//const token = localStorage.getItem("@token");

const api = axios.create({
	baseURL: "https://api.adviceslip.com",
	//headers: { Authorization: `Bearer ${token}` },
});

export default api;
