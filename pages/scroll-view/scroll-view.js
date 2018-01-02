var order = ['demo1', 'demo2', 'demo3']
Page({
  data: {
    toView: 'demo1'
  },
  upper: function (e) {
    console.log('upper',e)
  },
  lower: function (e) {
    console.log('lower',e)
  },
  scroll: function (e) {
    console.log('scroll',e)
  },
  scrollToTop: function (e) {
    console.log('scrollToTop')
    this.setAction({
      scrollTop: 0
    })
  },
  tap: function (e) {
    

    for (var i = 0; i < order.length; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1],
          scrollTop: (i + 1) * 200
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  }
})
