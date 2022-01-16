import axios from "axios";

const token = localStorage.getItem("@token");

const api = axios.create({
	baseURL: "http://localhost:8080/api",
	headers: { Authorization: `Bearer ${token}` },
});

// api.interceptors.request.use((config: any) => {
//   const token = localstorage.getItem('@token');
//
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

export default api;
