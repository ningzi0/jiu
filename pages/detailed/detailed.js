// pages/detailed/detailed.js
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
      name: '充值记录',
      typeId: '2'
    }, {
      name: '消费记录',
      typeId: '3'
    }],
    multiArray: [['2021年', '2022年'], ['1月', '2月', '3月', '4月', '5月']],
    multiIndex: [0, 0, 0],
    all:[{
      tit:'充值记录',
      num:'+200.00',
      date:'3月7日 10:31',
      surplus:'零钱余额200'
    },{
      tit:'消费记录',
      num:'-50.00',
      date:'3月7日 10:31',
      surplus:'零钱余额150'
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
    bindMultiPickerChange: function (e) {
      console.log('picker发送选择改变，携带值为', e.detail.value)
      this.setData({
        multiIndex: e.detail.value
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