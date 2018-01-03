Page({
  data: {
    src: './images/1.jpg',
    errorImage: '../images/1.jpg'
  },
  loadHandler: function(e) {
    console.log('image load',e)
  },
  errHandler: function(e) {
    console.log('image error',e)
    this.setData({
      src:this.errorImage
    })
  }
})
