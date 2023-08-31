import request from "../utils/request";
// 获取歌单列表的数据的接口
export const getPlaylist = async () => {
  return await request({
    method: "get",
    url: "/playlist/list",
  });
};
