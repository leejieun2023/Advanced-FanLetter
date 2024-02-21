import styled from "styled-components";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../redux/modules/authSlice";
import { useMutation } from "react-query";
import { signIn, signUp } from "api";
import { toast } from "react-toastify";
import Button from "components/common/Button";
import useForm from "hooks/useForm";

export default function Login() {

  const dispatch = useDispatch();

  const { formData, handleInputChange, resetInput } = useForm({
    id: "",
    password: "",
    nickname: "",
  });
  const { id, password, nickname } = formData;

  const [inLogin, setInLogin] = useState(true);

  const { mutate: mutateToLogin } = useMutation({
    mutationFn: signIn,
    onSuccess: (data) => {
      if (data.success) {
        const { accessToken, userId, avatar, nickname } = data;
        dispatch(login({ accessToken, userId, avatar, nickname }));
        toast.success("로그인에 성공했습니다.");
      }
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });

  const { mutate: mutateToRegister } = useMutation({
    mutationFn: signUp,
    onSuccess: () => {
      setInLogin(true);
      resetInput();
      toast.success("회원가입에 성공했습니다. 로그인 해주세요.");
    },
    onError: (error) => {
      toast.error(error.response.data.message);
    },
  });


  const handleAuth = (event) => {
    event.preventDefault();
    if (inLogin) {
      // 로그인 요청
      if (!id || !password) {
        return toast.warn("아이디, 비밀번호를 다시 확인해주세요.");
      }
      mutateToLogin({ id, password });
    } else {
      // 회원가입 요청
      if (!id || !password || !nickname) {
        return toast.warn("아이디, 비밀번호, 닉네임을 다시 확인해주세요.");
      }
      mutateToRegister({ id, password, nickname });
    }
  };

  return (
    <Container>
      <Form onSubmit={handleAuth}>
        <Title>{inLogin ? "로그인" : "회원가입"}</Title>
        <Input
          name="id"
          placeholder="아이디 (4~10글자)"
          minLength={4}
          maxLength={10}
          onChange={handleInputChange}
          value={id}
          type="text"
          autoFocus
        />
        <Input
          name="password"
          placeholder="비밀번호 (4~15글자)"
          minLength={4}
          maxLength={15}
          onChange={handleInputChange}
          value={password}
          type="password"
        />
        {!inLogin && (
          <Input
            name="nickname"
            placeholder="닉네임 (1~10글자)"
            minLength={1}
            maxLength={10}
            onChange={handleInputChange}
            value={nickname}
            type="text"
          />
        )}
        <Button
          text={inLogin ? "로그인" : "회원가입"}
          size="large"
        />
        <ToggleMenu>
          <span onClick={() => setInLogin((prev) => !prev)}>
            {inLogin ? "회원가입" : "로그인"}
          </span>
        </ToggleMenu>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: rgb(206, 232, 255);
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 12px 18px;
  border-radius: 10px;
  background-color: #d1f5f6;
  width: 500px;
`;
const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 40px;
`;
const Input = styled.input`
  margin-bottom: 25px;
  padding: 10px;
  border: none;
  outline: none;
  border-radius: 5px;
`;
const ToggleMenu = styled.div`
  text-align: center;
  font-size: 16px;
  color: #c5d0dc;
  margin-top: 24px;
  & span {
    user-select: none;
    cursor: pointer;
    &:hover {
      color: black;
      font-weight: 700px;
    }
  }
`;