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
    statu: "",
    clientWidth: wx.getSystemInfoSync().windowWidth,
    clientHeight: wx.getSystemInfoSync().windowHeight,
  },
  t1: function(e) {
    if (e.detail.x > -15 && e.detail.x < 15 && e.detail.y > (this.data.clientHeight / 4 - 15) && e.detail.y < (this.data.clientHeight / 4 + 15)) {
      this.setData({
        s1: 1,
      })
    } else
      this.setData({
        s1: 0
      })
  },
  t2: function(e) {
    if (e.detail.x > (this.data.clientWidth * 8 / 15 - 15) && e.detail.x < (this.data.clientWidth * 8 / 15 + 15) && e.detail.y > (this.data.clientHeight / 8 * 3 - 15) && e.detail.y < (this.data.clientHeight / 8 * 3 + 15)) {
      this.setData({
        s2: 1,
      })
    } else
      this.setData({
        s2: 0
      })
  },
  t3: function(e) {
    if (e.detail.x > (this.data.clientWidth * 8 / 15 - 15) && e.detail.x < (this.data.clientWidth * 8 / 15 + 15) && e.detail.y > (this.data.clientHeight / 4 - 15) && e.detail.y < (this.data.clientHeight / 4 + 15)) {
      this.setData({
        s3: 1,
      })
    } else
      this.setData({
        s3: 0
      })
  },
  t4: function(e) {
    if (e.detail.x > -15 && e.detail.x < 15 && e.detail.y > (this.data.clientHeight / 8 - 15) && e.detail.y < (this.data.clientHeight / 8 + 15)) {
      this.setData({
        s4: 1,
      })
    } else
      this.setData({
        s4: 0
      })
  },
  t5: function(e) {
    if (e.detail.x > (this.data.clientWidth * 8 / 15 - 15) && e.detail.x < (this.data.clientWidth * 8 / 15 + 15) && e.detail.y > (this.data.clientHeight / 8 - 15) && e.detail.y < (this.data.clientHeight / 8 + 15)) {
      this.setData({
        s5: 1,
      })
    } else
      this.setData({
        s5: 0
      })
  },
  t6: function(e) {
    if (e.detail.x > -15 && e.detail.x < 15 && e.detail.y > (this.data.clientHeight / 8 * 3 - 15) && e.detail.y < (this.data.clientHeight / 8 * 3 + 15)) {
      this.setData({
        s6: 1,
      })
    } else
      this.setData({
        s6: 0
      })
  },
  change: function (e) {
    if (e.detail.value == "SELECT Bname,Bno\nFROM Book\nGROUP BY Bname\nHAVING MAX(Cno)>3;") {
        this.setData({
          s7: 1
        })
      } 
      else {
        this.setData({
          s7: 0
        })
      }
  },
  back: function() {
    music1.play();
    wx.redirectTo({
      url: '../test23/two3',
    })
  },
  check: function() {
    music2.play();
    if (this.data.s1 == 1 && this.data.s2 == 1 && this.data.s3 == 1 && this.data.s4 == 1 && this.data.s5 == 1 && this.data.s6 == 1 && this.data.s7 == 1) {
      this.setData({
        statu: "成功"
      })
    } else {
      this.setData({
        statu: "失败",
      })
    }
  },
  next: function() {
    music1.play();
    wx.redirectTo({
      url: '../test25/two5',
    })
  },
})