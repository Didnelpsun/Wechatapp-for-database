const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0,
    s5: 0,
    s6: 0,
    s7: 0,
    s8: 0,
    s9: 0,
    s10: 0,
    s11: 0,
    s12: 0,
    statu: "",
  },
  blur: function (e) {
    if (e.currentTarget.id == 1) {
      if (e.detail.value == "12") {
        this.setData({
          s1: 1
        })
      }
      else {
        this.setData({
          s1: 0
        })
      }
    }
    if (e.currentTarget.id == 2) {
      if (e.detail.value == "3") {
        this.setData({
          s2: 1
        })
      }
      else {
        this.setData({
          s2: 0
        })
      }
    }
    if (e.currentTarget.id == 3) {
      if (e.detail.value == "9") {
        this.setData({
          s3: 1
        })
      }
      else {
        this.setData({
          s3: 0
        })
      }
    }
    if (e.currentTarget.id == 4) {
      if (e.detail.value == "1") {
        this.setData({
          s4: 1
        })
      }
      else {
        this.setData({
          s4: 0
        })
      }
    }
    if (e.currentTarget.id == 5) {
      if (e.detail.value == "8") {
        this.setData({
          s5: 1
        })
      }
      else {
        this.setData({
          s5: 0
        })
      }
    }
    if (e.currentTarget.id == 6) {
      if (e.detail.value == "2") {
        this.setData({
          s6: 1
        })
      }
      else {
        this.setData({
          s6: 0
        })
      }
    }
    if (e.currentTarget.id == 7) {
      if (e.detail.value == "10") {
        this.setData({
          s7: 1
        })
      }
      else {
        this.setData({
          s7: 0
        })
      }
    }
    if (e.currentTarget.id == 8) {
      if (e.detail.value == "5") {
        this.setData({
          s8: 1
        })
      }
      else {
        this.setData({
          s8: 0
        })
      }
    }
    if (e.currentTarget.id == 9) {
      if (e.detail.value == "11") {
        this.setData({
          s9: 1
        })
      }
      else {
        this.setData({
          s9: 0
        })
      }
    }
    if (e.currentTarget.id == 10) {
      if (e.detail.value == "7") {
        this.setData({
          s10: 1
        })
      }
      else {
        this.setData({
          s10: 0
        })
      }
    }
    if (e.currentTarget.id == 11) {
      if (e.detail.value == "4") {
        this.setData({
          s11: 1
        })
      }
      else {
        this.setData({
          s11: 0
        })
      }
    }
    if (e.currentTarget.id == 12) {
      if (e.detail.value == "6") {
        this.setData({
          s12: 1
        })
      }
      else {
        this.setData({
          s12: 0
        })
      }
    }
  },
  back: function () {
    music1.play();
    wx.redirectTo({
      url: '../test42/four2',
    })
  },
  check: function () {
    music2.play();
    if (this.data.s1 == 1 && this.data.s2 == 1 && this.data.s3 == 1 && this.data.s4 == 1 && this.data.s5 == 1 && this.data.s6 == 1 && this.data.s7 == 1 && this.data.s8 == 1 && this.data.s9 == 1 && this.data.s10 == 1 && this.data.s11 == 1 && this.data.s12 == 1) {
      this.setData({
        statu: "成功"
      })
    } else {
      this.setData({
        statu: "失败",
      })
    }
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../../message/message',
    })
    getApp().globalData.message4 = "完成"
  },
})