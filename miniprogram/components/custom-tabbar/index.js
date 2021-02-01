// components/custom-tabbar/index.js
var app = getApp();
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //  tabbar 数组
    list: {
      type: Array,
      value: []
    },
  },
  data: {
    currentTabBar: 0,
    isShowTabbar: true,
    tabbars: [],
    tabbars0: [{
        isShowRedDot: true,
        info: '',
        text: '模块一',
        tab: 'https://img.yzcdn.cn/vant/user-inactive.png',
        tab_sel: 'https://img.yzcdn.cn/vant/user-active.png',
      },
      {
        isShowRedDot: false,
        info: '5',
        text: '模块二',
        tab: 'https://img.yzcdn.cn/vant/user-inactive.png',
        tab_sel: 'https://img.yzcdn.cn/vant/user-active.png',
      },
      {
        isShowRedDot: false,
        info: '5',
        text: '模块三',
        tab: 'https://img.yzcdn.cn/vant/user-inactive.png',
        tab_sel: 'https://img.yzcdn.cn/vant/user-active.png',
      }
    ],
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onChangeTabbar(event) {
      var index = event.detail
      this.setData({
        currentTabBar: index
      });
      this.triggerEvent('onChangeTabbar', this.data.currentTabBar);
    }
  },
  lifetimes: {
    detached: function () {},
    attached: function () {
      this.setData({
        tabbars: this.properties.list
      })
    }
  },

})