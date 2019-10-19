const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
    statu:"",
    statu3:0,
    statubc:0,
    statu4:0,
    statu5:0
  },
  back: function () {
    music1.play();
    wx.navigateBack({
      url: '../one',
    })
  },
  next:function(){
    music1.play();
    wx.redirectTo({
      url: '../test12/one2',
    })
  },
  nf3:function(e){
    if(e.detail.value=="3NF"){
      this.setData({
        statu3:1
      })
    }
    else{
      this.setData({
        statu3:0
      })
    }
  },
  nfbc: function (e) {
    if (e.detail.value == "BCNF") {
      this.setData({
        statubc: 1
      })
    }
    else{
      this.setData({
        statubc:0
      })
    }
  },
  nf4: function (e) {
    if (e.detail.value == "4NF") {
      this.setData({
        statu4: 1
      })
    }
    else{
      this.setData({
        statu4:0
      })
    }
  },
  nf5: function (e) {
    if (e.detail.value == "5NF") {
      this.setData({
        statu5: 1
      })
    }
    else{
      this.setData({
        statu5:0
      })
    }
  },
  check:function(){
    music2.play();
    if(this.data.statu3 == 1 && this.data.statubc == 1 && this.data.statu4 == 1&& this.data.statu5 == 1){
      this.setData({
        statu:"成功"
      })
    }
    else{
      this.setData({
        statu:"失败",
      })
    }
    wx.showModal({
      title: '答案',
      content: '3NF BCNF 4NF 5NF',
      showCancel: false,
      confirmColor: "#d80404",
      confirmText: "我知道了"
    })
  },
})