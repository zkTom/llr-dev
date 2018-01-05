//app.js
App({
  // 生命周期函数，小程序初始化完成触发（全局仅触发一次）
  onLaunch: function () {
    this.getUserOpenId(function (data) {
      wx.setStorage({
        key: 'openid',
        data: data.openid
      })
    })
  },
  // 闭包获取openid
  getUserOpenId: function (callback) {
    var self = this
    if (self.globalData.openid) {
      //已获取openid
      callback(null, self.globalData.openid)
    } else {
      wx.login({
        //参考wx.login文档
        success: function (data) {
          console.log(data)
          wx.request({
            url: self.globalData.url + 'onLogin',
            data: {
              code: data.code
            },
            success: function (res) {
              console.log(res)
              console.log('获取用户openid成功')
              self.globalData.openid = res.data.openid
              callback(res.data)
            },
            fail: function (res) {
              console.log('获取用户openid失败，将无法正常使用开放接口等服务')
              callback(res)
            }
          })
        },
        fail: function (err) {
          console.log('wx.login 接口调用失败，将无法正常使用开放接口等服务')
          callback(err)
        }
      })
    }
  },
  // 生命周期函数，小程序进入后台时触发触发
  onHide: function () {
    console.log('app hide');
  },
  // 生命周期函数，小程序从进入前台时触发
  onShow: function () {
    console.log('app show');
  },
  onError: function (e) {
    console.log('app error', e)
  },
  globalData: {
    userInfo: null,
    url: 'https://miniapi.eiewz.cn/index.php/API/WxTestcart/'
  }
})