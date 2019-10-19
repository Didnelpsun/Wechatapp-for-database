const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
    color1:"grey",
    color2: "grey",
    color3: "grey",
    color4: "grey",
    color5: "grey",
    color6: "grey",
    color7: "grey",
    color8: "grey",
    color9: "grey",
    statu:"",
    statu1: 0,
    statu2: 0,
    statu3: 0,
    statu4: 0,
    statu5: 0,
    statu6: 0,
    statu7: 0,
    statu8: 0,
    statu9: 0
  },
  change1:function(){
    if(this.data.color1=="grey"){
      this.setData({
        color1:"red",
        statu1:1
      })
    }
    else{
      this.setData({
        color1:"grey",
        statu1:0
      })
    }
  },
  change2: function () {
    if (this.data.color2 == "grey") {
      this.setData({
        color2: "red",
        statu2: 1
      })
    }
    else {
      this.setData({
        color2: "grey",
        statu2: 0
      })
    }
  },
  change3: function () {
    if (this.data.color3 == "grey") {
      this.setData({
        color3: "red",
        statu3: 1
      })
    }
    else {
      this.setData({
        color3: "grey",
        statu3: 0
      })
    }
  },
  change4: function () {
    if (this.data.color4 == "grey") {
      this.setData({
        color4: "red",
        statu4: 1
      })
    }
    else {
      this.setData({
        color4: "grey",
        statu4: 0
      })
    }
  },
  change5: function () {
    if (this.data.color5 == "grey") {
      this.setData({
        color5: "red",
        statu5: 1
      })
    }
    else {
      this.setData({
        color5: "grey",
        statu5: 0
      })
    }
  },
  change6: function () {
    if (this.data.color6 == "grey") {
      this.setData({
        color6: "red",
        statu6: 1
      })
    }
    else {
      this.setData({
        color6: "grey",
        statu6: 0
      })
    }
  },
  change7: function () {
    if (this.data.color7 == "grey") {
      this.setData({
        color7: "red",
        statu7: 1
      })
    }
    else {
      this.setData({
        color7: "grey",
        statu7: 0
      })
    }
  },
  change8: function () {
    if (this.data.color8 == "grey") {
      this.setData({
        color8: "red",
        statu8: 1
      })
    }
    else {
      this.setData({
        color8: "grey",
        statu8: 0
      })
    }
  },
  change9: function () {
    if (this.data.color9 == "grey") {
      this.setData({
        color9: "red",
        statu9: 1
      })
    }
    else {
      this.setData({
        color9: "grey",
        statu9: 0
      })
    }
  },
  back: function () {
    music1.play();
    wx.redirectTo({
      url: '../test12/one2',
    })
  },
  check: function () {
    music2.play();
    if (this.data.statu1 == 1 && this.data.statu3 == 1 && this.data.statu7 == 1 && this.data.statu8 ==1 && this.data.statu9 == 1 && this.data.statu2 == 0 && this.data.statu4 == 0 && this.data.statu5==0 && this.data.statu6 == 0) {
      this.setData({
        statu: "成功"
      })
    }
    else {
      this.setData({
        statu: "失败",
        color1: "grey",
        color2: "grey",
        color3: "grey",
        color4: "grey",
        color5: "grey",
        color6: "grey",
        color7: "grey",
        color8: "grey",
        color9: "grey",
        statu1: 0,
        statu2: 0,
        statu3: 0,
        statu4: 0,
        statu5: 0,
        statu6: 0,
        statu7: 0,
        statu8: 0,
        statu9: 0,
        statu10: 0,
      })
    }
    wx.showModal({
      title: '答案',
      content: '点击项：1、3、7、8、9',
      showCancel: false,
      confirmColor: "#d80404",
      confirmText: "我知道了"
    })
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../test14/one4',
    })
  }
})