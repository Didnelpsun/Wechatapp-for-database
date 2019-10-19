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
    statu: "",
    clientWidth: wx.getSystemInfoSync().windowWidth,
    clientHeight: wx.getSystemInfoSync().windowHeight,
  },
  t1: function (e) {
    if ( e.detail.y > (this.data.clientHeight / 4 - 15) && e.detail.y < (this.data.clientHeight / 4 + 15)) {
      this.setData({
        s1: 1,
      })
    } else
      this.setData({
        s1: 0
      })
  },
  t2: function (e) {
    if ( e.detail.y > (this.data.clientHeight / 20*11 - 15) && e.detail.y < (this.data.clientHeight / 20*11 + 15)) {
      this.setData({
        s2: 1,
      })
    } else
      this.setData({
        s2: 0
      })
  },
  t3: function (e) {
    if ( e.detail.y > (this.data.clientHeight / 2.5 - 15) && e.detail.y < (this.data.clientHeight / 2.5 + 15)) {
      this.setData({
        s3: 1,
      })
    } else
      this.setData({
        s3: 0
      })
  },
  t4: function (e) {
    if (e.detail.y > (this.data.clientHeight / 2.5 - 15) && e.detail.y < (this.data.clientHeight / 2.5 + 15)) {
      this.setData({
        s4: 1,
      })
    } else
      this.setData({
        s4: 0
      })
  },
  t5: function (e) {
    if (e.detail.y > (this.data.clientHeight / 4 - 15) && e.detail.y < (this.data.clientHeight / 4 + 15)) {
      this.setData({
        s5: 1,
      })
    } else
      this.setData({
        s5: 0
      })
  },
  t6: function (e) {
    if ( e.detail.y > (this.data.clientHeight / 20*11 - 15) && e.detail.y < (this.data.clientHeight / 20*11 + 15)) {
      this.setData({
        s6: 1,
      })
    } else
      this.setData({
        s6: 0
      })
  },
  t7: function (e) {
    if (e.detail.y > (this.data.clientHeight / 20 * 11 - 15) && e.detail.y < (this.data.clientHeight / 20 * 11 + 15)) {
      this.setData({
        s7: 1,
      })
    } else
      this.setData({
        s7: 0
      })
  },
  t8: function (e) {
    if (e.detail.y > (this.data.clientHeight / 4 - 15) && e.detail.y < (this.data.clientHeight / 4 + 15)) {
      this.setData({
        s8: 1,
      })
    } else
      this.setData({
        s8: 0
      })
  },
  t9: function (e) {
    if (e.detail.y > (this.data.clientHeight / 20 * 11 - 15) && e.detail.y < (this.data.clientHeight / 20 * 11 + 15)) {
      this.setData({
        s9: 1,
      })
    } else
      this.setData({
        s9: 0
      })
  },
  t10: function (e) {
    if (e.detail.y > (this.data.clientHeight / 2.5 - 15) && e.detail.y < (this.data.clientHeight / 2.5 + 15)) {
      this.setData({
        s10: 1,
      })
    } else
      this.setData({
        s10: 0
      })
  },
  back: function () {
    music1.play();
    wx.navigateBack({
      url: '../four',
    })
  },
  check: function () {
    music2.play();
    if (this.data.s1 == 1 && this.data.s2 == 1 && this.data.s3 == 1 && this.data.s4 == 1 && this.data.s5 == 1 && this.data.s6 == 1 && this.data.s7 == 1 && this.data.s8 == 1 && this.data.s9 == 1 && this.data.s10 == 1){
      this.setData({
        statu: "成功"
      })
    }
    else {
      this.setData({
        statu: "失败",
      })
    } wx.showModal({
      title: '答案',
      content: '拖动：1：1：班级与班长、国家与总统、商品编号与商品\n 1：n：姓名与身份证号、班级与学校、商品与生产商\n m：n：学生与课程、老师与课程、学生与老师、商品与存放地址',
      showCancel: false,
      confirmColor: "#1108cc",
      confirmText: "我知道了"
    })
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../test42/four2',
    })
  },
})