import styled from "styled-components";
import { login } from '../api';
import { useState } from "react";
import { login as loginAction } from '../redux/modules/authSlice';
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useMutation } from "react-query";

export default function IsLogin({ onSignUpClick }) {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const mutation = useMutation(login, {
        onSuccess: (data) => {
            if (data.success) {
                const { accessToken, userId, nickname } = data;
                dispatch(loginAction({ accessToken, userId, nickname }));
                toast.success("로그인에 성공했습니다.");
            }
        },
        onError: (error) => {
            toast.error(error.response?.data?.message || "로그인에 실패했습니다.");
        }
    });

    const handleLogin = async (event) => {
        event.preventDefault();
        mutation.mutate({ userId, password });
    };

    return (
        <Container>
            <p>Login</p>
            <LoginBox onSubmit={handleLogin}>
                <input type="text" value={userId} onChange={(event) => setUserId(event.target.value)} placeholder="아이디"></input>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="비밀번호"></input>
                <button type="submit">로그인</button>
                <button onClick={onSignUpClick}>회원가입</button>
            </LoginBox>
        </Container>
    )
}

const Container = styled.div`
    background-color: rgb(206, 232, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;
const LoginBox = styled.form`
    background-color: #d1f5f6;
    width: 500px;
    height: 400px;
`;