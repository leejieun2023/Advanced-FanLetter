import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from 'pages/Home';
import Detail from 'pages/Detail';
import Login from "pages/Login";
import Profile from "pages/Profile";

function Router() {

  const [isLogin, setIsLogin] = useState(true);

  const routes = isLogin ? (
    <>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Detail />} />
      <Route path="/profile" element={<Profile />} />
    </>
  ) : (
    <Route path="*" element={<Login />} />
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