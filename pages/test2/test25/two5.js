const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
    statu: "",
    s1: 0,
    items: [
      { name: '1', value: 'AND Product.pname=Order.oname;' },
      { name: '2' , value: 'WHERE ProType.tid=Product.tid'},
      { name: '3' , value: 'FROM Product,Order,ProType;'},
      { name: '4', value: 'ProType' },
      { name: '5', value: 'WHERE' },
      { name: '6', value: 'WHERE Product.pname=Order.oname;' },
      { name: '7', value: 'FROM Order' },
      { name: '8', value: 'FROM Product,Order,ProType' },
      { name: '9', value: 'ProType.tid=Product.tid'},
      { name: '10', value: 'FROM Product' },
      { name: '11', value: 'AND ProType.tid=Product.tid'},
      { name: '12', value: 'FROM Product'}
    ]
  },
  checkboxChange: function(e){
    let string = String(e.detail.value.sort());
    if(string== "1,5,8,9"){
      this.setData({
        s1:1
      })
    }
    else{
      this.setData({
        s1:0
      })
    }
  },
  back: function() {
    music1.play();
    wx.redirectTo({
      url: '../test24/two4',
    })
  },
  check: function() {
    music2.play();
    if (this.data.s1 == 1 ) {
      this.setData({
        statu: "成功"
      })
    } else {
      this.setData({
        statu: "失败",
      })
    }
    wx.showModal({
      title: '答案',
      content: '选择项1、5、8、9',
      showCancel: false,
      confirmColor: "#c5b102",
      confirmText: "我知道了"
    })
  },
  next: function() {
    music1.play();
    wx.redirectTo({
      url: '../test26/two6',
    })
  },
})