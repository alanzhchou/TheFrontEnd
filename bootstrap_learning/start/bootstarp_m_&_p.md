# bootstrap 快速调节 margin / padding

> 1. 单位 ： rem （font size of the root element）
```
即 根节点 html 的字体大小(相对单位，不固定)
通常来说 1rem 约 15px 
```

> 2. 在 布局中 最重要的两个量时是 margin 和 padding
```
bootstrap4 提供了用 class 来快速设置 布局的方法

分别以 m- 和 p- 开头 单位是 0.25rem
调整 某一侧时 
以两个字母开头 如 mt- ml- mr- mb- mx- my-

对应单位如下： 
```
class | 对应的style
:-- | :-:
m-0 | 等价于{margin:0 !important}
m-1 | 等价于{margin:0.25rem !important}
m-2 | 等价于{margin:0.5rem !important}
m-3 | 等价于{margin:1rem !important}
m-4 | 等价于{margin:1.5rem !important}
m-5 | 等价于{margin:3rem !important}
m-auto | 等价于{margin:auto !important}

class | 对应的style
:-- | :-:
p-0 | 等价于{padding:0 !important}
p-1 | 等价于{padding:0.25rem !important}
p-2 | 等价于{padding:0.5rem !important}
p-3 | 等价于{padding:1rem !important}
p-4 | 等价于{padding:1.5rem !important}
p-5 | 等价于{padding:3rem !important}
p-auto | 等价于{padding:auto !important}

