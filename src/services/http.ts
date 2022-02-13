import api from "./api";

const getAdvice = async () => await api.get("/advice");

export { getAdvice };
