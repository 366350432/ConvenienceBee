// pages/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'address',
      success: (res)=>{
        //console.log(res.data);
        this.setData({
          address:res.data
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
  goaddressAdd:function(){
    wx.navigateTo({
      url: '/pages/addressAdd/addressAdd',
    })
  },
  goaddressUpdate:function(res){
    console.log(res);
    var person = res.currentTarget.dataset.person;
    var area = res.currentTarget.dataset.area;
    var detail = res.currentTarget.dataset.detail;
    var tel = res.currentTarget.dataset.tel;
    var mergelist = wx.getStorageSync("address");
    //console.log(mergelist);
    //遍历cart里的数据
    for (var i = 0; i < mergelist.length; i++) {
      var items = mergelist[i];
      console.log(items);
      mergelist.splice(i,1);
    }
    //异步再创建一个cartStorage  实现数据更新
    wx.setStorageSync('address', mergelist)
     this.setData({
       mergelist: mergelist
     })
   // wx.removeStorageSync('address')
    wx.navigateTo({
      url: `/pages/addressUpdate/addressUpdate?person=${person}&tel=${tel}&area=${area}&detail=${detail}`,
    })
  }
})