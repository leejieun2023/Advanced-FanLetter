import styled from "styled-components";
import { login } from '../api';
import { useState } from "react";
import { login as loginAction } from '../redux/modules/authSlice';
import { useDispatch } from "react-redux";

export default function IsLogin({ onSignUpClick }) {

    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            const result = await login(userId, password);
            if (result.success) {
                console.log('로그인 성공');
                dispatch(loginAction());
            } else {
                console.error('로그인 실패', result.message);
            }
        } catch (error) {
            console.error('로그인 요청 실패', error);
        }
    };

    return (
        <Container>
            <p>Login</p>
            <LoginBox>
                <input type="text" value={userId} onChange={(event) => setUserId(event.target.value)} placeholder="아이디"></input>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="비밀번호"></input>
                <button type="submit" onClick={handleLogin}>로그인</button>
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