// pages/addressAdd/addressAdd.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    casArray: ['北京市','黑龙江省','吉林省','辽宁省','山东省','河北省','湖南省','湖北省','河南省','安徽省','甘肃省'],
    casIndex: 0,
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
  bindCasPickerChange: function (e) {
    if (e.detail.value == 4) {
      this.setData({ reply: true })
    } else {
      this.setData({ reply: false })
    }
    this.setData({
      casIndex: e.detail.value
    })
  },
  addressSubmit:function(e){
    console.log(e);
    //console.log(e.detail.value.man);
    var person = e.detail.value.person;
    var tel = e.detail.value.tel;
    var area = e.detail.value.area;
    var detail = e.detail.value.detail;
    var address = wx.getStorageSync('address');//获取address缓存
    var regtel = /^1+[35678]+\d{9}$/i;
    //姓名为空
    if(person == ""){
      wx.showToast({
        title: '姓名不能为空',
      })
      return
    } 
    //电话为空并验证电话格式
    if(tel == ""){
      wx.showToast({
        title: '请输入联系方式',
      })
      return
    } else if (!regtel) {
      wx.showToast({
        title: '号码格式不正确',
      })
      return
    } 
    //地区为空
    if(area == ""){
      wx.showToast({
        title: '请输入地区',
      })
      return
    } 
    //详细地址为空
    if(detail == ""){
      wx.showToast({
        title: '请输入详细地址',
      })
      return
    }
    //上述验证都通过，跳转到收货地址页面
    wx.redirectTo({
      url: '/pages/address/address',
    })
    //如果没有获取到，定义address为空
    if(!address){
      var address= [];
    }
    //向address中追加数据
    address.push(e.detail.value);
    wx.setStorage({
      key: 'address',
      data: address,
    })
    //传参
    this.setData({
      person:person,
      tel:tel,
      area:area,
      detail:detail
    })
  },
})