import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Login from "pages/Login";
import Profile from "pages/Profile";

function Router() {

  const isLogin = useSelector((state) => state.auth.isLogin);

  const routes = isLogin ? (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </>
  ) : (
    <>
      <Route path="login" element={<Login />} />
      <Route path="*" element={<Login />} />
    </>
  );

  return (

    <BrowserRouter>
      <Routes>
        {routes}
      </Routes>
    </BrowserRouter>

  );
};

export default Router;