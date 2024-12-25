import axios from "axios";

const API_URL = "http://localhost:8080/api/stocks";

export const getStocks = async () => axios.get(API_URL);
export const addStock = async (stock) => axios.post(API_URL, stock);
export const updateStock = async (id, stock) => axios.put(`${API_URL}/${id}`, stock);
export const deleteStock = async (id) => axios.delete(`${API_URL}/${id}`);
