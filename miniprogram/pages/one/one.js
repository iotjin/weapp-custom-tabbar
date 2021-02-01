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
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.switchSelectedTab(0)
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
  switchSelectedTab(currentIndex) {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      console.log('选中项' + currentIndex)
      this.getTabBar().setData({
        selected: currentIndex
      })
      this.getTabBar().setData({
        ['tabbars[0].text']: 'currentIndex'
      })
    }
  },
  onChange({
    detail
  }) {
    this.setData({
      checked: detail
    });

    if (detail) {
      app.userType = 'admin'
    } else {
      app.userType = 'normal'
    }
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().checkUserType()
    }

  },

})