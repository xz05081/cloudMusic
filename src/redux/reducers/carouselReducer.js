/**
 * 轮播图管理的Reducer
 */
const initCarousel = {
  carouselList: [],
};
const carouselReducer = (state = initCarousel, action) => {
  switch (action.type) {
    case "FETCHCAROUSEL":
      return {
        ...state,
        carouselList: action.payload,
      };
    case "FETCH_FAILURE":
      return null;
    default:
      return state;
  }
};

export default carouselReducer;
