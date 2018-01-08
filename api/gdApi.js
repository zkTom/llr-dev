import config from '../config/index.js';
// http://lbs.qq.com/qqmap_wx_jssdk/method-reverseGeocoder.html
// 引入SDK核心类
const QQMapWX = require('../lib/qqmap-wx-jssdk.min.js');

// 默认经纬度
let default_lat = 39.984060;
let default_lng = 116.307520;
// 实例化API核心类
let map = new QQMapWX({
  key: config.key
});


let gdApi = {
  /**
   * 经纬度转化为具体地址描述
  */
  showAddress: ({latitude = default_lat, longitude = default_lng}) => {
    
    return new Promise((resolve,reject) => {
      map.reverseGeocoder({
        location: {
          latitude: latitude,
          longitude: longitude
        },
        success: res => resolve(res), 
        fail: err => reject(err)
      });
    })
  },
  /**
   * 计算起始点到目标点的距离
   * 默认情况下当前位置为起始点
  */
  calculateDistance: ((options) => {
    let mode = options.mode || 'walking';
    let to = options.to || [];
    let from = options.from || {};

    return new Promise((resolve, reject) => {
      map.calculateDistance({
        from:from,
        mode: mode,
        to: to,
        success: res => resolve(res),
        fail: err => reject(err)
      });
    })
  })
}

export default gdApi;