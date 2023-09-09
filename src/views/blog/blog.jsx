import React, { useEffect, useState } from "react";
import { Table, Button } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { fetchBloglist, deleteBlog } from "../../redux/actions/blogAction";

export default function blog() {
  const blogList = useSelector((state) => state?.bloglist?.blogList);
  const dispatch = useDispatch();

  // 表单的data数据
  const [data, setData] = useState([]);
  // 表单的的Column属性
  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "内容",
      dataIndex: "textValue",
      key: "textValue",
    },
    {
      title: "发布人",
      dataIndex: "nickname",
      key: "nickname",
    },
    {
      title: "操作",
      key: "actions",
      render: (text, record) => (
        <Button
          type="primary"
          danger
          onClick={() => {
            handleDelete(record.key);
          }}
        >
          删除
        </Button>
      ),
    },
  ];

  // 获取博客列表数据的方法
  const getBloglist = () => {
    dispatch(fetchBloglist());
  };
  // 挂载
  useEffect(() => {
    getBloglist();
  }, []);
  // blogList更新时执行---更新的操作
  useEffect(() => {
    console.log("blogList================================", blogList);
    const updatedData = blogList?.map((item, index) => {
      return {
        _id: item._id,
        key: index + 1,
        nickname: item.nickname,
        textValue: item.textValue,
      };
    });
    setData(updatedData);
  }, [blogList]);
  // 删除的方法
  const handleDelete = (key) => {
    console.log(key);
    // 获取删除的数据
    let deleteData = data.find((item) => {
      return key == item.key;
    });
    // 整理删除的数据，并且重新删除数据
    let newDeleteData = {
      _id: deleteData._id,
    };
    dispatch(deleteBlog(newDeleteData));
  };

  return <Table columns={columns} dataSource={data}></Table>;
}
