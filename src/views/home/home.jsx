import "./home.css";
import PlayList from "../playList/playList.jsx";
import Carousel from "../carousel/carousel.jsx";
import Blog from "../blog/blog.jsx";
import React, { useState } from "react";
import { Menu, Breadcrumb, Dropdown, Space } from "antd";
import {
  InsertRowAboveOutlined,
  RetweetOutlined,
  LineHeightOutlined,
  MenuFoldOutlined,
  DownOutlined,
} from "@ant-design/icons";
import { useNavigate, Route, Routes, Link } from "react-router-dom";

export default function home() {
  // 创建路由跳转对象
  const navigate = useNavigate();
  // 存储当前点击的信息---共面包屑使用
  const [routeInfo, setRouteInfo] = useState({
    path: "/playlist",
    title: "歌单管理",
  });

  // 侧边栏的导航的初始化数据
  const menuItems = [
    { label: "歌单管理", key: "1", icon: <InsertRowAboveOutlined /> },
    { label: "轮播图管理", key: "2", icon: <RetweetOutlined /> },
    { label: "博客管理", key: "3", icon: <LineHeightOutlined /> },
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
    // 存储相应的数据供面包屑使用
    // 获取路径
    setRouteInfo({
      path,
      title: menuItems.find((item) => item.key == key).label,
    });
    navigate(path);
  };

  // 面包屑的items属性
  const breadItems = [
    {
      path: "",
      title: "主页",
    },
    {
      path: routeInfo.path,
      title: routeInfo.title,
    },
  ];
  // 面包屑节点的属性
  const breadItemsRender = (item, params, items, paths) => {
    const last = items.indexOf(item) === items.length - 1;
    return last ? (
      <span>{item.title}</span>
    ) : (
      <Link to={paths.join("/")}>{item.title}</Link>
    );
  };

  // 下拉菜单的items属性
  const items = [
    {
      key: "1",
      label: <Space>退出登录</Space>,
    },
    {
      key: "2",
      label: <Space>111</Space>,
    },
  ];

  return (
    <div className="Container">
      {/* 侧边栏 */}
      <div className="Sidebar">
        <Menu
          style={{ backgroundColor: "#214F84", color: "white" }}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          items={menuItems}
          onSelect={onSelect}
        ></Menu>
      </div>
      {/* 头部区域 */}
      <div className="header">
        {/* 头部左侧区域 */}
        <div className="headerLeft">
          <MenuFoldOutlined style={{ fontSize: "20px", marginLeft: "10px" }} />
          <Breadcrumb
            style={{ marginLeft: "10px" }}
            itemRender={breadItemsRender}
            items={breadItems}
          ></Breadcrumb>
        </div>
        {/* 头部右侧部分 */}
        <div className="headerRight">
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                更多
                <DownOutlined />
              </Space>
            </a>
          </Dropdown>
        </div>
      </div>
      {/* 内容区域 */}
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
