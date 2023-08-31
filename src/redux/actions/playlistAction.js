import { getPlaylist } from "../../api/playlist";

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
