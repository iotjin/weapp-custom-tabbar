// 动态tabbar 组件
const app = getApp();
Component({

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7d7e80",
    selectedColor: "#1989fa",
    tabbars: [],
    tabbars0: [{
        isShowRedDot: true,
        info: '',
        text: '模块一',
        pagePath: "/pages/one/one",
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      },
      {
        isShowRedDot: false,
        info: '5',
        text: '模块二',
        pagePath: "/pages/two/two",
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      },
      {
        isShowRedDot: false,
        info: '',
        text: '模块三',
        pagePath: "/pages/three/three",
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      }
    ],
    tabbars2: [{
        isShowRedDot: false,
        info: '',
        text: '模块一',
        pagePath: "/pages/one/one",
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      },
      {
        isShowRedDot: false,
        info: '',
        text: '模块二',
        pagePath: "/pages/two/two",
        iconPath: 'https://img.yzcdn.cn/vant/user-inactive.png',
        selectedIconPath: 'https://img.yzcdn.cn/vant/user-active.png',
      }
    ],
  },
  lifetimes: {
    detached: function () {},
    attached: function () {
      this.checkUserType()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChangeTabbar(event) {
      var index = event.detail
      var path = this.data.tabbars[index].pagePath
      wx.switchTab({
        url: path
      })
      this.setData({
        selected: index
      })
    },
    //在tabPage的onShow方法中调用
    switchSelectedTab(currentIndex) {
      if (typeof this.getTabBar === 'function' &&
        this.getTabBar()) {
        // console.log('选中项' + currentIndex)
        this.getTabBar().setData({
          selected: currentIndex
        })
        // this.getTabBar().setData({
        //   ['tabbars[0].text']: 'currentIndex'
        // })
      }
    },
    //检查用户类型
    checkUserType() {
      if (app.userType == 'admin') {
        this.setData({
          tabbars: this.data.tabbars0
        })
      }
      if (app.userType == 'normal') {
        this.setData({
          tabbars: this.data.tabbars2
        })
      }

    }
  },


})