var myDate = new Date();
const app = getApp();
Page({
  data: {
    year: myDate.getFullYear(),
    month: myDate.getMonth() + 1,
    day: myDate.getDate(),
    hour: myDate.getHours(),
    minutue: myDate.getMinutes(),
    second: myDate.getSeconds(),
    username: "",
    message1: app.globalData.message1,
    message2: app.globalData.message2,
    message3: app.globalData.message3,
    message4: app.globalData.message4,
    message5: app.globalData.message5,
  },
  onShow: function() {
    this.setData({
      username: app.globalData.userInfo.nickName,
      message1: app.globalData.message1,
      message2: app.globalData.message2,
      message3: app.globalData.message3,
      message4: app.globalData.message4,
      message5: app.globalData.message5,
    })
  },
  onLoad: function () {
    var that = this;
    setInterval(function () {
      var myDate = new Date();
      that.setData({
        year: myDate.getFullYear(),
        month: (myDate.getMonth() + 1),
        day: myDate.getDate(),
        hour: myDate.getHours(),
        minutue: myDate.getMinutes(),
        second: myDate.getSeconds(),
      })
    }, 1000)
  }
})