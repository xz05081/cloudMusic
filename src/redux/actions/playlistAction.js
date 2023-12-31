import { getPlaylist, processPlayInfo } from "../../api/playlist";
import { message } from "antd";

// 获取歌单列表的actions
export const fetchPlayList = () => {
  return async (dispatch) => {
    try {
      const res = await getPlaylist();
      dispatch({
        type: "FETCHPLAYLIST",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_FAILURE",
      });
    }
  };
};

// 处理歌单列表的方法
export const handlePlayInfo = (playInfo) => {
  return async (dispatch) => {
    try {
      // 操作数据
      await processPlayInfo(playInfo);
      message.success(
        `${playInfo.action == "edit" ? "编辑成功" : "删除成功"} `
      );
      // 重新获取数据
      dispatch(fetchPlayList());
    } catch (error) {
      dispatch({
        type: "FETCH_FAILURE",
      });
    }
  };
};
