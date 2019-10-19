const music = wx.createInnerAudioContext();
music.src = "https://img.tukuppt.com/newpreview_music/09/00/71/5c89452d1a1d351024.mp3"
Page({
  data: {
    array: ["第一关", "第二关", "第三关", "第四关","第五关","第六关"],
    index: 0
  },

  bindPickerChange: function (e) {
    music.play();
    this.setData({
      index: e.detail.value
    })
    if (e.detail.value == 0) {
      wx.navigateTo({
        url: './test21/two1',
      })
    }
    if (e.detail.value == 1) {
      wx.navigateTo({
        url: './test22/two2',
      })
    }
    if (e.detail.value == 2) {
      wx.navigateTo({
        url: './test23/two3',
      })
    }
    if (e.detail.value == 3) {
      wx.navigateTo({
        url: './test24/two4',
      })
    }
    if (e.detail.value == 4) {
      wx.navigateTo({
        url: './test25/two5',
      })
    }
    if (e.detail.value == 5) {
      wx.navigateTo({
        url: './test26/two6',
      })
    }
  }
})