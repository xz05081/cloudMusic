import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchPlayList,
  handlePlayInfo,
} from "../../redux/actions/playlistAction";
import { Space, Table, Button, Modal, Form, Input } from "antd";

export default function PlayList() {
  // react-redux的hook方法
  // 获取歌单列表
  const { playList } = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  // 编辑的切换的布尔值
  const [open, setOpen] = useState(false);

  // 表单的的Column属性
  const columns = [
    {
      title: "#",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "封面",
      dataIndex: "picUrl",
      key: "picUrl",
      render: (text, { picUrl }) => (
        <img src={picUrl} alt="Avatar" style={{ maxWidth: "100px" }}></img>
      ),
    },
    {
      title: "名称",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "操作",
      key: "actions",
      render: (text, record) => (
        <Space size="small">
          <Button onClick={() => handleEdit(record.key)}>编辑</Button>
          <Button type="primary" danger>
            删除
          </Button>
        </Space>
      ),
    },
  ];
  // 表单的data数据
  const [data, setData] = useState([]);
  // 加载效果的布尔值
  const [loading, setLoading] = useState(true);
  // Modal的编辑信息
  const [playInfo, setPlayInfo] = useState({
    _id: "",
    name: "",
    action: "",
  });

  // 挂载
  useEffect(() => {
    getPlaylist();
  }, []);

  // playList更新时执行---更新的操作
  useEffect(() => {
    const updatedData = playList.map((item, index) => {
      return {
        _id: item._id,
        key: index + 1,
        picUrl: item.picUrl,
        name: item.name,
      };
    });
    setData(updatedData);
    setLoading(false);
  }, [playList]);

  // 获取歌单列表数据的方法
  const getPlaylist = () => {
    dispatch(fetchPlayList());
  };

  // 编辑按钮的方法
  const handleEdit = (key) => {
    // 获取编辑的数据
    let playInfo = data.find((item) => {
      return key == item.key;
    });
    setPlayInfo({
      _id: playInfo._id,
      name: playInfo.name,
      action: "edit",
    });
    // 打开弹出框
    setOpen(true);
  };

  // 收集输入框的数据
  const handleChange = (e) => {
    setPlayInfo({
      ...playInfo,
      name: e.target.value,
    });
    console.log(playInfo);
  };

  // 弹出框确定的按钮
  const handleOk = () => {
    // 处理数据
    dispatch(handlePlayInfo(playInfo));
    // 关闭对话框
    setOpen(false);
  };

  return (
    <div>
      <Table columns={columns} dataSource={data} loading={loading}></Table>;
      {/* 弹出框---编辑 */}
      <Modal
        title="编辑"
        open={open}
        onOk={() => handleOk()}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <Form>
          <Form.Item label="名称">
            <Input
              style={{ width: "80%" }}
              value={playInfo.name}
              onChange={handleChange}
            ></Input>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}
