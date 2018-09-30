// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    login:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options);
    this.setData({
      login:options.login
    })
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.getStorage({
      key: 'login',
      success:(res)=>{
        //console.log(res.data.t);
        if (res.data[0].t == '18612871995' && res.data[0].y == '0000') {
          this.setData({
            login: true
          })
        }
      },
    })
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

  },
  goReg:function(){
    wx.navigateTo({
      url: '../login/login',
    })
  },
  goKefu:function(){
    wx.navigateTo({
      url: '../kefu/kefu',
    })
  },
  quitlogin:function(){
    wx.removeStorage({
      key: 'login',
      success: (res)=>{
        this.setData({
          login:false
        })
      },
    })
  },
  goallorder:(e)=>{
    console.log(e);
    var tableIndex = e.currentTarget.dataset.tableindex;
     wx.navigateTo({
       url: '/pages/allorder/allorder?tableIndex='+tableIndex,
     })
  },
  goyouhui:function(){
    wx.navigateTo({
      url: '/pages/youhui/youhui',
    })
  },
  goaddress:function(){
    wx.navigateTo({
      url: '/pages/address/address',
    })
  }
})