import request from "../utils/request";
// 获取歌单列表的数据的接口
export const getPlaylist = () => {
  return request({
    method: "get",
    url: "/playlist/list",
  });
};

// 歌单列表的数据更新
export const processPlayInfo = (playInfo) => {
  return request({
    method: "post",
    url: "/playlist/process",
    data: playInfo,
  });
};
