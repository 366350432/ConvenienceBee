Page({
  data: {
    category: [],
    /*details: [],*/
    details: [],
    curIndex: 0,
    isScroll: false,
    toView: 'new'
  },
   
  onLoad(options){
    wx.request({
      url: 'http://blackwang.applinzi.com/getCategory',
      success:(res)=>{
        console.log(res)
        this.setData({
          category: res.data
        })
      }
    })
    wx.request({
      url: 'http://blackwang.applinzi.com/shopDeatil.txt',
      success:(res)=>{
        console.log(res)
        this.setData({
          details:res.data
        })
      }
    })
  },
  switchTab(e) {
    console.log(e);
    const self = this;
    this.setData({
      isScroll: true
    })
    setTimeout(function () {
      self.setData({
        toView: e.target.dataset.id,
        curIndex: e.target.dataset.index
      })
    }, 0)
    setTimeout(function () {
      self.setData({
        isScroll: false
      })
    }, 1)

  },
  addCart: function (res) {
    console.log(res);
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
    })
  },
  goDetails: function () {
    wx.navigateTo({
      url: '/pages/details/details',
    })
  }

})