// pages/storeinfo/storeinfo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fjintangjiang.oss-cn-beijing.aliyuncs.com%2Fimages%2F67955cbedc1507a70df8f8c8c3e7beb0fd4d89ef.jpg&refer=http%3A%2F%2Fjintangjiang.oss-cn-beijing.aliyuncs.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651897482&t=823a07ad32c93af2b0917f03a2eab8da',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.a963.com%2Fuploadfile%2F2013%2F0928%2F20130928114812378.jpg&refer=http%3A%2F%2Fwww.a963.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651897482&t=4fb707b08b166a6608ae0646e17d117d',
      'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fzuoyougeju.com%2FUser_Files%2Fimage%2Fnews%2F2018%2F06%2Fzygj.net-180608-0226-10.jpg&refer=http%3A%2F%2Fzuoyougeju.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1651897482&t=ef3321e56321814a2bbff689f0f304c0'
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
//预览图片，放大预览
preview(event) {
  let index = event.currentTarget.dataset.index
  wx.previewImage({
    current: this.data.imgUrls[index], // 当前显示图片的http链接
    urls: this.data.imgUrls // 需要预览的图片http链接列表
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