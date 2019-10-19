const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
    statu: "",
    s11: 0,
    s12: 0,
    s13: 0,
    s14: 0,
    s15: 0,
    s21: 0,
    s22: 0,
    s23: 0,
    s24: 0,
    s31: 0,
    s32: 0,
    s33: 0,
    s34: 0,
    s35: 0,
    s36: 0,
  },
  b11: function (e) {
    if (e.detail.value == "书名") {
      this.setData({
        s11: 1
      })
    } else
      this.setData({
        s11: 0
      })
  },
  b12: function (e) {
    if (e.detail.value == "作者") {
      this.setData({
        s12: 1
      })
    }
    else
      this.setData({
        s12: 0
      })
  },
  b13: function (e) {
    if (e.detail.value == "书号") {
      this.setData({
        s13: 1
      })
    }
    else
      this.setData({
        s13: 0
      })
  },
  b14: function (e) {
    if (e.detail.value == "书号") {
      this.setData({
        s14: 1
      })
    }
    else
    this.setData({
      s14:0
    })
  },
  b15: function (e) {
    if (e.detail.value == "书名") {
      this.setData({
        s15: 1
      })
    }
    else
    this.setData({
      s15:0
    })
  },
  b21: function () {
    if (this.data.s21 == 0) {
      this.setData({
        s21: 1
      })
    }
  },
  b22: function () {
    if (this.data.s21 == 0) {
      this.setData({
        s22: 1
      })
    }
  },
  b23: function () {
    if (this.data.s21 == 0) {
      this.setData({
        s23: 1
      })
    }
  },
  b24: function () {
    if (this.data.s21 == 0) {
      this.setData({
        s24: 1
      })
    }
  },
  b31: function (e) {
    if (e.detail.value == "S") {
      this.setData({
        s31: 1
      })
    }
    else
    this.setData({
      s31:0
    })
  },
  b32: function (e) {
    if (e.detail.value == "J") {
      this.setData({
        s32: 1
      })
    }
    else
    this.setData({
      s32:0
    })
  },
  b33: function (e) {
    if (e.detail.value == "T") {
      this.setData({
        s33: 1
      })
    }
    else
    this.setData({
      s33:0
    })
  },
  b34: function (e) {
    if (e.detail.value == "S") {
      this.setData({
        s34: 1
      })
    }
    else
    this.setData({
      s34:0
    })
  },
  b35: function (e) {
    if (e.detail.value == "T") {
      this.setData({
        s35: 1
      })
    }
    else
    this.setData({
      s35:0
    })
  },
  b36: function (e) {
    if (e.detail.value == "J") {
      this.setData({
        s36: 1
      })
    }
    else
    this.setData({
      s36:0
    })
  },
  back: function () {
    music1.play();
    wx.redirectTo({
      url: '../test16/one6',
    })
  },
  check: function () {
    music2.play();
    if (this.data.s11 == 1 && this.data.s12 == 1 && this.data.s13 == 1 && this.data.s14 == 1 && this.data.s15 == 1 && this.data.s21 == 0 && this.data.s22 == 0 && this.data.s23 == 0 && this.data.s24 == 1 && this.data.s31 == 1 && this.data.s32 == 1 && this.data.s33 == 1 && this.data.s34 == 1 && this.data.s35 == 1 && this.data.s36 == 1) {
      this.setData({
        statu: "成功"
      })
    } else {
      this.setData({
        statu: "失败",
        s21: 0,
        s22: 0,
        s23: 0,
        s24: 0,
      })
    }
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../test18/one8',
    })
  },
})