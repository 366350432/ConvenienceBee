// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    reg:true,
    count:60,
    getYanzheng:"获取验证码",
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

  },
  formSubmit:function(){

  },
  regPhone:function(e){
    var t = e.detail.value.tel;
    var y = e.detail.value.yanzheng;
    var regP = /^1+[35678]+\d{9}$/i;
    var regY = /^[0-9]{4}$/i;
    if(t == ""){
      wx.showToast({
        title: '手机号不能为空',
        icon: 'success',
        duration: 1000
      });
      setTimeout(() => {
        wx.hideToast();
      }, 2000);
      return;
    }
    else if(!regP.test(t)){
      wx.showToast({
        title: '手机号格式错误',
        icon: 'success',
        duration: 1000
      });
      setTimeout(() => {
        wx.hideToast();
      }, 2000);
      return;
    }
    if(y == ""){
      wx.showToast({
        title: '验证码不能为空',
        icon: 'success',
        duration: 1000
      });
      setTimeout(() => {
        wx.hideToast();
      }, 2000);
      return;
    }else if(!regY.test(y)){
      wx.showToast({
        title: '验证码格式错误',
        icon: 'success',
        duration: 1000
      });
      setTimeout(() => {
        wx.hideToast();
      }, 2000);
    }
    if(t=='18612871995' && y=='0000'){
      wx.showToast({
        title: '登录成功',
        duration: 2000
      })
      var logins = [{"t":"18612871995","y":"0000"}];
      wx.setStorage({
        key: 'login',
        data: logins,
        
      })
     
      var login = true;
      wx.reLaunch({ 
        url: '/pages/my/my?login='+login,
      })
    }else{
      wx.showToast({
        title: '账号或验证码错误',
      })
    }
  },
  getCode:function(){
    var that = this;
    var count = 60;
    var si = setInterval(function(){
      if(count>0){
        count--;
        that.setData({
          reg:false,
          count:count
        })
      }else{
        that.setData({
          reg:true,
        })
        count = 60;
        clearInterval(si);
      }
    },1000)
   
  },
})