// pages/order/order.js
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
      name: '待收货订单',
      typeId: '2'
    }, {
      name: '预约订单',
      typeId: '3'
    }],
    // 全部订单
    orderList:[{
      tags:'外卖',
      add:'首开紫郡紫香堤 14栋2单元401',
      state:'已完成',
      orderPro:[{
        imgSrc:'/images/pro1.jpg',
        title:'法国拉菲红酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      },{
        imgSrc:'/images/pro1.jpg',
        title:'长城干白葡萄酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      },{
        imgSrc:'/images/pro1.jpg',
        title:'張裕紅酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      }]
    },
    {
      tags:'外卖',
      add:'首开紫郡紫香堤 14栋2单元401',
      state:'已完成',
      orderPro:[{
        imgSrc:'/images/pro1.jpg',
        title:'法国拉菲红酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      },{
        imgSrc:'/images/pro1.jpg',
        title:'长城干白葡萄酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      },{
        imgSrc:'/images/pro1.jpg',
        title:'張裕紅酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      }]
    }],
    // 待收货订单
    orderList2:[{
      tags:'外卖',
      add:'首开紫郡紫香堤 14栋2单元401',
      state:'送货中',
      orderPro:[{
        imgSrc:'/images/pro1.jpg',
        title:'法国拉菲红酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      },{
        imgSrc:'/images/pro1.jpg',
        title:'长城干白葡萄酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      },{
        imgSrc:'/images/pro1.jpg',
        title:'張裕紅酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      }]
    },
    {
      tags:'外卖',
      add:'首开紫郡紫香堤 14栋2单元401',
      state:'送货中',
      orderPro:[{
        imgSrc:'/images/pro1.jpg',
        title:'法国拉菲红酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      },{
        imgSrc:'/images/pro1.jpg',
        title:'长城干白葡萄酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      },{
        imgSrc:'/images/pro1.jpg',
        title:'張裕紅酒750ml',
        text:'类型:干型 参考酒精度:12.5%vol',
        num:'1'
      }]
    }]
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