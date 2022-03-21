// pages/pro/pro.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    minusStatus: true,
    courseCount: 1,   
    viewId : 0,
    imgUrls: [
      '/images/pro.jpg',
      '/images/pro.jpg',
      '/images/pro.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    proinfo:[{
      p_infoTit:'类型',
      p_infoSpan:'干型'
    },{
      p_infoTit:'规格',
      p_infoSpan:'750ml'
    },{
      p_infoTit:'配料',
      p_infoSpan:'赤霞珠葡萄'
    },{
      p_infoTit:'酒精含量',
      p_infoSpan:'13%'
    },{
      p_infoTit:'原产地',
      p_infoSpan:'阿根廷'
    }]
  },
  select:function(e){
    this.setData({
     viewId: e.currentTarget.dataset.index
    })
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
  return:function(){
    wx.navigateBack({
      delta: 1 //返回上一级页面
     })
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