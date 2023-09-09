/**
 * 轮播图管理模块的接口
 */
import request from "../utils/request";

// 轮播图的展示效果
export const fetchCarouselListSync = () => {
  return request({
    method: "get",
    url: "/carousel/list",
  });
};

// 轮播图的删除接口
export const deleteCarouselSync = (newDeleteData) => {
  return request({
    method: "post",
    url: "/carousel/delete",
    data: newDeleteData,
  });
};
