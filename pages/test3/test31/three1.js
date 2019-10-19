const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
    statu:"",
    s1:0,
    s2:0,
    s3:0,
    s4:0,
    s5:0,
    s6:0,
    s7:0,
    s8:0
  },
  b1:function(e){
    if(e.detail.value=="表")
      this.setData({
        s1:1
      })
  },
  b2: function (e) {
    if (e.detail.value == "行")
      this.setData({
        s2: 1
      })
  },
  b3: function (e) {
    if (e.detail.value == "列")
      this.setData({
        s3: 1
      })
  },
  b4: function (e) {
    if (e.detail.value == "元组")
      this.setData({
        s4: 1
      })
  },
  b5: function (e) {
    if (e.detail.value == "集合")
      this.setData({
        s5: 1
      })
  },
  b6: function (e) {
    if (e.detail.value == "元组")
      this.setData({
        s6: 1
      })
  },
  b7: function (e) {
    if (e.detail.value == "属性值")
      this.setData({
        s7: 1
      })
  },
  b8: function (e) {
    if (e.detail.value == "关系名")
      this.setData({
        s8: 1
      })
  },
  back: function () {
    music1.play();
    wx.navigateBack({
      url: '../three',
    })
  },
  check: function () {
    music2.play();
    if (this.data.s1 == 1 && this.data.s2 == 1 && this.data.s3 == 1 && this.data.s4 == 1 && this.data.s5 == 1 && this.data.s6 ==1 && this.data.s7 == 1 && this.data.s8 == 1) {
      this.setData({
        statu: "成功"
      })
    }
    else {
      this.setData({
        statu: "失败",
      })
    }
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../test32/three2',
    })
  },
})