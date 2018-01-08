

Page({
  data: {
    imgUrls: [
      {url:'/public/images/s1.jpg'},
      { url:'/public/images/s2.jpg'},
      { url:'/public/images/s3.jpg'}
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: (options) => {
  },
  login: () => {
    wx.login({});
  },
  findService() {
    wx.navigateTo({
      url: '../company-list/company-list',
    })
  }
})