import styled from "styled-components";
import { Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/modules/authSlice";

export default function Layout() {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    return (
        <>
            <Header>
                <a onClick={() => navigate("/")}>Home</a>
                <div>
                    <a onClick={() => navigate("/profile")}>마이페이지</a>
                    <span onClick={() => dispatch(logout())}>로그아웃</span>
                </div>
            </Header>
            <Outlet />
        </>
    )
}

const Header = styled.header`
  height: 30px;
  color: white;
  display: flex;
  justify-content: space-between;
  background-color: #003d82;
  align-items: center;
  padding: 10px 20px;
  user-select: none;

  & span {
    margin-left: 30px;
    cursor: pointer;
  }

  & a {
    cursor: pointer;
  }
`;