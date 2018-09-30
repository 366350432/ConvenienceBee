// // pages/cart/cart.js
// // page/component/new-pages/cart/cart.js
// Page({
//   data: {
//     casArray: ['今天30分钟送达(已预定)','今天21:00-22:00', '今天22:00-23:00', '明天09:00-10:00', '明天10:00-11:00', '明天11:00-12:00', '明天12:00-13:00', '明天13:00-14:00', '明天14:00-15:00', '明天15:00-16:00', '明天16:00-17:00', '明天17:00-18:00', '明天18:00-19:00', '明天19:00-20:00', '明天20:00-21:00'],
//     casIndex:0,
//     add:false,
//     carts: [],               // 购物车列表
//     hasList: false,          // 列表是否有数据
//     totalPrice: 0,           // 总价，初始为0
//     selectAllStatus: true,    // 全选状态，默认全选
//     obj: {
//       name: "hello"
//     }
//   },
//   onShow() {
//     this.setData({
//       hasList: true,
//       carts: [
//         { id: 1, title: '新鲜芹菜 半斤新鲜芹菜 半斤新鲜芹菜 半斤新鲜芹菜 半斤', image: '/assets/icons/fukuan.png', num: 4, price: 0.01, selected: true },
//         { id: 2, title: '素米 500g', image: '/image/s6.png', num: 1, price: 0.03, selected: true },
//         { id: 3, title: '新鲜芹菜 半斤新鲜芹菜 半斤新鲜芹菜 半斤新鲜芹菜 半斤', image: '/assets/icons/fukuan.png', num: 4, price: 0.01, selected: true },
//       ]
//     });
//     this.getTotalPrice();
//   },
//   /**
//    * 当前商品选中事件
//    */
//   selectList(e) {
//     const index = e.currentTarget.dataset.index;
//     let carts = this.data.carts;
//     const selected = carts[index].selected;
//     carts[index].selected = !selected;
//     this.setData({
//       carts: carts
//     });
//     this.getTotalPrice();
//   },

  

//   /**
//    * 购物车全选事件
//    */
//   selectAll(e) {
//     let selectAllStatus = this.data.selectAllStatus;
//     selectAllStatus = !selectAllStatus;
//     let carts = this.data.carts;

//     for (let i = 0; i < carts.length; i++) {
//       carts[i].selected = selectAllStatus;
//     }
//     this.setData({
//       selectAllStatus: selectAllStatus,
//       carts: carts
//     });
//     this.getTotalPrice();
//   },

//   /**
//    * 绑定加数量事件
//    */
//   addCount(e) {
//     const index = e.currentTarget.dataset.index;
//     let carts = this.data.carts;
//     let num = carts[index].num;
//     num = num + 1;
//     carts[index].num = num;
//     this.setData({
//       carts: carts
//     });
//     this.getTotalPrice();
//   },

//   /**
//    * 绑定减数量事件
//    */
//   minusCount(e) {
//     const index = e.currentTarget.dataset.index;
//     const obj = e.currentTarget.dataset.obj;
//     let carts = this.data.carts;
//     let num = carts[index].num;
//     if (num <= 1) {
//       return false; 
//     }
//     num = num - 1;
//     carts[index].num = num;
//     this.setData({
//       carts: carts
//     });
//     this.getTotalPrice();
//   },
//   /**
//      * 删除购物车当前商品
//      */
   
      
   
//   deleteList(e) {
//     wx.showModal({
//       title: '弹出信息',
//       content: '是否要删除此商品？',
//       success: (res) => {
//         const index = e.currentTarget.dataset.index;
//         let carts = this.data.carts;
//         if(res.confirm){
//           carts.splice(index, 1);
//           this.setData({
//             carts: carts
//           });
//         }
//         if (!carts.length) {
//           this.setData({
//             hasList: false
//           });
//         } else {
//           this.getTotalPrice();
//         }
//       },
//       fail:(res)=>{
//         const index = e.currentTarget.dataset.index;
//         let carts = this.data.carts;
//         this.setData({
//           carts: carts
//         });
//       }
//     })
   
