/**
 *
 * 博客管理的Reducer
 */
const initBlog = {
  blogList: [],
};

const bloglReducer = (state = initBlog, action) => {
  switch (action.type) {
    case "FETCHBLOG":
      return {
        ...state,
        blogList: action.payload,
      };
    case "FETCH_FAILURE":
      return null;
    default:
      return state;
  }
};

export default bloglReducer;
