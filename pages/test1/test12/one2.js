const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
    statu:"",
    statu1:0,
    statu2:0,
    statu3:0,
    statu4:0,
    statu5:0,
    statu6:0,
    statu7:0,
    statu8:0,
    statu9:0,
    statu10:0
  },
  change1:function(){
    if(this.data.statu1==0){
      this.setData({
        statu1:1
      })
    }
  },
  change2: function () {
    if (this.data.statu2 == 0) {
      this.setData({
        statu2: 1
      })
    }
  },
  change3: function () {
    if (this.data.statu3 == 0) {
      this.setData({
        statu3: 1
      })
    }
  },
  change4: function () {
    if (this.data.statu4 == 0) {
      this.setData({
        statu4: 1
      })
    }
  },
  change5: function () {
    if (this.data.statu5 == 0) {
      this.setData({
        statu5: 1
      })
    }
  },
  change6: function () {
    if (this.data.statu6 == 0) {
      this.setData({
        statu6: 1
      })
    }
  },
  change7: function () {
    if (this.data.statu7 == 0) {
      this.setData({
        statu7: 1
      })
    }
  },
  change8: function () {
    if (this.data.statu8 == 0) {
      this.setData({
        statu8: 1
      })
    }
  },
  change9: function () {
    if (this.data.statu9 == 0) {
      this.setData({
        statu9: 1
      })
    }
  },
  change10: function () {
    if (this.data.statu10 == 0) {
      this.setData({
        statu10: 1
      })
    }
  },
  back:function(){
    music1.play();
    wx.redirectTo({
      url: '../test11/one1',
    })
  },
  check: function () {
    music2.play();
    if (this.data.statu1 == 1 && this.data.statu5 == 1 && this.data.statu7 == 1 && this.data.statu9 == 1 && this.data.statu2 ==0 &&this.data.statu3 ==0 && this.data.statu4 ==0 && this.data.statu6 == 0 && this.data.statu8 == 0 &&this.data.statu10 ==0) {
      this.setData({
        statu: "成功",
        closed:0
      })
    }
    else {
      this.setData({
        statu: "失败",
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
      content: '点击项：1、5、7、9',
      showCancel: false,
      confirmColor: "#d80404",
      confirmText: "我知道了"
    })
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../test13/one3',
    })
  }
})