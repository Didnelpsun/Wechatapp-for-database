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
    s16: 0,
    s21: 0,
    s22: 0,
    s23: 0,
    s24: 0,
    s25: 0,
    s26: 0,
    s27: 0,
    s31: 0,
    s32: 0,
    s33: 0,
    s34: 0,
    s35: 0,
    s36: 0,
    s37: 0,
    s38: 0,
  },
  c11: function () {
    if (this.data.s11 == 0) {
      this.setData({
        s11: 1
      })
    }
  },
  c12: function () {
    if (this.data.s12 == 0) {
      this.setData({
        s12: 1
      })
    }
  },
  c13: function () {
    if (this.data.s13 == 0) {
      this.setData({
        s13: 1
      })
    }
  },
  c14: function () {
    if (this.data.s14 == 0) {
      this.setData({
        s14: 1
      })
    }
  },
  c15: function () {
    if (this.data.s15 == 0) {
      this.setData({
        s15: 1
      })
    }
  },
  c16: function () {
    if (this.data.s16 == 0) {
      this.setData({
        s16: 1
      })
    }
  },
  c21: function () {
    if (this.data.s21 == 0) {
      this.setData({
        s21: 1
      })
    }
  },
  c22: function () {
    if (this.data.s22 == 0) {
      this.setData({
        s22: 1
      })
    }
  },
  c23: function () {
    if (this.data.s23 == 0) {
      this.setData({
        s23: 1
      })
    }
  },
  c24: function () {
    if (this.data.s24 == 0) {
      this.setData({
        s24: 1
      })
    }
  },
  c25: function () {
    if (this.data.s25 == 0) {
      this.setData({
        s25: 1
      })
    }
  },
  c26: function () {
    if (this.data.s26 == 0) {
      this.setData({
        s26: 1
      })
    }
  },
  c27: function () {
    if (this.data.s27 == 0) {
      this.setData({
        s27: 1
      })
    }
  },
  c31: function () {
    if (this.data.s31 == 0) {
      this.setData({
        s31: 1
      })
    }
  },
  c32: function () {
    if (this.data.s32 == 0) {
      this.setData({
        s32: 1
      })
    }
  },
  c33: function () {
    if (this.data.s33 == 0) {
      this.setData({
        s33: 1
      })
    }
  },
  c34: function () {
    if (this.data.s34 == 0) {
      this.setData({
        s34: 1
      })
    }
  },
  c35: function () {
    if (this.data.s35 == 0) {
      this.setData({
        s35: 1
      })
    }
  },
  c36: function () {
    if (this.data.s36 == 0) {
      this.setData({
        s36: 1
      })
    }
  },
  c37: function () {
    if (this.data.s37 == 0) {
      this.setData({
        s37: 1
      })
    }
  },
  c38: function () {
    if (this.data.s38 == 0) {
      this.setData({
        s38: 1
      })
    }
  },
  back: function () {
    music1.play();
    wx.redirectTo({
      url: '../test15/one5',
    })
  },
  check: function () {
    music2.play();
    if (this.data.s16 == 1 && this.data.s23 == 1 && this.data.s35 == 1 && this.data.s11 == 0 && this.data.s12 == 0 && this.data.s13 == 0 && this.data.s14 == 0 && this.data.s15 == 0 && this.data.s21 == 0 && this.data.s22 == 0 && this.data.s24 == 0 && this.data.s25 == 0 && this.data.s26 == 0 && this.data.s27 == 0 && this.data.s31 == 0 && this.data.s32 == 0 && this.data.s33 == 0 && this.data.s34 == 0 && this.data.s36 == 0 && this.data.s37 == 0 && this.data.s38 == 0 ) {
      this.setData({
        statu: "成功"
      })
    }
    else {
      this.setData({
        statu: "失败",
        s11: 0,
        s12: 0,
        s13: 0,
        s14: 0,
        s15: 0,
        s16: 0,
        s21: 0,
        s22: 0,
        s23: 0,
        s24: 0,
        s25: 0,
        s26: 0,
        s27: 0,
        s28: 0,
        s31: 0,
        s32: 0,
        s33: 0,
        s34: 0,
        s35: 0,
        s36: 0,
        s37: 0,
        s38: 0,
      })
    }
    wx.showModal({
      title: '答案',
      content: '点击项：第一组：作者本名；第二组：老师职位；第三组：投诉号码',
      showCancel: false,
      confirmColor: "#d80404",
      confirmText: "我知道了"
    })
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../test17/one7',
    })
  }
})