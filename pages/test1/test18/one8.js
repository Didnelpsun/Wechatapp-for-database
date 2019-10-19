const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
    statu: "",
    s1: 0,
    s2: 0,
    s3: 0,
  },
  b1: function (e) {
    if (e.detail.value == "非平凡") {
      this.setData({
        s1: 1
      })
    }
    else
      this.setData({
        s1: 0
      })
  },
  b2: function (e) {
    if (e.detail.value == "非函数依赖") {
      this.setData({
        s2: 1
      })
    }
    else
      this.setData({
        s2: 0
      })
  },
  b3: function (e) {
    if (e.detail.value == "多值依赖") {
      this.setData({
        s3: 1
      })
    }
    else
      this.setData({
        s3: 0
      })
  },
  back: function () {
    music1.play();
    wx.redirectTo({
      url: '../test17/one7',
    })
  },
  check: function () {
    music2.play();
    if (this.data.s1 == 1 && this.data.s2 == 1 && this.data.s3 == 1) {
      this.setData({
        statu: "成功"
      })
    }
    else
      this.setData({
        statu: "失败"
      })
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../../message/message',
    })
    getApp().globalData.message3 = "完成"
  },
})