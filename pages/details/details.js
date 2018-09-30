// pages/details/index.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      "http://blackwang.applinzi.com/img/home_middle/qiaokeli.jpg",
      "http://blackwang.applinzi.com/img/home_middle/futejia.jpg",
      "http://blackwang.applinzi.com/img/new/qiaokeli.jpg"
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    tabIs: true,
    specIs: false,
    choose:"请选择盒子规格",
    price:"199.99",
    yunfei:"免运费",
    sale:"3424",
    num:1,
    count:1,
    isTrue:false,
    detail:"产品详情",
    shouhou:"售后保障",
    title:"魔吻巧克力",
    spec:"爱TA,就给TA一个吻",
    img:"http://blackwang.applinzi.com/img/home_middle/qiaokeli.jpg"
  },
  tabFun(e) {
    //console.log(e)
    if (e.currentTarget.dataset.state == 1) {
      this.setData({
        tabIs: true
      })
    } else {
      this.setData({
        tabIs: false
      })
    }
  },
  goShopCar: function () {
    wx.reLaunch({
      url: "/pages/cart/cart"
    });
  },
  specFun() {
    this.setData({
      specIs: !this.data.specIs
    })
  },
  addCart: function (res) {
    //console.log(res);
    this.setData({
      specIs: !this.data.specIs
    })
    // console.log(e);
    var cart = wx.getStorageSync("cart");
    if (!cart) {
      var cart = [];
    }
    cart.push(res.currentTarget.dataset)
    wx.showToast({
      title: '添加购物车成功',
    })
    wx.setStorage({
      key: 'cart',
      data: cart,
      success: (res) => {
        this.setData({
          isTrue: true,
          count:cart.length
        })
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { 
   var count = wx.getStorageSync('cart');  
   if(count.length>=1) 
    this.setData({
      title:options.title,
      img:options.img_url,
      price:options.new_price,
      spec:options.spec,
      num:1,
      isTrue:true,
      count:count.length
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