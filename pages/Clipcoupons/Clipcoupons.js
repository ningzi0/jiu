// pages/Clipcoupons/Clipcoupons.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    welfare:[{
      h3:'全场酒水',
      welfareLeft:'本周三到期',
      welfareRight:'5.0',
      welfareRightText:'折',
      hidden:true
    },{
      h3:'双杯快乐',
      welfareLeft:'有效期至2022-06-17',
      welfareRight:'5.5',
      welfareRightText:'折',
      hidden:true
    }]
  },
  guize:function(e){
    let index = e.currentTarget.dataset.index;
    console.log(index)
    this.setData({
      [`welfare[${index}].hidden`]:!this.data.welfare[index].hidden
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