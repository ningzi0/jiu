// pages/Commission_details/Commission_details.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    startTime:'2018-05-01',
    endTime:'9999-05-01',
    time:'2022-08'
  },
  selectDataTime: function(e) {
    this.setData({
      time: e.detail.value
    })
    console.log('点击确定选择的时间是:',e.detail.value)
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