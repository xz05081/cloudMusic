import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import "./login.css";

export default function login() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="loginContainer">
      {/* 遮罩层 */}
      <div className="mask"></div>
      {/* 内部盒子 */}
      <div className="loginCard">
        <text>云音乐</text>
        <Form
          className="form"
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {/* 用户名 */}
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "请输入你的用户名",
              },
            ]}
          >
            <Input />
          </Form.Item>
          {/* 密码输入框 */}
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: "请输入你的密码",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
          {/* 是否记住密码 */}
          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>记住账户</Checkbox>
          </Form.Item>
          {/* 提交按钮 */}
          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              提交
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
