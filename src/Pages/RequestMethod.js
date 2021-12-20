import axios from "axios";

const BASE_URL = "http://localhost:3500/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYjdhNWVkYzBkMjlmMjVhMzhiOTEzNiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MDAxMDgxNywiZXhwIjoxNjQwMjcwMDE3fQ.JH-YHypnw1KB3KaQUl_BoIaPt2q_ryAdjzpB3TCqzzQ";

export const publicRequest = axios.create({
    baseURL: BASE_URL,

})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: {token: `Bearer ${TOKEN}`}
})