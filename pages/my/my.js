// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    carBtnList:[{
      imgSrc:'/images/myicon1.png',
      textName:'我的订单',
      type:'switchTab',
      url:'/pages/order/order'
    },{
      imgSrc:'/images/myicon2.png',
      textName:'我的钱包',
      type:'navigate',
      url:'/pages/wallet/wallet'
    },{
      imgSrc:'/images/myicon3.png',
      textName:'优惠券',
      type:'navigate',
      url:'/pages/WelfareCenter/WelfareCenter'
    },{
      imgSrc:'/images/myicon4.png',
      textName:'账户余额',
      type:'navigate',
      url:'/pages/balance/balance'
    }
    ,{
      imgSrc:'/images/myicon5.png',
      textName:'发票管理'
    }
    ,{
      imgSrc:'/images/myicon6.png',
      textName:'帮助反馈',
      type:'navigate',
      url:'/pages/feedback/feedback'
    },{
      imgSrc:'/images/myicon7.png',
      textName:'招商加盟',
      type:'navigate',
      url:'/pages/Joinin/Joinin'
    },{
      imgSrc:'/images/myicon8.png',
      textName:'联系客服'
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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