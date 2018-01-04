Page({
  data: {
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 10,
      iconPath: '../images/location.png',
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园',
      callout: {
        content:"callout ",
        color: 'red',
        fontSize: 20,
        display: 'BYCLICK'
      },
      label: {
        content: "label ",
        color: 'green',
        fontSize: 20,
        latitude: 23.08,
        longitude: 113.2,
        bgColor:'gray'
      }
    },{
      id: 11,
      iconPath: '../images/location.png',
      latitude: 23.08,
      longitude: 113.2,
      name: 'test1'
      },{
      id: 12,
      iconPath: '../images/location.png',
      latitude: 23.01,
      longitude: 113.5,
      name: 'test2'
    }],
    polyline: [{
      points: [{
        longitude: 113.3245211,
        latitude: 23.10229
      }, {
        longitude: 113.324520,
        latitude: 23.21229
      }],
      color: "#FF0000DD",
      width: 2,
      dottedLine: true
    }],
    controls: [{
      id: 2,
      iconPath: '../images/location.png',
      position: {
        left: 0,
        top: 300 - 50,
        width: 50,
        height: 50
      },
      clickable: true
    }],
    circles: [{
      latitude: 23.099994,
      longitude: 113.324520,
      radius: 100,
      fillColor: '#000000AA'
    }],
  },
  regionchange(e) {
    console.log("视野发生变化时触发:",e.type)
  },
  markertap(e) {
    console.log("点击标记点触发:",e.markerId)
  },
  controltap(e) {
    console.log("点击控件时触发:",e.controlId)
  }
})
