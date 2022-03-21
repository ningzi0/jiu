// pages/setting/setting.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ['男', '女'],
    index: 0,
    avatar:'/images/headimg.jpg',
    date:'完善生日信息'
  },
  bindPickerChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },  
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
// 切换头像
changeAvatar: function () {
  var that = this;
  // var childId = wx.getStorageSync("child_id");
  // var token = wx.getStorageSync('token');
  wx.chooseImage({
  count: 1, // 最多可以选择的图片张数，默认9
  sizeType: ['compressed'], // original 原图，compressed 压缩图，默认二者都有
  sourceType: ['album', 'camera'], // album 从相册选图，camera 使用相机，默认二者都有
  success: function (res) {
  console.log(res.tempFilePaths + "修改页面")
  var avatar = res.tempFilePaths;
  that.setData({
  avatar: avatar,
  upAvatar:true
  })
    
  },
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