import wxApi from '../../api/wxApi.js';
import gdApi from '../../api/gdApi.js';
import ShopApi from '../../api/ShopApi.js';
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
    companyList: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据加载中...',
      mask: 'true'
    })
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
          longitude: res.longitude
        });
      }) 
      .then(res => {
        if (res.status === 0) {
          this.setData({ address: res.result.address })
        }

        return ShopApi.getShopList();
      })
      .then(res => {
        this.setData({
          companyList: res
        })
        wx.hideLoading()
      })
      .catch(err => {
        console.log(err);
        wx.hideLoading();
      })
      // 解析用户和门店距离, todo
      // 加载门店列表

  },

  // 加载门店列表
  getShopList() {
    return ShopApi.getShopList()
  },
  // 选择用户位置
  chooseLocation() {
    wxApi.chooseLocation()
      .then(res => {
        this.setData({
          address: res.address
        })
      })
      .catch(err => console.log(err))
  },
  // 获取当前位置
  getCurrentLocation() {
    wx.showLoading({
      title: '定位中...',
      mask: 'true'
    })
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
          longitude: res.longitude
        });
      })
      .then(res => {
        if (res.status === 0) {
          this.setData({ address: res.result.address })
        }
        wx.hideLoading()
      })
      .catch(err => {
        console.log(err);
        wx.hideLoading();
      })
  },
  // 企业服务分类检索
  search() {
    wx.navigateTo({
      url: '../search/search',
    })
  }
})