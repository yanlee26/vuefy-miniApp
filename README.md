# 像写vue一样写原生小程序

# 实现计划

- [x] promise化成功失败回调

- [x] canvas绘图，封装成AOP风格

- [x] mixin 扩展

- [x] watch 添加

- [x] computed 添加

- [x] store 引入 ，计划引入mobx

- [ ] filter 引入，todo

- [x] 常用组件[上拉加载，音频，，，]


```
├── app.js
├── app.json
├── app.wxss
├── Class
│   └── Canvas   // canvas类，各个文件可单独按需导出，也可以通过Index总体导出；采用AOP式编程风格
│       ├── Arc.js
│       ├── Base.js
│       ├── Img.js
│       ├── Index.js
│       ├── Line.js
│       ├── Rec.js
│       ├── Text.js
│       └── WxAPI.js
├── Component
│   └── scroll-view
│       ├── index.js
│       ├── index.json
│       ├── index.wxml
│       └── index.wxss
├── Extend
│   ├── mixin.js  // 混入扩展
│   └── vuefy.js  // watch及computed扩展
├── pages
│   ├── canvas
│   │   ├── index.js
│   │   ├── index.wxml
│   │   └── index.wxss
│   ├── mixin
│   │   ├── index.js
│   │   ├── index.wxml
│   │   ├── index.wxss
│   │   └── mixin.js
│   ├── store
│   │   ├── index.js
│   │   ├── index.wxml
│   │   └── index.wxss
│   └── watch-computed
│       ├── index.js
│       ├── index.wxml
│       └── index.wxss
├── project.config.json
├── README.md
├── store
│   └── todos
│       ├── index.js
│       └── todo.js
├── style
│   └── common.wxss
├── utils
│   ├── index.js
│   ├── observer.js // inspired by: https://github.com/80percent/wechat-weapp-mobx
│   └── promisified.js
└── vendor
    └── mobx.js
```