import styled from "styled-components";
import { register } from "../api";
import { useState } from "react";

export default function SignUp () {

    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const result = await register( id, password, nickname );
            if (result.success) {
            console.log('회원가입 성공');
            } else {
                console.error('회원가입 실패', result.message);
            }
        } catch (error) {
            console.error('회원가입 요청 실패', error);
        }
    }

    return (
        <Container>
            <MembershipBox>
                <input type="text" value={nickname} onChange={(event) => setNickname(event.target.value)} placeholder="닉네임 (1~10자)" minLength="1" maxLength="10"></input>
                <input type="text" value={id} onChange={(event) => setId(event.target.value)} placeholder="아이디 (4~10자)" minLength="4" maxLength="10"></input>
                <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="비밀번호 (4~15자)" minLength="4" maxLength="15"></input>
                <button onSubmit={handleSubmit}>가입하기</button>
            </MembershipBox>
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
const MembershipBox = styled.form`
    background-color: #d1f5f6;
    width: 500px;
    height: 400px;
`;