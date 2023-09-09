import { fetchCarouselListSync, deleteCarouselSync } from "../../api/carousel";
import { message } from "antd";

// 展示轮播数据的action
export const fetchCarouselList = () => {
  return async (dispatch) => {
    try {
      const res = await fetchCarouselListSync();
      dispatch({
        type: "FETCHCAROUSEL",
        payload: res,
      });
    } catch (error) {
      dispatch({
        type: "FETCH_FAILURE",
      });
    }
  };
};

// 删除轮播图的action
export const deleteCarousel = (newDeleteData) => {
  return async (dispatch) => {
    try {
      console.log(newDeleteData);
      await deleteCarouselSync(newDeleteData);
      message.success("删除成功");
      dispatch(fetchCarouselList());
    } catch (error) {
      dispatch({
        type: "FETCH_FAILURE",
      });
    }
  };
};
