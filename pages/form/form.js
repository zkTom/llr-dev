Page({
  data: {
    pickerHidden: true,
    chosen: ''
  },
  switchHandler: function(e) {
    console.log('当前的switch装态',e.detail.value)
  },
  radiochangeHandler: function(e) {
    console.log('当前的radio装态', e.detail.value)  
  },
  sliderchangeHander: function(e) {
    console.log('当前的slider change装态', e.detail.value)  
  },
  sliderchangingHandler: function(e) {
    console.log('当前的slider changing装态', e.detail.value)  
  },
  inputHandler: function (e) {
    console.log('当前的input 装态', e.detail.value)
  },
  bindHideKeyboard: function(e) {
    if (e.detail.value === '123') {
      // 收起键盘
      wx.hideKeyboard()
    }
  },
  pickerConfirm: function (e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },
  pickerCancel: function (e) {
    this.setData({
      pickerHidden: true
    })
  },
  pickerShow: function (e) {
    this.setData({
      pickerHidden: false
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  },
  formReset: function (e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})
