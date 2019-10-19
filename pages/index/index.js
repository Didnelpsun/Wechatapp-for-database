const app = getApp()
const music = wx.createInnerAudioContext();
Page({
  data: {
    developer:"Didnelpsun",
    motto: '请在测试前仔细阅读每一单元测试的说明\n请点击测试按钮开始测试',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    modalhidden:1,
    keyword:""
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../message/message'
    })
    music.src ="https://img.tukuppt.com/newpreview_music/09/00/64/5c893e1ceead847322.mp3";
    music.play();
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
      })
    } else if (this.data.canIUse){
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      } 
    } else {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
    })
  },
  turntokey:function(){
    this.setData({
      modalhidden:0
    })
  },
  cancel:function(){
    this.setData({
      modalhidden:1,
      keyword:""
    })
    console.log(this.data.keyword)
  },
  inputchange:function(e){
    this.setData({
      keyword:e.detail.value
    })
  },
})
