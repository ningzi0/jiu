// pages/integral/integral.js
Page({

  /**
   * 页面的初始数据
   */
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
      'https://images.liquorbox.cn/2022-06-10/images/jf2.jpg',
      'https://images.liquorbox.cn/2022-06-10/images/jf3.jpg',
      'https://images.liquorbox.cn/2022-06-10/images/jf4.jpg'
    ],
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