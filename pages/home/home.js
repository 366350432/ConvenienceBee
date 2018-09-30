 // pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dizhi:'',
    location:'',
    imageList:[],
    newList:[],
    shopList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://blackwang.applinzi.com/getNew',
      method: "GET",
      dataType: "json",
      success:(res)=>{
        this.setData({
          newList:res.data
        })
      }
    })
    wx.request({
      url: 'http://blackwang.applinzi.com/getReXiao',
      method: "GET",
      dataType: "json",
      success:(res)=>{
        this.setData({
          shopList:res.data
        })
      }
    })
    wx.request({
      url: 'http://blackwang.applinzi.com/getSlider',
      method:"GET",
      dataType:"json",
      success:(res)=>{
        //console.log(res)
        this.setData({
          imageList:res.data
        })
      }
    })
    wx.getLocation({
      type:"wgs84",
      success: (res)=>{
        //console.log(res)
        var that = this;
        var location = res.latitude+","+res.longitude;
        //console.log(location)
        wx.request({
          url: 'https://apis.map.qq.com/ws/geocoder/v1/?key=VJHBZ-LL6WS-G37OK-667CM-ARPCQ-CNBYR&location=' + location,
          success: (res) => {
            //console.log(res.data.result.address)
            that.setData({
              dizhi: res.data.result.address
            })
          }
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

  },
  addCart:function(res){
    console.log(res);
   // console.log(e);
    var cart = wx.getStorageSync("cart");
    console.log(cart);
    if(!cart){
      var cart = [];
    }
    cart.push(res.currentTarget.dataset)
    wx.showToast({
        title: '添加购物车成功',
      })   
    wx.setStorage({
      key: 'cart',
      data: cart,
      success:(res)=>{
        console.log();
      },
    })
  },
  goSearch:function(){
    wx.navigateTo({
      url: '/pages/search/search',
    })
  },
  goaddress:function(){
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  goDetails:function(e){
    console.log(e);
    var id = e.currentTarget.dataset.id;
    var title = e.currentTarget.dataset.title;
    var img_url = e.currentTarget.dataset.img_url;
    var new_price = e.currentTarget.dataset.new_price;
    var old_price = e.currentTarget.dataset.old_price;
    var spec = e.currentTarget.dataset.spec;
    wx.navigateTo({
      url: `/pages/details/details?id=${id}&title=${title}&img_url=${img_url}&new_price=${new_price}&old_price=${old_price}&spec=${spec}`,
    })
  }
})