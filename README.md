# poshytip插件

### 1. 概述
这个poshytip插件是用jquery封装的用于信息提示的插件。主要功能是取代原有浏览器对title属性值的展现方式， 使得提示内容更加丰富、提示的效果能够自定义以便达到更好的用户体验效果。

### 2. 使用说明
- js依赖：jquery 1.4+
- 兼容性：IE 6+, FF 2+, Opera 9+, Safari 3+, Chrome
- 如果提示的容器是div标签的话，那你依然可以在样式上对其设置max-width和min-width，不必担心它在IE6下会不起作用。
- 在div容器上设置了background-image样式的时候，那脚本就会忽略background-color/padding/border这些样式；且背景图片会自动伸缩来适应提示内容。
- 在IE6下提示容器的背景图片只支持gif格式的，如果设置了png格式的背景图片，那脚本会默认忽略且用background-color/padding/border这些样式来代替。

### 3. 资源位置
- git：[https://github.com/Bulandent/poshytip](https://github.com/Bulandent/poshytip)
- 官网：[http://vadikom.com/tools/poshy-tip-jquery-plugin-for-stylish-tooltips](http://vadikom.com/tools/poshy-tip-jquery-plugin-for-stylish-tooltips)

### 4. 使用示例
使用示例里包含了下面这几个内容：poshytip官网定义的几款风格展示、不同的位置上的提示信息展示、异步加载提示信息展示、提示跟随鼠标移动、手动的去触发提示、live事件委托的示例展示以及自定义html来显示一个用户名片信息。




