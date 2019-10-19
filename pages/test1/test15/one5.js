const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
      statu:"",
      one:0,
      two:0,
      three:0,
      four:0,
      five:0,
      sum4:0,
      sum5:0
  },
  checkboxChange: function (e) {
      this.setData({
        one:Number(e.detail.value[0]),
        two:Number(e.detail.value[1]),
        three:Number(e.detail.value[2]),
        four:Number(e.detail.value[3]),
        five:Number(e.detail.value[4]),
      })
    var num4 = this.data.one + this.data.two + this.data.three + this.data.four;
    var num5 = this.data.one+this.data.two+this.data.three+this.data.four+this.data.five;
    this.setData({
      sum4:num4,
      sum5:num5
    })
  },
  check:function(){
    music2.play();
    if(this.data.sum5==41&&this.data.sum4==40){
      this.setData({
        statu: "失败",
        closed:1
      })
    }
    if(this.data.sum4==40&&this.data.sum5!=41){
      this.setData({
        statu:"成功",
        closed:0
      })
    }
    if(this.data.sum4<40){
      this.setData({
        statu:"失败",
      })
    }
    wx.showModal({
      title: '答案',
      content: '勾选项：2456',
      showCancel: false,
      confirmColor: "#d80404",
      confirmText: "我知道了"
    })
  },
  back: function () {
    music1.play();
    wx.redirectTo({
      url: '../test14/one4',
    })
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../test16/one6',
    })
  }
})