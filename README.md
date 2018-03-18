READ.ME

1.  Day 01

    目标：
      整体完成首页静态布局
      vue脚手架搭建
      基本组件抽取完毕 基本一级路由抽取完毕

    完成度：基本完成所有任务

     问题：
      考虑交互后首页头部布局问题
        广告与头部同时固定定位，广告点击消失后内容和头部如何自动上移实现较完美效果

2.   Day 02

    目标：
      完成所有静态页面
      完成所有页面基本交互 - 轮播图，点击消失切换效果，小狗眨眼睛效果

    完成度：基本完成所有任务

    问题：
      使用swiper后，原有的部分style样式消失，比如 下边框效果


3.    Day 03

    目标：
        对前两天的效果进行优化，确保效果完美，样式存在
        首页数据进行动态获取

    发现问题：
        弹性盒子在购物车右上角交互中出现显示问题
          对于高度的动画设置transition有bug
    暂时解决办法 利用opacity模拟做一个效果基本一致
    优化更新方法 改用 浮动布局列表显示后下方四个小盒子

    再次发现问题
        品牌布局有问题导致数据传输时大改页面
        当数据中某一个属性的数组长度与其他不一致，注意 arr[curIndex].attr 的使用

    注意：
            注意点击事件时index的传递
            自定义事件，@click = 'xxx',在methods中this.$emit('xxx')分发事件，父级接收事件@xxx='xxx'后再methods中使用
            v-for中层级过多需要在父级v-if一下避免error
            遍历时xxx[i].index = i 注意！
            注意 new swiper对象 和 new BScroll对象要在 this.nextTick( () => {})中，使用点击事件回调或者watch监视

3.5 ###
    day04 little update  解决一些小Bug 遗留问题

4.    Day 04

    目标：  分类，品牌页数据进行动态获取。
            整体布局优化，减少flex布局使用，
            新增品牌下全部界面

    发现bug
      swiper 轮播图 拖拽后 自动轮播失效  --- 解决， 配置autoplay --- disableOnInteraction: false,

      注意：
          使用BScroll - 滑动到对应位置要让监视的DOM元素 使用 scrollTo 滑动到一个位置
                        pos,y  pos.x pos中这两个属性可以监控scroll类事件当前x,y的值 类似于pageX,pageY的实时监控
                        注意Math.abs的使用以及正负号
5.    Day 05

      目标：
          尽可能优化网页，效果 测试
          前台的登录注册验证 - 使用正则对输入进行验证


      效果完成：全部品牌的左右联动，点击滑动，相应效果
                分类页两个橡皮筋效果, 分页器样式

      注意：BScroll 只对一个直接子级有效，并且父级要定高！

      发现布局bug：   购物车的字体

      vue-lazyload 使用 懒加载.  main.js中引入vuelazyload和图片并且Vue.use('VueLazyload',{loading:'path'/图片}})进行配置
                                引入完成并且use后，现在就会有一个指令lazy，来代替img中的src属性 <img v-lazy="">
      发现问题：使用swiper组件的轮播图不要使用v-lazy 会产生各种奇葩bug

      使用bulletActiveClass: 'my-bullet-active' 来改变swiper中分页器的类名和样式

      总结：已经尽可能完成优化，样式，效果，交互

