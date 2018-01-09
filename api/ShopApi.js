import mockPage from '../config/list.js';
import mockCategoryList from '../config/cate.js';
let ShopApi = {
  getShopList: () => {

    return new Promise((resolve, reject) => {
      resolve(mockPage);
    })
  },

  getCategoryList: () => {
    return new Promise((resolve, reject) => {
      resolve(mockCategoryList);
    })
  }
}

export default ShopApi;