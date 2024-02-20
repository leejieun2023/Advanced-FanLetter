import styled from "styled-components";

export default function IsLogin({onSignUpClick}) {


  return (
    <Container>
        <p>Login</p>
        <LoginBox>
            <input type="text" placeholder="아이디"></input>
            <input type="password" placeholder="비밀번호"></input>
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