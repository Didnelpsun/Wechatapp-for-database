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
    s4: 0,
    s5: 0,
    s6: 0,
    s7: 0,
    s8: 0,
    s9: 0,
    s10: 0,
    s11: 0,
    s12: 0,
    clientHeight: wx.getSystemInfoSync().windowHeight,
  },
  touch: function(e) {
    if (e.detail.y > this.data.clientHeight/2.5 && e.detail.y < (this.data.clientHeight/4*3)) {
      if (e.currentTarget.id == "v1") {
        this.setData({
          s1: 1
        })
      }
      if (e.currentTarget.id == "v2") {
        this.setData({
          s2: 1
        })
      }
      if (e.currentTarget.id == "v3") {
        this.setData({
          s3: 1
        })
      }
      if (e.currentTarget.id == "v4") {
        this.setData({
          s4: 1
        })
      }
      if (e.currentTarget.id == "v5") {
        this.setData({
          s5: 1
        })
      }
      if (e.currentTarget.id == "v6") {
        this.setData({
          s6: 1
        })
      }
      if (e.currentTarget.id == "v7") {
        this.setData({
          s7: 1
        })
      }
      if (e.currentTarget.id == "v8") {
        this.setData({
          s8: 1
        })
      }
      if (e.currentTarget.id == "v9") {
        this.setData({
          s9: 1
        })
      }
      if (e.currentTarget.id == "v10") {
        this.setData({
          s10: 1
        })
      }
      if (e.currentTarget.id == "v11") {
        this.setData({
          s11: 1
        })
      }
      if (e.currentTarget.id == "v12") {
        this.setData({
          s12: 1
        })
      }
    } else {
      if (e.currentTarget.id == "v1") {
        this.setData({
          s1: 0
        })
      }
      if (e.currentTarget.id == "v2") {
        this.setData({
          s2: 0
        })
      }
      if (e.currentTarget.id == "v3") {
        this.setData({
          s3: 0
        })
      }
      if (e.currentTarget.id == "v4") {
        this.setData({
          s4: 0
        })
      }
      if (e.currentTarget.id == "v5") {
        this.setData({
          s5: 0
        })
      }
      if (e.currentTarget.id == "v6") {
        this.setData({
          s6: 0
        })
      }
      if (e.currentTarget.id == "v7") {
        this.setData({
          s7: 0
        })
      }
      if (e.currentTarget.id == "v8") {
        this.setData({
          s8: 0
        })
      }
      if (e.currentTarget.id == "v9") {
        this.setData({
          s9: 0
        })
      }
      if (e.currentTarget.id == "v10") {
        this.setData({
          s10: 0
        })
      }
      if (e.currentTarget.id == "v11") {
        this.setData({
          s11: 0
        })
      }
      if (e.currentTarget.id == "v12") {
        this.setData({
          s12: 0
        })
      }
    }
  },
  back: function() {
    music1.play();
    wx.redirectTo({
      url: '../test32/three2',
    })
  },
  check: function() {
    music2.play();
    if (this.data.s1 == 1 && this.data.s2 == 1 && this.data.s3 == 0 && this.data.s4 == 1 && this.data.s5 == 1 && this.data.s6 == 1 && this.data.s7 == 1 && this.data.s8 == 1 && this.data.s9 == 1 && this.data.s10 == 1 && this.data.s11 == 1 && this.data.s12 == 0) {
      this.setData({
        statu: "成功"
      })
    } else {
      this.setData({
        statu: "失败",
      })
    }
    wx.showModal({
      title: '答案',
      content: '除了第3和12，即人名长度∈R+和一个表的主键的个数∈N*都需要拖动',
      showCancel: false,
      confirmColor: "#05b686",
      confirmText: "我知道了"
    })
  },
  next: function() {
    music1.play();
    wx.redirectTo({
      url: '../test34/three4',
    })
  },
})