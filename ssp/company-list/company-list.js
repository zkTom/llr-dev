import wxApi from '../../api/wxApi.js';
import gdApi from '../../api/gdApi.js';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    location: {
      latitude: "",
      longitude: ""
    },
    address: "",
    companyList: [
      {
        name: "test",
        introduction: "balalbalbalbaljla",
        src: '/public/images/s1.jpg'
      },
      {
        name: "test1",
        introduction: "balalbalbalbaljla",
        src: '/public/images/s2.jpg'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 加载用户当前定位,微信定位使用gcj02地图
    let opt = {};
    opt.type = "gcj02";
    wxApi.getCurrentLocation(opt)
      .then(res => {
        this.setData({
          location: {
            latitude: res.latitude,
            longitude: res.longitude
          }
        })
        return gdApi.showAddress({
          latitude: res.latitude,
          longitude: res.longitude});  
      })
      .then(res => {
        console.log('biu', res)
        if (res.status === 0) {
          this.setData({ address: res.result.address })
        }
      })
      .catch(err => console.log(err))
      
  },
  // 选择用户位置
  getLocation() {
    wxApi.chooseLocation()
      .then(res => {
        this.setData({
          address: res.address
        })
      })
      .catch(err => console.log(err))
  },
  // 企业服务分类检索
  search() {
    wx.navigateTo({
      url: '../search/search',
    })
  }
})