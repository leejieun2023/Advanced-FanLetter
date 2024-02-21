import axios from 'axios';

export const api = axios.create({
    baseURL: "https://moneyfulpublicpolicy.co.kr",
    headers: {
        "Content-Type": "application/json"
    }
});

// 회원가입 요청
export const signUp = async ({id, password, nickname}) => {
    const response = await api.post("/register", { id, password, nickname });
    return response.data;
};

// 로그인 요청
export const signIn = async ({id, password}) => {
    const response = await api.post("/login", { id, password });
    return response.data;
};

// 회원정보 확인 요청
export const getUserInfo = async (token) => {
    const response = await api.get("/user", {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};