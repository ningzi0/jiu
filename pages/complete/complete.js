// pages/complete/complete.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 物流弹窗
    optionList:['所有','选项1','选项2'],
 value:'所有',
  
 hideFlag: true,//true-隐藏 false-显示
 animationData: {},//




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
  // 点击选项
 getOption:function(e){
  var that = this;
  that.setData({
   value:e.currentTarget.dataset.value,
   hideFlag: true
  })
  },
  //取消
  mCancel: function () {
  var that = this;
  that.hideModal();
  },
   
  // ----------------------------------------------------------------------modal
  // 显示遮罩层
  showModal: function () {
  var that = this;
  that.setData({
   hideFlag: false
  })
  // 创建动画实例
  var animation = wx.createAnimation({
   duration: 400,//动画的持续时间
   timingFunction: 'ease',//动画的效果 默认值是linear->匀速，ease->动画以低速开始，然后加快，在结束前变慢
  })
  this.animation = animation; //将animation变量赋值给当前动画
  var time1 = setTimeout(function () {
   that.slideIn();//调用动画--滑入
   clearTimeout(time1);
   time1 = null;
  }, 100)
  },
   
  // 隐藏遮罩层
  hideModal: function () {
  var that = this;
  var animation = wx.createAnimation({
   duration: 400,//动画的持续时间 默认400ms
   timingFunction: 'ease',//动画的效果 默认值是linear
  })
  this.animation = animation
  that.slideDown();//调用动画--滑出
  var time1 = setTimeout(function () {
   that.setData({
   hideFlag: true
   })
   clearTimeout(time1);
   time1 = null;
  }, 220)//先执行下滑动画，再隐藏模块
   
  },
  //动画 -- 滑入
  slideIn: function () {
  this.animation.translateY(0).step() // 在y轴偏移，然后用step()完成一个动画
  this.setData({
   //动画实例的export方法导出动画数据传递给组件的animation属性
   animationData: this.animation.export()
  })
  },
  //动画 -- 滑出
  slideDown: function () {
  this.animation.translateY(300).step()
  this.setData({
   animationData: this.animation.export(),
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