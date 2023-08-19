import "./home.css";
import PlayList from "../playList/playList.jsx";
import Carousel from "../carousel/carousel.jsx";
import Blog from "../blog/blog.jsx";
import React from "react";
import { Menu } from "antd";
import {
  InsertRowAboveOutlined,
  RetweetOutlined,
  LineHeightOutlined,
} from "@ant-design/icons";
import { useNavigate, Route, Routes } from "react-router-dom";

export default function home() {
  // 创建历史实例
  const navigate = useNavigate();

  // 将数据整理为一个对象
  function getItem(label, key, icon) {
    return {
      key,
      icon,
      label,
    };
  }

  // 初始化数据
  const items = [
    getItem("歌单管理", "1", <InsertRowAboveOutlined />),
    getItem("轮播图管理", "2", <RetweetOutlined />),
    getItem("博客管理", "3", <LineHeightOutlined />),
  ];

  // 路由路径的属性
  const pathMap = {
    1: "/playlist",
    2: "/carousel",
    3: "/blog",
  };

  // 被选择时触发的函数
  const onSelect = ({ key }) => {
    // 获取当前的路径
    let path = pathMap[key];
    navigate(path);
  };

  return (
    <div className="Container">
      {/* 侧边栏 */}
      <div className="Sidebar">
        <Menu
          style={{ backgroundColor: "#214F84", color: "white" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={items}
          onSelect={onSelect}
        ></Menu>
      </div>
      <div className="header">222</div>
      <div className="content">
        <Routes>
          <Route path="/playlist" element={<PlayList></PlayList>}></Route>
          <Route path="/carousel" element={<Carousel></Carousel>}></Route>
          <Route path="/blog" element={<Blog></Blog>}></Route>
        </Routes>
      </div>
    </div>
  );
}
