/**
 * 获取当前位置
 * type {String} wgs84/gcj02
 * altitude {Boolean} 是否需要高度信息
 * */

let wxApi = {
  getCurrentLocation: ({type="",altitude=false}) => {
    return new Promise((resolve,reject) => {
      wx.getLocation({
        type: type,
        altitude: altitude,
        success: (res) => resolve(res),
        fail: (err) => reject(err)
      })
    })
  },
  // 打开地图选择地理位置
  chooseLocation: () => {
    return new Promise((resolve, reject) => {
      wx.chooseLocation({
        success: res => resolve(res),
        fail: err => reject(err)
      })
    })
  }
}
export default wxApi;