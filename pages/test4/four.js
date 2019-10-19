const music = wx.createInnerAudioContext();
music.src = "https://img.tukuppt.com/newpreview_music/09/00/71/5c89452d1a1d351024.mp3"
Page({
  data: {
    array: ["第一关","第二关","第三关"],
    index:0
  },

  bindPickerChange: function (e) {
    music.play();
    this.setData({
      index: e.detail.value
    })
    if (e.detail.value == 0) {
      wx.navigateTo({
        url: './test41/four1',
      })
    }
    if (e.detail.value == 1){
      wx.navigateTo({
        url: './test42/four2',
      })
    }
    if (e.detail.value == 2) {
      wx.navigateTo({
        url: './test43/four3',
      })
    }
  }
})