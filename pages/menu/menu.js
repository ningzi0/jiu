// pages/menu/menu.js
//声明全局变量
let proListToTop = [], menuToTop = [], MENU = 0, 
windowHeight, timeoutId;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal1: false,


    minusStatus: true,
    courseCount: 1,   
    viewId : 0,
    currentId: '1',
    showModal: false,
    currentActiveIndex: 0,
    // 接口返回的商品数组
    navList: [
      {
        c_id: "01",
        c_icon:'',
        c_name: '推荐',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          },
          {
            id: 2,
            url: '/images/pro1.jpg',
          },
          {
            id: 3,
            url: '/images/pro1.jpg',
          },
          {
            id: 4,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "02",
        c_icon:'',
        c_name: '活动',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "02",
        c_name: '新店特惠',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "03",
        c_name: '黑啤',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "04",
        c_name: '白啤',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "05",
        c_name: '黄啤',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "06",
        c_name: '果味啤酒',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "07",
        c_name: '红葡萄酒',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "08",
        c_name: '白葡萄酒',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "09",
        c_name: '桃红葡萄酒',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "10",
        c_name: '气泡酒',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      },
      {
        c_id: "11",
        c_name: '威士忌',
        list: [
          {
            id: 1,
            url: '/images/pro1.jpg',
          }
        ]
      }
    ]    ,
    viewId : 0,
    currentId: '1',
    section: [{
      imgUrl:'https://images.liquorbox.cn/2022-06-14%20business/images/all.png',
      name: '全部',
      typeId: '1'
    }, {
      imgUrl:'https://images.liquorbox.cn/2022-06-14%20business/images/pijiu.png',
      name: '啤酒',
      typeId: '2'
    }, {
      imgUrl:'https://images.liquorbox.cn/2022-06-14%20business/images/putaojiu.png',
      name: '葡萄酒 ',
      typeId: '3'
    }, {
      imgUrl:'https://images.liquorbox.cn/2022-06-14%20business/images/whiskey.png',
      name: '洋酒',
      typeId: '4'
    }],
  },

/**
   * 弹窗
   */
  showDialogBtn1: function () {
    this.setData({
      showModal1: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal1: function () {
    this.setData({
      showModal1: false
    });
  },
  onConfirm1: function () {
    this.hideModal1();
  },



  //数字加1
  addNum: function() {
    var courseCount = this.data.courseCount;
    courseCount++;
    this.setData({
      courseCount: courseCount,
      minusStatus: false
    })
  },
  //数字减1
  minusNum: function() {
    var courseCount = this.data.courseCount;
    if (courseCount > 1) {
      courseCount--;
    }
    //数字<=1时，开启 - 按钮的disable状态
    var minusStatus = courseCount <= 1 ? true : false; 
    this.setData({
      courseCount: courseCount,
      minusStatus: minusStatus
    });
  },
  /**
   * 弹窗
   */
  showDialogBtn: function () {
    this.setData({
      showModal: true
    })
  },
  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function () {
  },
  /**
   * 隐藏模态对话框
   */
  hideModal: function () {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  // onCancel: function () {
  //   this.hideModal();
  // },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function () {
    this.hideModal();
  },
  select:function(e){
    this.setData({
     viewId: e.currentTarget.dataset.index
    })
   },
    //点击每个导航的点击事件
    handleTap: function(e) {
      let id = e.currentTarget.id;
      if(id){
        this.setData({
          currentId:id
        })
      }
    },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 确保页面数据已经刷新完毕~
    setTimeout(() => {
      this.getAllRects()
    }, 20)
  },
  changeMenu(e) {
    console.log(proListToTop);
    // 改变左侧tab栏操作
    if (Number(e.target.id) === this.data.currentActiveIndex) return
    MENU = 1
    this.setData({
      currentActiveIndex: Number(e.target.id),
      rightProTop: proListToTop[Number(e.target.id)] - 100
    })
    this.setMenuAnimation(Number(e.target.id))
  },
  scroll(e) {
    console.log(e);
    for (let i = 0; i < proListToTop.length; i++) {
      if (e.detail.scrollTop < proListToTop[i] && i !== 0 && e.detail.scrollTop > proListToTop[i - 1]) {
        return this.setDis(i)
      }
    }
    // 找不到匹配项，默认显示第一个数据
    if (!MENU) {
      this.setData({
        currentActiveIndex: 0
      })
    }
    MENU = 0
  },
  setDis(i) {
    // 设置左侧menu栏的选中状态
    if (i !== this.data.currentActiveIndex + 1 && !MENU) {
      this.setData({
        currentActiveIndex: i - 1
      })
    }
    MENU = 0
    this.setMenuAnimation(i)
  },
  setMenuAnimation(i) {
    // 设置动画，使menu滚动到指定位置。
    let self = this
    console.log(33)
    if (menuToTop[i].animate) {
      console.log(11111)
      // 节流操作
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
      timeoutId = setTimeout(() => {
        console.log(12138)
        self.setData({
          leftMenuTop: (menuToTop[i].top - windowHeight)
        })
      }, 50)
    } else {
      console.log(11)
      if (this.data.leftMenuTop === 0) return
      console.log(22)
      this.setData({
        leftMenuTop: 0
      })
    }
  },
  getActiveReacts() {
    wx.createSelectorQuery().selectAll('.menu-active').boundingClientRect(function (rects) {
      return rects[0].top
    }).exec()
  },
  getAllRects() {

    // 获取商品数组的位置信息
    wx.createSelectorQuery().selectAll('.pro-item').boundingClientRect(function (rects) {
      rects.forEach(function (rect) {
        console.log(rect)
        // 这里减去44是根据你的滚动区域距离头部的高度，如果没有高度，可以将其删去
        proListToTop.push(rect.top - 44)
      })
    }).exec()

    // 获取menu数组的位置信息
    wx.createSelectorQuery().selectAll('.menu-item').boundingClientRect(function (rects) {
      wx.getSystemInfo({
        success: function (res) {
          console.log(res);
          windowHeight = res.windowHeight / 2
          // console.log(windowHeight)
          rects.forEach(function (rect) {
            menuToTop.push({
              top: rect.top,
              animate: rect.top > windowHeight
            })
          })
        }
      })
    }).exec()
  },
  // 获取系统的高度信息
  getSystemInfo() {
    let self = this
    wx.getSystemInfo({
      success: function (res) {
        windowHeight = res.windowHeight / 2
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})