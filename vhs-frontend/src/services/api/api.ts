import axios from "axios";
import {TapeInputs} from "../../components/CreateTape";

const API_URL = ' http://localhost:3000/api';

export async function getAll() {
    const response = await axios.get(`${API_URL}/vhs`)
    return response.data;
}

export async function getOne(id: string) {
    const response = await axios.get(`${API_URL}/vhs/${id}`)
    return response.data;
}

export async function create(payload: Partial<TapeInputs>) {
    const response = await axios.post(`${API_URL}/vhs/`, payload)
    return response.data;
}

export async function deleteOne(id: string) {
    const response = await axios.delete(`${API_URL}/vhs/${id}`)
    return response.data;
}
