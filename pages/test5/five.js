const music = wx.createInnerAudioContext();
music.src = "https://img.tukuppt.com/newpreview_music/09/00/71/5c89452d1a1d351024.mp3"
Page({
  data: {
    array: ["第一关","第二关"],
    index:0
  },

  bindPickerChange: function (e) {
    music.play();
    this.setData({
      index: e.detail.value
    })
    if (e.detail.value == 0) {
      wx.navigateTo({
        url: './test51/five1',
      })
    }
    if (e.detail.value == 1){
      wx.navigateTo({
        url: './test52/five2',
      })
    }
  }
})