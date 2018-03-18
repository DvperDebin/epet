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

      idea：全部品牌左右点击，滑动的效果联动， 把所有列表的高度收集到一个数组中，利用BScroll的pos.y来收集当前滚动的高度
            利用当前的pos.y的值与高度数组中的值来比较 利用findIndex方法。 return arr.findIndex: pos.y的值大于arr中的某一个高度值，
            同时小于这个高度下一个高度值，那么就可以返回这个高度所对应的index, 利用这个index和所有列表的index对比，就可以添加左右联动

            点击滚动到位置: 获取右侧nav对应的index，利用BScroll的scrollTo 滑动到 保存所有高度值的arr[index]

5.    Day 05

      目标：
          尽可能优化网页，效果 测试
          前台的登录注册验证 - 使用正则对输入进行验证
          简单的后台验证


      效果完成：全部品牌的左右联动，点击滑动，相应效果
                分类页两个橡皮筋效果, 分页器样式

      注意：BScroll 只对一个直接子级有效，并且父级要定高！

      发现布局bug：   购物车的字体

      vue-lazyload 使用 懒加载.  main.js中引入vuelazyload和图片并且Vue.use('VueLazyload',{loading:'path'/图片}})进行配置
                                引入完成并且use后，现在就会有一个指令lazy，来代替img中的src属性 <img v-lazy="">
      发现问题：使用swiper组件的轮播图不要使用v-lazy 会产生各种奇葩bug

      使用bulletActiveClass: 'my-bullet-active' 来改变swiper中分页器的类名和样式

      总结：已经尽可能完成优化，样式，效果，交互


####
    前台登录步骤
    1. 手机登录注册
      收集输入的手机号 -> 简单正则判断 -> 通过则可以获取短信验证码 -> 发送ajax获取短信验证码 -> 收集短信验证码，图片验证码

      -> 点击登录发送ajax请求 进行后台验证 -> 后台验证通过返回内容（这里以返回一个code:0，data:{}为例）data中的内容进行储存

      -> 利用this.$store.dispatch('xxx',data) 对vuex state中保存的用户信息数据利用返回的data进行更新记录 同时跳回到主页面

    利用localstorage进行用户信息存储读取
    1. 前提：用户信息已经保存到state中
    2. 方法 在state中 第一时间发送ajax请求（这里以有一个getUserInfo的api接口为例子），得到用户信息，更新用户信息。
