import React, { useEffect, useState } from "react";
import { Button, Table, Upload, Space, message } from "antd";
import {
  fetchCarouselList,
  deleteCarousel,
} from "../../redux/actions/carouselAction";
import { useSelector, useDispatch } from "react-redux";

export default function carousel() {
  const carouselList = useSelector(
    (state) => state?.carousellist?.carouselList
  );
  const dispatch = useDispatch();

  // 获取轮播图初始数据的方法
  const getCarouselList = () => {
    dispatch(fetchCarouselList());
  };
  // 表单的columns
  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "图片",
      dataIndex: "download_url",
      key: "download_url",
      render: (text, { download_url }) => (
        <img
          src={download_url}
          alt="Avatar"
          style={{ maxWidth: "200px" }}
        ></img>
      ),
    },
    {
      title: "操作",
      key: "action",
      render: (text, record) => (
        <Space>
          <Button
            type="primary"
            danger
            onClick={() => {
              handleDelete(record.key);
            }}
          >
            删除
          </Button>
        </Space>
      ),
    },
  ];
  // 表单的data数据
  const [data, setData] = useState([]);
  // 挂载
  useEffect(() => {
    getCarouselList();
  }, []);
  // carouselList的数据更新时变化
  useEffect(() => {
    const updatedData = carouselList?.map((item, index) => {
      return {
        ...item,
        key: index + 1,
      };
    });
    console.log("updatedData============", updatedData);
    setData(updatedData);
  }, [carouselList]);
  // 上传的属性
  const props = {
    name: "file",
    action: "/api/carousel/add",
    // headers: {
    //   authorization: "authorization-text",
    // },
    onChange(info) {
      if (info.file.status !== "uploading") {
      }
      if (info.file.status === "done") {
        message.success(`${info.file.name} 上传成功`);
        getCarouselList();
        // dispatch(addCarousel(info.file));
      } else if (info.file.status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  // 表单的删除方法
  const handleDelete = (key) => {
    // 获取删除的数据
    let deleteData = data.find((item) => {
      return key == item.key;
    });
    // 整理删除的数据，并且重新删除数据
    let newDeleteData = {
      fileid: deleteData.fileId,
    };
    dispatch(deleteCarousel(newDeleteData));
  };

  return (
    <div>
      <Upload {...props}>
        <Button type="primary">新增图片</Button>
      </Upload>
      {/* 表单数据展示 */}
      <Table columns={columns} dataSource={data}></Table>
    </div>
  );
}
