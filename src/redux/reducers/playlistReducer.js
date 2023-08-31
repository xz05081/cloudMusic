/**
 * 歌单管理的reducer
 */
// 初始值
const initPlaylist = {
  playList: [],
};
const playListReducer = (state = initPlaylist, action) => {
  console.log(action);
  switch (action.type) {
    case "FETCHPLAYLIST":
      return {
        ...state,
        playList: action.payload,
      };
    case "FETCH_FAILURE":
      return null;
    default:
      return state;
  }
};

export default playListReducer;
