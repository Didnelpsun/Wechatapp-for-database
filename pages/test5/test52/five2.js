const music1 = wx.createInnerAudioContext();
const music2 = wx.createInnerAudioContext();
music1.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bcad4fb45693.mp3";
music2.src = "https://img.tukuppt.com/newpreview_music/09/00/62/5c893bc72e6b348773.mp3";
Page({
  data: {
    s1: 0,
    s2: 0,
    s3: 0,
    s4: 0,
    s5: 0,
    s6: 0,
    s7: 0,
    s8: 0,
    s9: 0,
    statu: "",
    items1: [
      {
        name: 'A',
        value: 'A. m端实体的码'
      },
      {
        name: 'B',
        value: 'B. n端实体的码',
      },
      {
        name: 'C',
        value: 'C. m端实体的码与n端实体的码的组合'
      },
      {
        name: 'D',
        value: 'D. 重新选取其他属性'
      },
    ],
    items2: [
      {
        name: 'A',
        value: 'A. 0个'
      },
      {
        name: 'B',
        value: 'B. 1个',
      },
      {
        name: 'C',
        value: 'C. 一个或多个'
      },
      {
        name: 'D',
        value: 'D. 多个'
      },
    ],
    items3: [
      {
        name: 'A',
        value: 'A. 需要'
      },
      {
        name: 'B',
        value: 'B. 不需要',
      },
      {
        name: 'C',
        value: 'C. 可有可无'
      },
      {
        name: 'D',
        value: 'D. 合并两个实体'
      },
    ],
    items4: [
      {
        name: 'A',
        value: 'A. 将m方码和联系的属性纳入n方的属性中'
      },
      {
        name: 'B',
        value: 'B. 将n方码和联系的属性纳入m方的属性中',
      },
      {
        name: 'C',
        value: 'C. 在m方属性和n方属性中均增加一个表示级别的属性'
      },
      {
        name: 'D',
        value: 'D. 增加一个关系表示联系，其中纳入m方和n方的码'
      },
    ],
    items5: [
      {
        name: 'A',
        value: 'A. 在“m”端实体转换的关系中加入“1”端的实体转换关系的码'
      },
      {
        name: 'B',
        value: 'B. 将“m”端实体转换关系的码加入到“1”端的关系',
      },
      {
        name: 'C',
        value: 'C. 在两个实体转换的关系中，分别加入另一个关系码'
      },
      {
        name: 'D',
        value: 'D. 将两个实体转换成一个关系'
      },
    ],
    items6: [
      {
        name: 'A',
        value: 'A. 2'
      },
      {
        name: 'B',
        value: 'B. 3',
      },
      {
        name: 'C',
        value: 'C. 4'
      },
      {
        name: 'D',
        value: 'D. 5'
      },
    ],
    items7: [
      {
        name: 'A',
        value: 'A. 一个实体类型转换为一个关系模式'
      },
      {
        name: 'B',
        value: 'B. 一个1:1联系可以转换为一个独立的关系模式，也可以与联系的任意一端实体所对应的关系模式合并',
      },
      {
        name: 'C',
        value: 'C. 一个1:n联系可以转换为一个独立的关系模式，也可以与联系的任意一端实体所对应的关系模式合并'
      },
      {
        name: 'D',
        value: 'D. 一个m:n联系转换为一个关系模式'
      },
    ],
    items8: [
      {
        name: 'A',
        value: 'A. 一个实体类型转换为一个关系模式'
      },
      {
        name: 'B',
        value: 'B. 一个联系类型可以转换为-一个关系模式',
      },
      {
        name: 'C',
        value: 'C. 由实体类型转换成的关系模式的主键是该实体类型的主键'
      },
      {
        name: 'D',
        value: 'D. 由联系类型转换成的关系模式的属性是与该联系类型相关的诸实体类型属性的全体'
      },
    ],
    items9: [
      {
        name: 'A',
        value: 'A. 1个'
      },
      {
        name: 'B',
        value: 'B. 2个',
      },
      {
        name: 'C',
        value: 'C. 3个'
      },
      {
        name: 'D',
        value: 'D. 4个'
      },
    ],
  },
  radioChange: function (e) {
    if (e.currentTarget.id == 1) {
      if (e.detail.value == "C") {
        this.setData({
          s1: 1
        })
      }
      else {
        this.setData({
          s1: 0
        })
      }
    }
    if (e.currentTarget.id == 2) {
      if (e.detail.value == "C") {
        this.setData({
          s2: 1
        })
      }
      else {
        this.setData({
          s2: 0
        })
      }
    }
    if (e.currentTarget.id == 3) {
      if (e.detail.value == "A") {
        this.setData({
          s3: 1
        })
      }
      else {
        this.setData({
          s3: 0
        })
      }
    }
    if (e.currentTarget.id == 4) {
      if (e.detail.value == "D") {
        this.setData({
          s4: 1
        })
      }
      else {
        this.setData({
          s4: 0
        })
      }
    }
    if (e.currentTarget.id == 5) {
      if (e.detail.value == "A") {
        this.setData({
          s5: 1
        })
      }
      else {
        this.setData({
          s5: 0
        })
      }
    }
    if (e.currentTarget.id == 6) {
      if (e.detail.value == "C") {
        this.setData({
          s6: 1
        })
      }
      else {
        this.setData({
          s6: 0
        })
      }
    }
    if (e.currentTarget.id == 7) {
      if (e.detail.value == "C") {
        this.setData({
          s7: 1
        })
      }
      else {
        this.setData({
          s7: 0
        })
      }
    }
    if (e.currentTarget.id == 8) {
      if (e.detail.value == "D") {
        this.setData({
          s8: 1
        })
      }
      else {
        this.setData({
          s8: 0
        })
      }
    }
    if (e.currentTarget.id == 9) {
      if (e.detail.value == "C") {
        this.setData({
          s9: 1
        })
      }
      else {
        this.setData({
          s9: 0
        })
      }
    }
  },
  back: function () {
    music1.play();
    wx.redirectTo({
      url: '../test51/five1',
    })
  },
  check: function () {
    music2.play();
    if (this.data.s1 == 1 && this.data.s2 == 1 && this.data.s3 == 1 && this.data.s4 == 1 && this.data.s5 == 1 && this.data.s6 == 1 && this.data.s7 == 1 && this.data.s8 == 1 && this.data.s9 == 1) {
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
      content: 'C C A D A C C D C',
      showCancel: false,
      confirmColor: "#7e0eb2",
      confirmText: "我知道了"
    })
  },
  next: function () {
    music1.play();
    wx.redirectTo({
      url: '../../message/message',
    })
    getApp().globalData.message5 = "完成"
  }
})