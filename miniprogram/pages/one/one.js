// pages/one/one.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checked: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面一');
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().switchTab(0)
  },

})