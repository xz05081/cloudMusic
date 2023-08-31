import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlayList } from "../../redux/actions/playlistAction";

export default function PlayList() {
  // react-redux的hook方法
  // 获取歌单列表
  const playList = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  // 挂载
  useEffect(() => {
    getPlaylist();
  }, []);

  // playList更新时执行---更新的操作
  useEffect(() => {
    console.log(playList);
  }, [playList]);

  // 获取歌单列表数据的方法
  const getPlaylist = () => {
    dispatch(fetchPlayList());
  };

  return <div>playList</div>;
}
