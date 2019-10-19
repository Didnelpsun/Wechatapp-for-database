const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
    statu: "",
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0,
    s5: 0,
    items1: [{
        name: 0,
        value: '姓名'
      },
      {
        name: 1,
        value: '学号'
      },
      {
        name: 0,
        value: '年龄'
      },
      {
        name: 0,
        value: '性别'
      },
      {
        name: 0,
        value: '年级'
      },
      {
        name: 0,
        value: '学院'
      },
      {
        name: 0,
        value: '班主任'
      },
      {
        name: 0,
        value: '手机号'
      },
    ],
    items2: [{
        name: 0,
        value: '仓库地址'
      },
      {
        name: 0,
        value: '仓库名'
      },
      {
        name: 0,
        value: '管理员名'
      },
      {
        name: 0,
        value: '容量'
      },
      {
        name: 1,
        value: '仓库编号'
      },
    ],
    items3: [{
        name: 0,
        value: '航班编号'
      },
      {
        name: 0,
        value: '候机口编号'
      },
      {
        name: 0,
        value: '乘客名'
      },
      {
        name: 1,
        value: '乘客身份证号'
      },
      {
        name: 0,
        value: '目的地'
      },
      {
        name: 0,
        value: '出发地'
      },
      {
        name: 0,
        value: '航空公司名'
      },
      {
        name: 0,
        value: '乘客性别'
      },
    ],
    items4: [{
        name: 1,
        value: '员工名'
      },
      {
        name: 1,
        value: '联系方式'
      },
      {
        name: 0,
        value: '性别'
      },
      {
        name: 0,
        value: '婚姻状况'
      },
      {
        name: 0,
        value: '部门名'
      },
    ],
    items5: [{
        name: 1,
        value: '书本编号'
      },
      {
        name: 0,
        value: '存放地址'
      },
      {
        name: 0,
        value: '借阅时间'
      },
      {
        name: 1,
        value: '复本序号'
      },
      {
        name: 0,
        value: '归还时间'
      },
      {
        name: 0,
        value: '是否被损坏'
      },
      {
        name: 0,
        value: '借阅者'
      },
    ]
  },
  checkboxChange: function(e) {
    let v1 = e.detail.value[0];
    let v2 = e.detail.value[1];
    let v3 = e.detail.value[2];
    if (e.target.id == 1) {
      if (v1 == 1 && v2 == undefined) {
        this.setData({
          s1: 1
        })
      }
      if (v1 == 1 && v2 == 0) {
        this.setData({
          s1: 0
        })
      }
    }
    if (e.target.id == 2) {
      if (v1 == 1 && v2 == undefined) {
        this.setData({
          s2: 1
        })
      }
      if (v1 == 1 && v2 == 0) {
        this.setData({
          s2: 0
        })
      }
    }
    if (e.target.id == 3) {
      if (v1 == 1 && v2 == undefined) {
        this.setData({
          s3: 1
        })
      }
      if (v1 == 1 && v2 == 0) {
        this.setData({
          s3: 0
        })
      }
    }
    if (e.target.id == 4) {
      if (v1 == 1 && v2 == 1 && v3 == undefined) {
        this.setData({
          s4: 1
        })
      }
      if (v1 == 1 && v2 == 1 && v3 == 0) {
        this.setData({
          s4: 0
        })
      }
    }
    if (e.target.id == 5) {
      if (v1 == 1 && v2 == 1 && v3 == undefined) {
        this.setData({
          s5: 1
        })
      }
      if (v1 == 1 && v2 == 1 && v3 == 0) {
        this.setData({
          s5: 0
        })
      }

    }
    console.log(this.data.s1, this.data.s2, this.data.s3, this.data.s4, this.data.s5)
  },
  back: function() {
    music1.play();
    wx.redirectTo({
      url: '../test33/three3',
    })
  },
  check: function() {
    music2.play();
    if (this.data.s1 == 1 && this.data.s2 == 1 && this.data.s3 == 1 && this.data.s4 == 1 && this.data.s5 == 1) {
      this.setData({
        statu: "成功"
      })
    } else {
      this.setData({
        statu: "失败"
      })
    }
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../../message/message',
    })
    getApp().globalData.message1 = "完成"
  },
})