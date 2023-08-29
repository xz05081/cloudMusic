import "./App.css";
import Login from "./views/login/login";
import Home from "./views/home/home";
import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

function App() {
  // 路由跳转实例
  const navigate = useNavigate();
  // 挂载时获取数据
  // useEffect(() => {
  //   // 判断本地存储中是否含有登录信息
  //   let userInfo = localStorage.getItem("userInfo");
  //   if (!userInfo) {
  //     navigate("/login");
  //   }
  // }, []);

  return (
    <Routes>
      <Route path="*" Component={Home} exact></Route>
      <Route path="/login" Component={Login}></Route>
    </Routes>
  );
}

export default App;
