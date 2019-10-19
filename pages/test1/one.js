const music = wx.createInnerAudioContext();
music.src = "https://img.tukuppt.com/newpreview_music/09/00/71/5c89452d1a1d351024.mp3"
Page({
  data: {
    array: ["第一关","第二关","第三关","第四关","第五关","第六关","第七关","第八关"],
    index:0
  },

  bindPickerChange: function (e) {
    music.play();
    this.setData({
      index: e.detail.value
    })
    if (e.detail.value == 0) {
      wx.navigateTo({
        url: './test11/one1',
      })
    }
    if (e.detail.value == 1){
      wx.navigateTo({
        url: './test12/one2',
      })
    }
    if (e.detail.value == 2) {
      wx.navigateTo({
        url: './test13/one3',
      })
    }
    if (e.detail.value == 3) {
      wx.navigateTo({
        url: './test14/one4',
      })
    }
    if (e.detail.value == 4) {
      wx.navigateTo({
        url: './test15/one5',
      })
    }
    if (e.detail.value == 5) {
      wx.navigateTo({
        url: './test16/one6',
      })
    }
    if (e.detail.value == 6) {
      wx.navigateTo({
        url: './test17/one7',
      })
    }
    if (e.detail.value == 7) {
      wx.navigateTo({
        url: './test18/one8',
      })
    }
  }
})