//   },
//   /**
//    * 计算总价
//    */
//   getTotalPrice() {
//     let carts = this.data.carts;                  // 获取购物车列表
//     let total = 0;
//     for (let i = 0; i < carts.length; i++) {         // 循环列表得到每个数据
//       if (carts[i].selected) {                     // 判断选中才会计算价格
//         total += carts[i].num * carts[i].price;   // 所有价格加起来
//       }
//     }
//     this.setData({                                // 最后赋值到data中渲染到页面
//       carts: carts,
//       totalPrice: total.toFixed(2)
//     });
//   },
//   goHome: function () {
//     wx.reLaunch({
//       url: '../home/home',
//     })
//   },
//   goReg: function () {
//     wx.navigateTo({
//       url: '../login/login',
//     })
//   },
//   bindCasPickerChange: function (e) {
//     console.log('乔丹选的是', this.data.casArray[e.detail.value])
//     if (e.detail.value == 4) {
//       this.setData({ reply: true })
//     } else {
//       this.setData({ reply: false })
//     }
//     this.setData({
//       casIndex: e.detail.value
//     })

//   },
// })
  
Page({

  /**
   * 页面的初始数据
   */
  data: {
    add:false,
    reply:false,
    total: false, //是否全选
    totalPrice: 0, //总价
    casArray: ['今天30分钟送达(已预定)', '今天21:00-22:00', '今天22:00-23:00', '明天09:00-10:00', '明天10:00-11:00', '明天11:00-12:00', '明天12:00-13:00', '明天13:00-14:00', '明天14:00-15:00', '明天15:00-16:00', '明天16:00-17:00', '明天17:00-18:00', '明天18:00-19:00', '明天19:00-20:00', '明天20:00-21:00'],
    casIndex:0,
    list: [
      /*{ //商品列表
      id: 2,
      img: 'https://wx.yogalt.com/file/images/img1.jpeg',
      name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
      spec: "2磅，+19.9元得水果（中盒）…",
      price: 999.00,
      num: 2,
      select: false,
    },
    {
      id: 3,
      img: 'https://wx.yogalt.com/file/images/img1.jpeg',
      name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
      spec: "2磅，+19.9元得水果（中盒）…",
      price: 999.01,
      num: 1,
      select: false
    },
    {
      id: 4,
      img: 'https://wx.yogalt.com/file/images/img1.jpeg',
      name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
      spec: "2磅，+19.9元得水果（中盒）…",
      price: 999.02,
      num: 1,
      select: false
    },
    {
      id: 5,
      img: 'https://wx.yogalt.com/file/images/img1.jpeg',
      name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
      spec: "2磅，+19.9元得水果（中盒）…",
      price: 999.03,
      num: 1,
      select: false
    },
    {
      id: 6,
      img: 'https://wx.yogalt.com/file/images/img1.jpeg',
      name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
      spec: "2磅，+19.9元得水果（中盒）…",
      price: 999.04,
      num: 1,
      select: false
    },
      {
        id: 7,
        img: 'https://wx.yogalt.com/file/images/img1.jpeg',
        name: "榴恋草莓蛋糕-2磅188元/138元/4磅298元（深圳）",
        spec: "2磅，+19.9元得水果（中盒）…",
        price: 999.05,
        num: 1,
        select: false
      }*/
    ]
  },
  totalPrice() {//计算总价

    let that = this
    console.log(that.data.list)
    let price = 0

    for (let i = 0; i < that.data.list.length; i++) {
      if (that.data.list[i].select) {
        price = price + that.data.list[i].new_price * that.data.list[i].num
      }
    }
    this.setData({
      totalPrice: price.toFixed(2)
    })
  },
  totalFun() { //全选
    this.data.total = !this.data.total
    // for (let i = 0; i < this.data.list.length; i++) {
    //   if (this.data.total) {
    //     this.data.list[i].select = true
    //   }else{
    //     this.data.list[i].select = false
    //   }
    // }
    this.data.list.map((v, k) => {
      if (this.data.total) {
        v.select = true
      } else {
        v.select = false
      }
    })
    this.setData({
      list: this.data.list,
      total: this.data.total
    })
    this.totalPrice()
  },
  labelFun(e) {//单选
    let that = this
    let num = 0
    for (let i = 0; i < that.data.list.length; i++) {
      if (that.data.list[i].id == e.currentTarget.dataset.id) {
        that.data.list[i].select = !that.data.list[i].select
        that.setData({
          list: that.data.list
        })
      }
      if (that.data.list[i].select) {
        num++
        if (num == that.data.list.length) {
          that.setData({
            total: true
          })
        } else {
          that.setData({
            total: false
          })
        }
      }
    }
    this.totalPrice()
  },
  editFun() { //编辑
    this.setData({
      isEdit: !this.data.isEdit
    })
  },
  plusFun(item) { //增加商品数量
    this.data.list.map((v, k) => {
      if (v.id == item.target.dataset.item.id) {
        this.data.list[k].num++
      }
    })
    this.setData({
      list: this.data.list
    })
    this.totalPrice()
  },
  reduceFun(item) { //减少商品数量
    this.data.list.map((v, k) => {
      if (v.id == item.target.dataset.item.id) {
        if (this.data.list[k].num > 1) {
          this.data.list[k].num--
        }
      }
    })
    this.setData({
      list: this.data.list
    })
    this.totalPrice()
  },
  delItemFun(item) { //删除单商品
    wx.showModal({
      title: '删除商品',
      content: '是否要删除此商品',
      duration:1000,
      success:(res)=>{
        if(res.confirm){
          let id = item.target ? item.target.dataset.item.id : item.id
          this.data.list.map((v, k) => {
            if (v.id == id) {
              this.data.list.splice(k, 1);
            //   wx.removeStorage({
            //     key: 'cart[0]',
            //     success: function(res) {
            //       console.log(res);
            //     },
            //   })
            //  this.onShow();
            }
          })   
          //实现商品逐个删除
         var mergelist = wx.getStorageSync("cart");
         //console.log(mergelist);
         //遍历cart里的数据
         for(var i=0;i<mergelist.length;i++){
           var items = mergelist[i];
           //console.log(items);
           if (items.id == item.target.dataset.item.id){
             mergelist.splice(i,1);
             break
           }
         }
         //异步再创建一个cartStorage  实现数据更新
         wx.setStorageSync('cart', mergelist)
          this.setData({
            list: this.data.list,
            mergelist: mergelist
          })
          this.totalPrice()
          if (this.data.list == "") {
            wx.removeStorage({
              key: 'cart',
              success: function(res) {},
            })
            this.setData({
              add: false
            })
          }
        }       
      }    
    })  
  },
  delFun() { //选中删除
    wx.showModal({
      title: '删除商品',
      content: '确定删除所选商品',
      success:(res)=>{
        if(res.confirm){
          let list = []
          this.data.list.map((v, k) => {
            list.push(v)
          })
          list.map((v, k) => {
            if (v.select) {
              list.splice(k, list.length)
            }
            wx.removeStorage({
              key: 'cart',
              success: function(res) {},
            })
          })
          //console.log(list)
          this.setData({
            list: list
          })
          this.totalPrice()
          if (this.data.list == "") {
            this.setData({
              add: false
            })
          }
        }
      }
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
    wx.getStorage({
      key: 'cart',
      success: (res) => {    
         this.setData({
           add: true,
           list: res.data
         })
      },
    })
    
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
  goHome: function () {
   wx.reLaunch({
     url: '../home/home',
    })
  },
   goReg: function () {
     wx.navigateTo({
      url: '../login/login',
    })
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
})