Page({
  data: {
    array: ['中国', '美国', '巴西', '日本'],
    multiArray: [['中国', '美国', '巴西', '日本'],['China', 'USA', 'Brazil', 'Japanese']],
    multiIndex: [0, 0],
    index: 0,
    date: '2016-09-01',
    time: '12:01',
    region: ['广东省', '广州市', '海珠区'],
    customItem: '请选择'
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  mutiPickerChange(e) {
    console.log('多列选择picker发送选择改变，携带值为', e.detail.value);
    this.setData({
      multiIndex: e.detail.value
    })
  },
  multiColumnChange(e) {
    console.log('多列选择picker发送选择改变，携带值为', e.detail.value)
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function (e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  }
})
