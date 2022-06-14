// pages/complete/complete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //倒计时
    nowDate: '2022-06-01 18:00:00', //结束时间
    	countdown: '', //倒计时
    	days: '00', //天
    	hours: '00', //时
    	minutes: '00', //分
    	seconds: '00', //秒

    orderInfo:[{
      img:'/images/re_proimg.png',
      infoH3:'法国拉菲红酒',
      infoSpan:'单瓶750ml装',
      infoPrice:'129',
      infoNum:'1'
    },{
      img:'/images/re_proimg.png',
      infoH3:'法国拉菲红酒',
      infoSpan:'单瓶750ml装',
      infoPrice:'129',
      infoNum:'1'
    },{
      img:'/images/re_proimg.png',
      infoH3:'法国拉菲红酒',
      infoSpan:'单瓶750ml装',
      infoPrice:'129',
      infoNum:'1'
    }]
  },
  countTime() {
    let days,hours, minutes, seconds;
    let nowDate = this.data.nowDate;
    console.log(nowDate)
    let that = this;
    let now = new Date().getTime();
    let end = new Date(nowDate).getTime(); //设置截止时间
    // console.log("开始时间：" + now, "截止时间:" + end);
    let leftTime = end - now; //时间差                         
    if (leftTime >= 0) {
      days = Math.floor(leftTime / 1000 / 60 / 60 / 24);
      hours = Math.floor(leftTime / 1000 / 60 / 60 % 24);
      minutes = Math.floor(leftTime / 1000 / 60 % 60);
      seconds = Math.floor(leftTime / 1000 % 60);
      seconds = seconds < 10 ? "0" + seconds : seconds
      minutes = minutes < 10 ? "0" + minutes : minutes
      hours = hours < 10 ? "0" + hours : hours
      that.setData({
        countdown: days+":"+hours + "：" + minutes + "：" + seconds,
        days,
        hours,
        minutes,
        seconds
      })
      // console.log(that.data.countdown)
      //递归每秒调用countTime方法，显示动态时间效果
      setTimeout(that.countTime, 1000);
    } else {
      that.setData({
        countdown: '已截止'
      })
    }
 },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.countTime();
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