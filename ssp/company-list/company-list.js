import wxApi from '../../api/wxApi.js';
import gdApi from '../../api/gdApi.js';
import ShopApi from '../../api/ShopApi.js';
import MyPage from "../..//model/Page.js";

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
    shopPage: new MyPage(),
    scrollHeight: "",
    isLoad: false, // 加载更多
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setScrollHeight();
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
        let shopPage = this.data.shopPage;
        shopPage.list = res.list;
        // shopPage.merge(new MyPage().as(res));
        //let isBottom = shopPage.hasNextPage;
        this.setData({
          shopPage:shopPage,
          //hasNextPage: shopPage.hasNextPage
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
  /**
 * 页面相关事件处理函数--监听用户下拉动作
 */
  onPullDownRefresh: function (e) {
    console.log('pulldown',e);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    this.setData({
      isLoad: true,
      isBottom: false
    })
    // 加载数据
    let timer = setTimeout(() => {
      this.getShopList()
        .then(res => {
          this.setData({
            isLoad: false,
            isBottom: false // 通过返回信息计算而得的
          })    
        })
    },500)
  },
  setScrollHeight() {
    let ww = wx.getSystemInfoSync().windowWidth;
    let wh = wx.getSystemInfoSync().windowHeight;
    let scrollHight = Math.floor(750 / ww * wh);

    this.setData({
      scrollHeight: scrollHight
    })
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