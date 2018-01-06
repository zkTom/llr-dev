// ssp/company-item/company-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    
    item: {
      type: Object,
      value: {
        src: '',
        name: '',
        introduction: '',
        observer: function (v1,v2) {
          console.log(v1,v2)
        }
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
