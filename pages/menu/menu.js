const music =wx.createInnerAudioContext();
music.src ="https://img.tukuppt.com/newpreview_music/09/00/56/5c8934bfd2b1e17409.mp3"
Page({
  data: {
    opacitynumber:"0.8"
  },
  turnto1: function(){
    wx.navigateTo({
      url: '../../pages/test1/one',
    })
    music.play();
  },
  turnto2: function () {
    wx.navigateTo({
      url: '../../pages/test2/two',
    })
    music.play();
  },
  turnto3: function () {
    wx.navigateTo({
      url: '../../pages/test3/three',
    })
    music.play();
  },
  turnto4: function () {
    wx.navigateTo({
      url: '../../pages/test4/four',
    })
    music.play();
  },
  turnto5: function () {
    wx.navigateTo({
      url: '../../pages/test5/five',
    })
    music.play();
  }
})