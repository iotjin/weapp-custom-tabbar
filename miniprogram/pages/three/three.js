// pages/three/three.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bottomHeight: app.kBottomSafeHeight + 50
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('页面三');
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.getTabBar().switchTab(2)
  },
})