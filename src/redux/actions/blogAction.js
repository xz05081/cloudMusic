import { fetchBloglistSync, deleteBlogSync } from "../../api/blog";
import { message } from "antd";

// 获取博客评论的action
export const fetchBloglist = () => {
  return async (dispatch) => {
    try {
      const res = await fetchBloglistSync();
      dispatch({
        type: "FETCHBLOG",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_FAILURE",
      });
    }
  };
};

// 删除博客评论的action
export const deleteBlog = (newDeleteData) => {
  return async (dispatch) => {
    try {
      await deleteBlogSync(newDeleteData);
      message.success("删除成功");
      dispatch(fetchBloglist());
    } catch (error) {
      dispatch({
        type: "FETCH_FAILURE",
      });
    }
  };
};
