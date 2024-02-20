import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://moneyfulpublicpolicy.co.kr',
});

// 회원가입 요청
export const register = async ( id, password, nickname ) => {
    const response = await api.post('/register', { id, password, nickname });
    return response.data;
};

// 로그인 요청
export const login = async ( id, password ) => {
    const response = await api.post('/login', { id, password });
    const data = response.data;

    if (data.success) {
        localStorage.setItem('accessToken', data.accessToken);
    }

    return response.data;
};

// 회원정보 확인 요청
export const getUserInfo = async ( token ) => {
    const response = await api.get('/user', {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};