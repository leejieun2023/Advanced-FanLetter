import styled from "styled-components";

export default function Membership({onSignUpClick}) {
    return (
        <Container>
            <MembershipBox>
                <input type="text" placeholder="닉네임 (1~10자)" minLength="1" maxLength="10"></input>
                <input type="text" placeholder="아이디 (4~10자)" minLength="4" maxLength="10"></input>
                <input type="password" placeholder="비밀번호 (4~15자)" minLength="4" maxLength="15"></input>
                <button>가입하기</button>
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