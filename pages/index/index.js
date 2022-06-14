// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    currentId: '1',
    section: [{
      name: '全部',
      typeId: '1'
    }, {
      name: '啤酒系列',
      typeId: '2'
    }, {
      name: '洋酒系列',
      typeId: '3'
    }, {
      name: '红酒系列',
      typeId: '4'
    }],
    imgUrls: [
      'https://images.liquorbox.cn/2022-06-10/images/banner.gif',
      'https://images.liquorbox.cn/2022-06-10/images/banner.gif',
      'https://images.liquorbox.cn/2022-06-10/images/banner.gif'
    ],
    advImgUrls:[
      'https://images.liquorbox.cn/2022-06-10/images/adv1.png',
      'https://images.liquorbox.cn/2022-06-10/images/adv2.jpg',
      'https://images.liquorbox.cn/2022-06-10/images/adv3.png'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
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
  onLoad() {
    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true
      })
    }
  },
  getUserProfile(e) {
    // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
    wx.getUserProfile({
      desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        console.log(res)
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })
  },
  getUserInfo(e) {
    // 不推荐使用getUserInfo获取用户信息，预计自2021年4月13日起，getUserInfo将不再弹出弹窗，并直接返回匿名的用户个人信息
    console.log(e)
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
