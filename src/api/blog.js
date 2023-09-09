/**
 * blog的接口
 */
import request from "../utils/request";

// 获取博客评论的接口
export const fetchBloglistSync = () => {
  return request({
    method: "get",
    url: "/blog/list",
  });
};

// 删除博客的接口
export const deleteBlogSync = (newDeleteData) => {
  return request({
    method: "post",
    url: "/blog/delete",
    data: newDeleteData,
  });
};
