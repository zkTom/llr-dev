
let loginUrl = 'https://miniapi.eiewz.cn/login';
let app = getApp();

Page({

  data: {
    defaultAvatar: '/public/images/avatar-default.png',
    userInfo: {},
    hasUserInfo: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    }
  },
  loginTap() {
    console.log('登陆');
    let that = this;
    wx.login({
      success: res => {
        if (res.code) {
          wx.request({
            url: loginUrl,
            data: {
              code: res.code
            },
            success: res => {
              console.log(res.data);
              return ;
              // 存入全局变量，子页面只需要使用app.globalData.openid即可获取到当前openid
              that.globalData.openid = res.data.openid;
              wx.setStorage({
                key: 'openid',
                data: res.data.openid
              })
            }
          })
        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }

      }
    })
  }
})
