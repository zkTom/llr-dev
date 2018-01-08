// ssp/company-item/company-item.js
Component({
  properties: {
      url: {
        type: String 
      },
      src: {
       type: String 
      },
      name: {
        type: String 
      },
      introduction:{
        type: String 
      },
      address: {
        type: String
      },
      distance:{
        type: Number
      }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toShop() {
      console.log("门店跳转");
      wx.navigateTo({ url: 'https://mp.weixin.qq.com/' })
    }
  }
})
