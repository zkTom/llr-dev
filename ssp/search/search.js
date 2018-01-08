import ShopApi from '../../api/ShopApi.js';

const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputKey: '',
    noResult: '',
    categoryList: [],
    shopList:[],
    noResult: '没有相关结果'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '数据获取中...',
      mask: true
    });

    this.getCategoryList()
      .then(res => {
        this.setData({
          categoryList: res
        })
        wx.hideLoading();
      })
  },
  // 获取分类列表
  getCategoryList() {
    return ShopApi.getCategoryList();
  },
  // 获取店铺列表
  getShopList() {
    return ShopApi.getShopList();
  },
  onSerachTap: function (e) {
    var key = e.detail.value
    if (key != '') {
      wx.showLoading()
      wx.request({
        url: app.globalData.url + 'searchGoods',
        data: {
          keywords: key,
          pagesize: 8,
          page: 1
        },
        success: (res) => {
          wx.hideLoading()
          if (res.data.length == 0) {
            this.setData({
              inputKey: '',
              noResult: '未找到相关商品，换个关键词试试',
              result: res.data.data
            })
          }
          this.setData({
            inputKey: '',
            result: res.data.data
          })
        }
      }) 
    }
  },
  onCloseTap: function (e) {
    this.setData({
      inputKey: ''
    })
  },
  categoryTap(e) {
    let id = e.currentTarget.dataset.id;
    
    wx.showLoading({
      title: '数据加载中...',
      mask: true
    })
    // 生成列表
    setTimeout(() => {
      this.getShopList()
        .then(res => {
          this.setData({
            shopList: res
          })

          wx.hideLoading()
        })
    },500)
  },
  toDetailsTap: function (e) {
    var id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: '../goods-details/index?id=' + id
    })
  },
  
})