#第一阶段任务


##任务一：零基础HTML编码

###任务注意事项

* 只需要完成HTML代码编写，不需要写CSS
* 示例图仅为参考，不需要完全实现一致，其中的图片、文案均可自行设定
* 尽可能多地尝试更多的HTML标签

###在线学习参考资料

* [Web相关名词通俗解释](https://www.zhihu.com/question/22689579)
* [MDN HTML入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction)
* [慕课HTML+CSS基础教程视频](http://www.imooc.com/learn/9)

####[命名字符参考](https://www.w3.org/TR/2011/WD-html5-20110113/named-character-references.html)
* &gt; 表示大于符号">" (>)
* &lt; 表示小于符号"<" (<)
* &amp; 表示和符号"and"(&)
* &quot; 表示引用符号" (")
* &copy; 


##任务二：零基础HTML及CSS编码（一）

###任务注意事项

* 只需要完成HTML，CSS代码编写，不需要写JavaScript
* 示例图仅为参考，不需要完全实现一致，其中的图片、文案均可自行设定
* 尽可能多地尝试不同的、更多的样式设定来实践各种CSS属性
* HTML 及 CSS 代码结构清晰、规范


###在线学习参考资料

* [MDN HTML入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction)
* [MDN CSS入门教程](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Getting_started)
* [慕课HTML+CSS基础教程视频](http://www.imooc.com/learn/9)


####实例: 使用基于关系的选择器和伪类选择器
通过使用基于关系的选择器和伪类选择器，你可以构造出复杂的叠加算法。这是一个常用的技巧，比如可以用来创建纯CSS无JavaScript的下拉菜单（pure-CSS dropdown menus）。关键点就是创建下面这类规则：

```
div.menu-bar ul ul {
  display: none;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

然后将这些规则应用到下面的HTML结构中：

```
<div class="menu-bar">
  <ul>
    <li>
      <a href="example.html">Menu</a>
      <ul>
        <li>
          <a href="example.html">Link</a>
        </li>
        <li>
          <a class="menu-nav" href="example.html">Submenu</a>
          <ul>
            <li>
              <a class="menu-nav" href="example.html">Submenu</a>
              <ul>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
              </ul>
            </li>
            <li><a href="example.html">Link</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```


##任务三：三栏式布局


###任务注意事项

* 尝试 position 和 float 的效果，思考它们的异同和应用场景。
* 注意测试不同情况，尤其是极端情况下的效果。
* 图片和文字内容请自行替换，尽可能体现团队的特色。
* 调节浏览器宽度，固定宽度和自适应宽度的效果始终符合预期。
* 改变中间一栏的内容长度，以确保在中间一栏较高和右边一栏较高时，父元素的高度始终为子元素中最高的高度。左右两栏宽度固定，中间一栏根据父元素宽度填充满，最外面的框应理解为浏览器。背景色为 #eee 区域的高度取决于三个子元素中最高的高度。
* 其他效果图中给出的标识均被正确地实现。


###朝花夕拾

* 相对定位的元素仍然被认为是处于文档流之中。相比之下，绝对定位的元素则被认为脱离了文档流。绝对定位元素的位置是相对于他最近的定位祖先元素（position值非static）。如果没有这样的一个祖先元素，则相对于原始的容器。
* 清除浮动：.clearfix {overflow: auto; zoom: 1;} 
* block 元素：`<div>` 是一个标准的块级元素。一个块级元素会新开始一行并且尽可能撑满容器。其他常用的块级元素包括 `p`, `form`  `header`, 和HTML5 中的新元素`footer`, `section`.
* inline 元素： `span` 是一个标准的行内元素，一个行内元素可以在段落中包裹一些文字而不会打乱段落的布局。`a` 元素是最常用的行内元素，它可以被用作链接。
* 另一个常用的display值是 `none`。 一些特殊元素的默认display 值是它，例如 `script`。  `display:none` 通常被JavaScript 用来在不删除元素的情况下隐藏或显示元素。它和 `visibility` 属性不一样。把`display` 设置成`none` 不会保留元素本该显示的空间，但是`visibility: hidden`还会保留。常见的例子：把`li`元素修改成inline，制作成水平菜单.
* `<div id="main">` `#main{width: 600px; margin: 0 auto;}` 设置块级元素的`width`可以阻止它从左到右撑满容器。然后设置左右外边距为 `auto` 来使其水平居中。元素会占据你所指定的宽度，然后剩余的宽度会一分为二成为左右外边距。唯一的问题是，当浏览器窗口比元素的宽度还窄，浏览器会显示一个水平滚动条来容纳页面。
* `<div id="main">` `#main { max-width: 600px; margin: 0 auto; }` 在这种情况下使用 `max-width` 替代 `width` 可以使浏览器更好地处理小窗口的情况。这点在移动设备上显得尤为重要，调整下浏览器窗口大小检查下吧！顺便提下， 所有的主流浏览器包括IE7+在内都支持 max-width ，所以放心大胆的用吧。
*  当你设置一个元素为 `box-sizing: border-box;` 时，此元素的内边距和边框不再会增加它的宽度。

	既然没有比这更好的方法，一些CSS开发者想要页面上所有的元素都有如此表现。所以开发者们把以下CSS代码放在他们页面上：
	
	```
	* {
	  -webkit-box-sizing: border-box;
	     -moz-box-sizing: border-box;
	          box-sizing: border-box;
	}
	```
*  `static` 是默认值。任意 `position: static;` 的元素不会被特殊的定位。一个 `static` 元素表示它不会被“positioned”，一个 `position` 属性被设置为其他值的元素表示它会被“positioned”。
*  `relative` 表现的和 `static` 一样，除非你添加了一些额外的属性。
	
	在一个相对定位（position属性的值为relative）的元素上设置 `top` 、 `right` 、 `bottom` 和 `left` 属性会使其偏离其正常位置。其他的元素则不会调整位置来弥补它偏离后剩下的空隙。
	
* 一个固定定位（position属性的值为fixed）元素会相对于视窗来定位，这意味着即便页面滚动，它还是会停留在相同的位置。和 `relative` 一样， `top` 、 `right` 、 `bottom` 和 `left` 属性都可用。一个固定定位元素不会保留它原本在页面应有的空隙。令人惊讶地是移动浏览器对 fixed 的支持很差。[这里有相应的解决方案.](http://bradfrost.com/blog/mobile/fixed-position/)
* `absolute` 是最棘手的position值。 `absolute` 与 `fixed` 的表现类似，除了它不是相对于视窗而是相对于最近的“positioned”祖先元素。如果绝对定位（position属性的值为absolute）的元素没有“positioned”祖先元素，那么它是相对于文档的 body 元素，并且它会随着页面滚动而移动。记住一个“positioned”元素是指`position` 值不是 `static` 的元素。
* [position例子,真正的页面布局](http://zh.learnlayout.com/position-example.html) 如果你使用了一个固定定位的页眉或页脚，确保有足够的空间来显示它们！我在 `body` 上面加了 `margin-bottom` 。
* 另一个布局中常用的CSS属性是 `float` 。Float 可用于实现文字环绕图片.`img {
  float: right; margin: 0 0 1em 1em;}`
* clear 属性被用于控制浮动。比较下面两个例子：

	```
	<div class="box">...</div>
	<section>...</section>
	.box {
	  float: left;
	  width: 200px;
	  height: 100px;
	  margin: 1em;
	}
	```
	
	在这个例子中， `section` 元素实际上是在 `div` 之后的（译注：DOM结构上）。然而 `div` 元素是浮动到左边的，于是 `section` 中的文字就围绕了 `div` ，并且 `section` 元素包围了整个元素。如果我们想让 `section` 显示在浮动元素之后呢？
	
	```
	.box {
	  float: left;
	  width: 200px;
	  height: 100px;
	  margin: 1em;
	}
	.after-box {
	  clear: left;
	}
	```
	
	使用 `clear` 我们就可以将这个段落移动到浮动元素 `div` 下面。你需要用 `left` 值才能清除元素的向左浮动。你还可以用 `right` 或 `both` 来清除向右浮动或同时清除向左向右浮动。
	
* 清除浮动（clearfix hack）在使用浮动的时候经常会遇到一个古怪的事情：`img {float: right;}`. 不......这个图片比包含它的元素还高， 而且它是浮动的，于是它就溢出到了容器外面！见证奇迹的时刻到了！有一种比较丑陋的方法可以解决这个问题，它叫做清除浮动（**clearfix hack**）. 让我们加入一些新的CSS样式：`.clearfix { overflow: auto; }` 这个可以在现代浏览器上工作。如果你想要支持IE6，你就需要再加入如下样式：`.clearfix { overflow: auto; zoom: 1; }` 有些独特的浏览器需要“额外的关照”。[清除浮动这谭水很深很深](http://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use)，但是这个简单的解决方案已经可以在今天所有的主要浏览器上工作。
* [浮动布局例子](http://zh.learnlayout.com/float-layout.html) 完全使用 `float` 来实现页面的布局是很常见的。这里有一个我之前用 `position` 实现的布局例子，这次我使用 `float` 实现了它。

	```
	nav {
	  float: left;
	  width: 200px;
	}
	section {
	  margin-left: 200px;
	}
	```
	
	这个例子和之前那个外观一模一样。请注意我们在容器上做了“清除浮动”。原本在这个例子中是不需要的，但是当 `nav` 比非浮动的内容还要高时就需要了。
	
* 百分比宽度 百分比是一种相对于包含块的计量单位。它对图片很有用：如下我们实现了图片宽度始终是容器宽度的50%。 `article img { float: right; width: 50%;}`. 你甚至还能同时使用 `min-width` 和 `max-width` 来限制图片的最大或最小宽度！
* 百分比宽度布局 你可以用百分比做布局，但是这需要更多的工作。在下面的例子中，当窗口宽度很窄时 `nav` 的内容会以一种不太友好的方式被包裹起来。总而言之，选一种最合适你的内容的方式。

	```
	nav {
	  float: left;
	  width: 25%;
	}
	section {
	  margin-left: 25%;
	}
	```
	
	当布局很窄时， `nav` 就会被挤扁。更糟糕的是，你不能在 `nav` 上使用 `min-width` 来修复这个问题，因为右边的那列是不会遵守它的。
	
* 媒体查询

	“响应式设计（Responsive Design）”是一种让网站针对不同的浏览器和设备“响应”不同显示效果的策略，这样可以让网站在任何情况下显示的很棒！

	媒体查询是做此事所需的最强大的工具。让我们使用百分比宽度来布局，然后在浏览器变窄到无法容纳侧边栏中的菜单时，把布局显示成一列：
	
	```
	@media screen and (min-width:600px) {
	  nav {
	    float: left;
	    width: 25%;
	  }
	  section {
	    margin-left: 25%;
	  }
	}
	@media screen and (max-width:599px) {
	  nav li {
	    display: inline;
	  }
	}
	```
	
	现在我们的布局在移动浏览器上也显示的很棒。这里有一些同样使用了媒体查询的著名站点。(http://mediaqueri.es/) 在[MDN文档](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries)中你还可以学到更多有关媒体查询的知识。
	
* 额外加分点

	使用 [meta viewport](https://dev.opera.com/articles/an-introduction-to-meta-viewport-and-viewport/) 之后可以让你的布局在移动浏览器上显示的更好。
	
* [inline-block](http://zh.learnlayout.com/inline-block.html)

	你可以创建很多网格来铺满浏览器。在过去很长的一段时间内使用 `float` 是一种选择，但是使用 `inline-block` 会更简单。让我们看下使用这两种方法的例子：
	
	**困难的方式（使用浮动)**
	
	```
	.box {
	  float: left;
	  width: 200px;
	  height: 100px;
	  margin: 1em;
	}
	.after-box {
	  clear: left;
	}
	```
	
	**容易的方式（使用 inline-block）**

	你可以用 `display` 属性的值 `inline-block` 来实现相同效果。
	
	```
	.box2 {
	  display: inline-block;
	  width: 200px;
	  height: 100px;
	  margin: 1em;
	}
	```
	
	你得做些额外工作来让IE6和IE7支持 inline-block 。有些时候人们谈到 inline-block 会触发叫做 hasLayout 的东西，你只需要知道那是用来支持旧浏览器的。
	
* inline-block 布局

	你可以使用 inline-block 来布局。有一些事情需要你牢记：

	* vertical-align 属性会影响到 inline-block 元素，你可能会把它的值设置为 top 。
	* 你需要设置每一列的宽度
	* 如果HTML源代码中元素之间有空格，那么列与列之间会产生空隙

	```
	nav {
	  display: inline-block;
	  vertical-align: top;
	  width: 25%;
	}
	.column {
	  display: inline-block;
	  vertical-align: top;
	  width: 75%;
	}
	```
	
* column

	[这里有一系列新的CSS属性](http://zh.learnlayout.com/column.html)，可以帮助你很轻松的实现文字的多列布局。
	
* flexbox

	[新的 flexbox 布局模式被用来重新定义CSS中的布局方式](http://zh.learnlayout.com/flexbox.html)。
	
* css框架

	因为 CSS 布局很难使用，所以催生了不少 CSS 框架来帮助开发者。如果你想看看那么这里有一些。只有在框架的功能契合你的需求时，使用框架才是个好主意。掌握CSS的工作方式是无可替代的。

	
###参考资料

* [MDN：position：了解 CSS position 属性的基本知识](https://developer.mozilla.org/zh-CN/docs/Web/CSS/position)
* [MDN：float：了解 CSS float 属性的基本知识](https://developer.mozilla.org/en-US/docs/Web/CSS/float)
* [Learn CSS Positioning in Ten Steps：通过具体的例子熟悉 position 属性](http://www.barelyfitz.com/screencast/html-training/css/positioning/)
* [清除浮动（clearfix hack）：清除浮动是什么，如何简单地清除浮动](http://zh.learnlayout.com/clearfix.html)
* [StackOverflow：Which method of ‘clearfix’ is best?：清除浮动黑科技完整解读](http://stackoverflow.com/questions/211383/what-methods-of-clearfix-can-i-use)


##任务四：定位和居中问题

###任务注意事项

* 思考不同情况下（如灰色高度是根据内容动态变化的）水平垂直居中的解决方案。
* 动手试一试各种情况的组合，父元素和子元素分别取不同的 position 值。思考 position 属性各种取值的真正含义，尤其是 absolute 究竟是相对谁而言的。
* 注意测试不同情况，尤其是极端情况下的效果。
* 调节浏览器宽度，灰色元素始终水平居中。
* 调节浏览器高度，灰色元素始终垂直居中。
* 调节浏览器高度和宽度，黄色扇形的定位始终准确。
* 其他效果图中给出的标识均被正确地实现，错一项扣一分。


###朝花夕拾

* 最典型的问题就是一个父元素包含了多个浮动的子元素。页面的内容设置了一个宽度，子元素的浮动确定了他们的位置，但浮动元素不会影响父元素的宽度。这样做会让父元素塌陷，从而使父元素的高度为“0”，以及忽略其他的属性。很多时候，这种现像都被忽略，特别是在父元素没有任何样式，以及其子元素看起来都正确的对齐。
* Overflow技巧

	一种清除浮动的技巧是使用“overflow”属性。在具有浮动元素的父容器中设置“overflow”的属性值为“auto”，这样父容器就会有一个高度存在，在我们例子中的灰色背景也就能看得到了。

	在IE6里面，父容器是需要设置一个“width”和“height”。因为高度可能是一个变量，宽度为100%，他们将能正常的工作。使用“overflow:auto;”,在IE浏览器中会给元素添加滚动条，这样一来，最好是直接使用“overflow:hidden;”来清除浮动。
	
	使用“overflow”技巧清除浮动，确实存在一些缺点。例如：当你添加样式，或者将嵌套在里面的“span”元素移动到父容器的外面，或者你想给元素添加一个盒子阴影和制作一个下拉菜单。在下面的演示例子中，你可以看到元素的盒子阴影被切断在父元素之内。
	
* clearfix技巧

	根据上下文，清除浮动更好的方法是clearfix技巧。“clearfix”技巧是基于在父元素上使用“:before”和“:after”两个伪类。使用这些伪类，我们可以在浮动元素的父容器前面和后面创建隐藏元素。“:before”伪类是用来防止子元素顶部的外边距塌陷，使用“display: table”创建一个匿名的“table-cell”元素。这也确保在IE6和IE7下具有一致性。“:after”伪类是用来防止子元素的底部的外边距塌陷，以及用来清除元素的浮动。

	在IE6和7的浏览器中，加上“*zoom”属性来触发父元素的hasLayout的机制。决定了元素怎样渲染内容，以及元素与元素之间的相互影响。

	采取上面同样的例子，你可以看到容器也清除了浮动，元素也可以移到父容器外面：
	
	```
	.box-set:before,
	.box-set:after {
	  content: "";
	  display: table;
	}
	.box-set:after {
	  clear: both;
	}
	.box-set {
	  *zoom: 1;
	}	
	```
	
* 有效的包含浮动

	使用哪种技巧来清除浮动，终究要看你自己喜好。有些人坚持使用“clearfix”来清除浮动，因为这种方法可以贯穿整个项目。有些人认为“clearfix”技巧使用的代码太多，他还是喜欢简单点的。至于使用什么技巧由您来决定，只要在运用了浮动的元素的父容器需要清除浮动。

	一个常见的方法是将定义一个类名，把这个类名加到需要清除浮动的容器上。例如使用“clearfix”清除浮动，Dan Cederholm为容器设置了一个类名“group”。在需要清除浮动的容器上添加这个类名“group”。
	
	```
	.group:before,
	.group:after {
	  content: "";
	  display: table;
	}
	.group:after {
	  clear: both;
	}
	.group {
	  *zoom: 1;
	}	
	```
	
* 定位属性

	很多情况下，你需要控制更多元素的位置，而且超过了浮动所能提供的范围，这个时候我们就需要发挥“position”属性的作用。“position”属性提供五个不同的属性值，每种不同的方式可以给元素提供不同的位置。
	
* Position static

	元素都有position属性，其默认值是“static”，这也意味着，他们没有也不接受位置属性设置（top、right、bottom、left属性值设置）。另外元素设置了position属性，将会覆盖元素的默认值“static”。

	在下面的演示中，所有的盒子都是静态的，每个盒子都在相邻盒子顶部，因为他们都是块元素，而且没有进行浮动设置。

	```
	HTML

	<div class="box-set">
	  <div class="box">Box 1</div>
	  <div class="box">Box 2</div>
	  <div class="box">Box 3</div>
	</div>	
	CSS
	
	.box-set {
	  background: #e8eae9;
	}
	.box {
	  background: #8ec63f;
	  height: 80px;
	  width: 80px;
	}	
	```
	
* Position relative

	“relative”是“position”的另一个属性值，他和“static”属性值非常的相似。主要的区别是“relative”可以给元素设置位移（offset）“top、right、bottom和left”属性。通过这些位移属性设置可以给元素进行精确的定位。
	
	设置了位移属性的相对定位元素，他在页面中仍然是正常的、静态的，仍属于自然流。在这种情况下，其他元素不会占用相对定们元素当初的位置。此外，其他元素没有进行位置移动时，相对定伴元素可能会和其他元素重叠。

	在下面的演示中，每个元素还是在另一个元素顶部，然后他们根据自己移位属性，从默认位置进行移动，由于他们移向方向不一样，这些值使元素重叠在一起。当元素设置了相对定时，周边的元素也能看到相对定位元素的默认位置。（也就是说，相对定位元素的默认位置还是被元素自身占用，别的元素是无法占用的。也就是说相对定位元素的位移是相对于元素自身的边缘进行位移）。
	
	```
	CSS

	.box-set {
	  background: #e8eae9;
	}
	.box {
	  background: #8ec63f;
	  height: 80px;
	  position: relative;
	  width: 80px;
	}
	.box-1 {
	    top: 20px;
	  }
	.box-2 {
	  left: 40px;
	}
	.box-3 {
	  bottom: -10px;
	  right: 20px;
	}	
	```
	
	事实上，一个相对定位元素同时设置了“top”和“bottom”位移属性值，实际上“top”优先级高于“bottom”。然而，一个相对定位元素同时设置了“left”和“right”位移属性，他们的优先级取决于页面使用的是哪种语言，例如，如果你的页面是英文页面，那么“left”位移属性优先级高，如果你的页面是阿拉伯语，那么“right”的位移属性优先级高。
	
* Position absolute

	绝对定位元素也具有盒子位移属性，然而，绝对定位元素会脱离文档流。绝对定位元素直接从文档流中移出，绝对定位元素的位置直接和父容器是否设置了相对定位（绝对定位）有直接关系。绝对定位元素需要至少一个祖先元素设置了相对定位（绝对定位），不然元素定位会相对于页面的主体进行定位。

	使用绝对定位的元素可以指定垂直和水平的位移属性，使绝对定位元素相对于设置了相对定们的祖先元素边缘进行移位。例如，一个绝对定位的元素设置了“top”值为“50px”和一个“right”值为“100px”,绝对定位元素会相对于其设置了相对定位的父元素的顶边向下移动50px;向左移动100px。

	然而，使用了绝对定位的元素并没有进行任何盒子位移属性设置，那么绝对定位元素的顶部和左部会和设置了相对定位的父元素的顶边和左边重合。如果设置了一个盒子位移属性，比如说“top”，那么绝对定位元素垂直方向会进行移动，而水平位置默认还是左边对齐。

	在下面的演示中，你可以看到所有的盒子都相对于div的父元素进行绝对定位，每个元素都从特定的面使用定位值进行移动，而且使用了负值的，元素移动到盒子的外面。
	
	```
	.box-set {
	  background: #e8eae9;
	  height: 200px;
	  position: relative;
	}
	.box {
	  background: #8ec63f;
	  height: 80px;
	  position: absolute;
	  width: 80px;
	}
	.box-1 {
	  top: 6%;
	  left: 2%;
	}
	.box-2 {
	  top: 0;
	  right: -40px;
	}
	.box-3 {
	  bottom: -10px;
	  right: 20px;
	}
	.box-4 {
	  bottom: 0;
	}
	```
	
	当一个绝对定位的元素有固定的高度和宽度，并且盒子位移同时设置了“top”和“bottom”时，“top”更具优先组，另外和相对定位元素一样，当同时设置了“left”和“right”时，优先级取决于他的页面使用的语言。

	当一个绝对定位的元素没有明确指定高度和宽度，同时使用盒子位移的“top”和“bottom”属性时，会使整个元素的高度跨越整个容器。同样的，当这个元素同时使用位移“left”和“right”属性值，会使整个元素的宽度跨越整个容器。如果同时使用位移四个属性，可以指定一个宽度和高度显示元素。（这个时候绝对定位元素的宽度和高度都是100%。）
	
* Position fixed

	固定定位和绝对定位很类似，但是他定位是相对于浏览器窗口，并且不会随滚动条进行滚动。也就是说，不管用户停留在页面那个地方，固定定位的元素将始终停留在页面的一个地方。“position”属性值中，仅有“fixed”属性值不能在IE6浏览器下运行，如果你想在IE6正常使用固定定位，那么你就需要为他写一些Hacks。

	固定定位元素的盒子位移属性的使用和绝对定位的一样。

	保持前面盒子移位，可以看到盒子固定定位是相对于浏览器窗口而不是设置了相对定位的父元素。
	
	```
	CSS

	.box {
	  background: #8ec63f;
	  height: 80px;
	  position: fixed;
	  width: 80px;
	}
	.box-1 {
	  top: 6%;
	  left: 2%;
	}
	.box-2 {
	  top: 0;
	  right: -40px;
	}
	.box-3 {
	  bottom: -10px;
	  right: 20px;
	}
	.box-4 {
	  bottom: 0;
	}	
	```
	
* 固定页头和页脚

	固定定位最常见的一种用途就是在页面中创建一个固定头部、或者脚部、或者固定页面的一个侧面。就算是用户移动浏览器的滚动条，还是固定在页现与用户交流。

	下面的示例代码能实现。注意如何设置“left”和“right”两个盒子位移，这使得“页脚”跨越了页面的整个宽度，而不需使用margin、border和padding来破坏盒模形就做了收缩自如。
	
	```
	HTML
	
	< footer >Fixed Footer </footer>	
	
	CSS
	
	footer {
	  bottom: 0;
	  left: 0;
	  position: fixed;
	  right: 0;
	}	
	```
	
* z-index属性

	通常都认为Web页面是二维页面，显示的元素都在X轴和Y轴上。当你的元素有定位时，他们有时候会放置在另一个元素的顶部。要改变这些元素是一个 怎么样的层叠顺序，要知道z轴，z轴是用“z-index”属性来控制的。

	一般来说，在DOM中，元素出现的时候就放置在z轴上。在Dom中，元素在顶部的要低于底部的。改变这种层叠顺序可以直接使用“z-index”来控制。元素的“z-index”值越高将会出现在越上面，不管元素在Dom哪个位置上。

	给元素设置“z-index”属性，首先要在这个元素上设置了“position”属性值为“relatvie”、“absolute”或者“fixed”之一。同样的，你要使用盒子位移属性，你也要先确认元素设置了“positions”属性值为“relative”、“absolute”或者“fixed”之一。

	在下面的登例子中，如果每个盒子都不设置“z-index”，那么第一个box在第二个下面，第二个在第三个下面，第三个在第四个下面。如果在盒子中指定“z-index”的值，第二个盒子在第一个和第三个上面，第三个盒子在第四个上面。

	```
	HTML
	
	<div class="box-set">
	  <div class="box">Box 1</div>
	  <div class="box">Box 2</div>
	  <div class="box">Box 3</div>
	</div>  
	CSS
	
	 .box-set {
	  background: #e8eae9;
	  height: 160px;
	  position: relative;
	}
	.box {
	  background: #8ec63f;
	  border: 3px solid #f7941d;
	  position: absolute;
	}
	.box-1 {
	  left: 10px;
	  top: 10px;
	}
	.box-2 {
	  bottom: 10px;
	  left: 70px;
	  z-index: 3;
	}
	.box-3 {
	  left: 130px;
	  top: 10px;
	  z-index: 2;
	}
	.box-4 {
	  bottom: 10px;
	  left: 190px;
	  z-index: 1;
	} 
	```

* 不同情况下的居中方案


* Horizontally
	
	- Is it inline or inline-* elements (like text or links)?
	
	You can center inline elements horizontally, within a block-level parent element, with just:
	
	```
	.center-children {
	  text-align: center;
	}
	```
	
	This will work for inline, inline-block, inline-table, inline-flex, etc.

	- Is it a block level element?

	You can center a block-level element by giving it margin-left and margin-right of auto (and it has a set width, otherwise it would be full width and wouldn't need centering). That's often done with shorthand like this:
	
	```
	.center-me {
	  margin: 0 auto;
	}
	```
	This will work no matter what the width of the block level element you're centering, or the parent.

	Note that you can't float an element to the center. [There is a trick though.](https://css-tricks.com/float-center/)

	- Is there more than one block level element?

	If you have two or more block-level elements that need to be centered horizontally in a row, chances are you'd be better served making them a different display type. Here's an example of making them inline-block and an example of flexbox:
	
	```
	<main class="inline-block-center">
	  <div>
	    I'm an element that is block-like with my siblings and we're centered in a row.
	  </div>
	  <div>
	    I'm an element that is block-like with my siblings and we're centered in a row. I have more content in me than my siblings do.
	  </div>
	  <div>
	    I'm an element that is block-like with my siblings and we're centered in a row.
	  </div>
	</main>
	
	<main class="flex-center">
	  <div>
	    I'm an element that is block-like with my siblings and we're centered in a row.
	  </div>
	  <div>
	    I'm an element that is block-like with my siblings and we're centered in a row. I have more content in me than my siblings do.
	  </div>
	  <div>
	    I'm an element that is block-like with my siblings and we're centered in a row.
	  </div>
	</main>
	
	CSS
	
	body {
	  background: #f06d06;
	  font-size: 80%;
	}
	
	main {
	  background: white;
	  margin: 20px 0;
	  padding: 10px;
	}
	
	main div {
	  background: black;
	  color: white;
	  padding: 15px;
	  max-width: 125px;
	  margin: 5px;
	}
	
	.inline-block-center {
	  text-align: center;
	}
	.inline-block-center div {
	  display: inline-block;
	  text-align: left;
	}
	
	.flex-center {
	  display: flex;
	  justify-content: center;
	}
	```
	
	Unless you mean you have multiple block level elements stacked on top of each other, in which case the auto margin technique is still fine:
	
	```
	body {
	  background: #f06d06;
	  font-size: 80%;
	}
	
	main {
	  background: white;
	  margin: 20px 0;
	  padding: 10px;
	}
	
	main div {
	  background: black;
	  margin: 0 auto;
	  color: white;
	  padding: 15px;
	  margin: 5px auto;
	}
	
	main div:nth-child(1) {
	  width: 200px;
	}
	main div:nth-child(2) {
	  width: 400px;
	}
	main div:nth-child(3) {
	  width: 125px;
	}
	```



* [Vertically](https://css-tricks.com/centering-css-complete-guide/#center-horizontally)

	Vertical centering is a bit trickier in CSS.

	- Is it inline or inline-* elements (like text or links)?

		* Is it a single line?

		Sometimes inline / text elements can appear vertically centered, just because there is equal padding above and below them.
		
		```
		.link {
		  padding-top: 30px;
		  padding-bottom: 30px;
		}
		```
		
		If padding isn't an option for some reason, and you're trying to center some text that you know will not wrap, there is a trick were making the line-height equal to the height will center the text.
		
		```
		.center-text-trick {
		  height: 100px;
		  line-height: 100px;
		  white-space: nowrap;
		}
		```
		
		* Is it multiple lines?

		Equal padding on top and bottom can give the centered effect for multiple lines of text too, but if that isn't going to work, perhaps the element the text is in can be a table cell, either literally or made to behave like one with CSS. The vertical-align property handles this, in this case, unlike what it normally does which is handle the alignment of elements aligned on a row. 
		
		`img { vertical-align: middle;}`
		
		```
		<table>
		  <tr>
		    <td>
		      I'm vertically centered multiple lines of text in a real table cell.
		    </td>
		  </tr>
		</table>
		
		<div class="center-table">
		  <p>I'm vertically centered multiple lines of text in a CSS-created table layout.</p>
		</div>
		
		body {
		  background: #f06d06;
		  font-size: 80%;
		}
		
		table {
		  background: white;
		  width: 240px;
		  border-collapse: separate;
		  margin: 20px;
		  height: 250px;
		}
		
		table td {
		  background: black;
		  color: white;
		  padding: 20px;
		  border: 10px solid white;
		  /* default is vertical-align: middle; */
		}
		
		.center-table {
		  display: table;
		  height: 250px;
		  background: white;
		  width: 240px;
		  margin: 20px;
		}
		.center-table p {
		  display: table-cell;
		  margin: 0;
		  background: black;
		  color: white;
		  padding: 20px;
		  border: 10px solid white;
		  vertical-align: middle;
		}
		```
		
		If something table-like is out, perhaps you could use flexbox? A single flex-child can be made to center in a flex-parent pretty easily.
		
		```
		.flex-center-vertically {
		  display: flex;
		  justify-content: center;
		  flex-direction: column;
		  height: 400px;
		}
		```
		
		Remember that it's only really relevant if the parent container has a fixed height (px, %, etc), which is why the container here has a height.

		If both of these techniques are out, you could employ the "ghost element" technique, in which a full-height pseudo element is placed inside the container and the text is vertically aligned with that.

		```
		.ghost-center {
		  position: relative;
		}
		.ghost-center::before {
		  content: " ";
		  display: inline-block;
		  height: 100%;
		  width: 1%;
		  vertical-align: middle;
		}
		.ghost-center p {
		  display: inline-block;
		  vertical-align: middle;
		}
		```

	- Is it a block-level element?
		
		* Do you know the height of the element?

		It's fairly common to not know the height in web page layout, for lots of reasons: if the width changes, text reflow can change the height. Variance in the styling of text can change the height. Variance in the amount of text can change the height. Elements with a fixed aspect ratio, like images, can change height when resized. Etc.

		But if you do know the height, you can center vertically like:
		
		```
		.parent {
		  position: relative;
		}
		.child {
		  position: absolute;
		  top: 50%;
		  height: 100px;
		  margin-top: -50px; /* account for padding and border if not using box-sizing: border-box; */
		}
		```
		
		* Is the element of unknown height?

		It's still possible to center it by nudging it up half of it's height after bumping it down halfway:
		
		```
		.parent {
		  position: relative;
		}
		.child {
		  position: absolute;
		  top: 50%;
		  transform: translateY(-50%);
		}
		```
		
		* Can you use flexbox?

		```
		.parent {
		  display: flex;
		  flex-direction: column;
		  justify-content: center;
		}
		```

* Both Horizontally and vertically

	- Is the element of fixed width and height?

	Using negative margins equal to half of that width and height, after you've absolutely positioned it at 50% / 50% will center it with great cross browser support:
	
	```
	.parent {
	  position: relative;
	}
	
	.child {
	  width: 300px;
	  height: 100px;
	  padding: 20px;
	
	  position: absolute;
	  top: 50%;
	  left: 50%;
	
	  margin: -70px 0 0 -170px;
	}
	```
	
	- Is the element of unknown width and height?

	If you don't know the width or height, you can use the transform property and a negative translate of 50% in both directions (it is based on the current width/height of the element) to center:
	
	```
	.parent {
	  position: relative;
	}
	.child {
	  position: absolute;
	  top: 50%;
	  left: 50%;
	  transform: translate(-50%, -50%);
	}
	```
	
	- Can you use flexbox?

	To center in both directions with flexbox, you need to use two centering properties:
	
	```
	.parent {
	  display: flex;
	  justify-content: center;
	  align-items: center;
	}
	```


###参考资料

* [HTML和CSS高级指南之二——定位详解：大漠老师手把手教你，这次彻底搞懂定位问题](http://www.w3cplus.com/css/advanced-html-css-lesson2-detailed-css-positioning.html)
* [Centering in CSS: A Complete Guide：完整讨论了不同情况下的居中方案，建议自己思考之后再看答案](https://css-tricks.com/centering-css-complete-guide/)
* [Get HTML & CSS Tips In Your Inbox：有人写了一个作弊工具生成居中代码，但是看着代码你明白为什么吗]()
*  [《An Adavnced Guide to HTML & CSS》](http://learn.shayhowe.com/advanced-html-css/performance-organization/)


##任务五：零基础HTML及CSS编码（二）

###任务描述

* 基于第一个任务“零基础HTML编码”的代码，参考 示例图（点击查看），在步骤一的代码基础上增加CSS样式代码的编写
* 头部和底部的黑色区域始终是100%宽
* 页面右侧部分为固定宽度，左侧保持与浏览器窗口变化同步自适应变化
* 左侧的各个模块里面的内容宽度跟随左侧整体宽度同步自适应变化
* 10张图片需要永远都完整展现，所以会随着宽度变窄，从两行变成三行甚至更多，也有可能随着宽度变宽，变成一行


##任务六：通过HTML及CSS模拟报纸排版

###任务描述

* 参考 PDS设计稿（点击下载），实现页面开发，要求实现效果与 样例（点击查看） 基本一致
* 页面中的各字体大小，内外边距等可参看 标注图（点击查看）
* 页面宽度固定（定宽）
* 只需要完成HTML，CSS代码编写，不需要写JavaScript
* 设计稿中的图片、文案均可自行设定
* 在Chrome中完美实现符合标注中的各项说明
* 有能力的同学可以尝试跨浏览器的兼容性
* 有能力的同学可以在实现一遍后尝试用less, sass或者stylus等再实现一次

##任务七：实现常见的技术产品官网的页面架构及样式布局

###任务描述

* 通过HTML及CSS实现设计稿 设计稿PSD文件（点击下载），效果如 效果图（点击打开）
* 设计稿是有一定宽度的，这个宽度为页面的最小宽度，也就是说，当浏览器窗口宽度小于设计稿宽度时，允许出现横向滚动条，页面内容宽度保持不变，但是当浏览器窗口宽度大于设计稿宽度时，页面部分内容的宽度应该保持和浏览器窗口宽度一致，具体哪些部分题目不做具体指明，看看大家的判断如何。
* 只需要完成HTML，CSS代码编写，不需要写JavaScript
* 设计稿中的图片、文案均可自行设定
* 在Chrome中完美实现与设计稿的各项字体、布局、内外边距等样式
* 有能力的同学可以尝试跨浏览器的兼容性
* 有能力的同学可以在实现一遍后尝试用less, sass或者stylus等再实现一次


##任务十三：零基础JavaScript编码（一）

###任务描述

参考以下示例代码，补充其中的JavaScript功能，完成一个JavaScript代码的编写
本任务完成的功能为：用户可以在输入框中输入任何内容，点击“确认填写”按钮后，用户输入的内容会显示在“您输入的值是”文字的右边

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
  </head>
<body>

  <label>请输入北京今天空气质量：<input id="aqi-input" type="text"></label>
  <button id="button">确认填写</button>

  <div>您输入的值是：<span id="aqi-display">尚无录入</span></div>

<script type="text/javascript">

(function() {
  /*	
  在注释下方写下代码
  给按钮button绑定一个点击事件
  在事件处理函数中
  获取aqi-input输入的值，并显示在aqi-display中
  */
  var oBtn = document.getElementById('button'),
      oText = document.getElementById('aqi-input'),
      oShow = document.getElementById('aqi-display');

  oBtn.onclick = function () {
    // console.log(oText.value);
    var num = parseInt(oText.value);
    if ((!isNaN(num)) && (num>=0) && (num<=1000)) {
      oShow.innerHTML = num;
    } else {
      alert(oText.value + '不是有效的AQI数值，请重新输入0-1000的有效整数！');
    }
    // console.log(oShow.innerHTML);
  };

})();

</script>
</body>
</html>
```

###在线学习参考资料

* [JavaScript入门篇](http://www.imooc.com/view/36)
* [MDN JavaScript](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript)


##任务十四：零基础JavaScript编码（二）

###任务描述

参考以下示例代码，页面加载后，将提供的空气质量数据数组，按照某种逻辑（比如空气质量大于60）进行过滤筛选，最后将符合条件的数据按照一定的格式要求显示在网页上

```
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
  </head>
<body>

  <h3>污染城市列表</h3>
  <ul id="aqi-list">
<!--   
    <li>第一名：福州（样例），10</li>
  	<li>第二名：福州（样例），10</li> -->
  </ul>

<script type="text/javascript">

var aqiData = [
  ["北京", 90],
  ["上海", 50],
  ["福州", 10],
  ["广州", 50],
  ["成都", 90],
  ["西安", 100]
];

(function () {

  /*
  在注释下方编写代码
  遍历读取aqiData中各个城市的数据
  将空气质量指数大于60的城市显示到aqi-list的列表中
  */
  var oList = document.getElementById('aqi-list'),
      arr = ["一","二","三","四","五"];

  // sort asce
  aqiData.sort(function (a, b) {
    return b[1] - a[1];
  });

  oList.innerHTML = "";

  for (var i = 0; i < aqiData.length; i++) {
    if (aqiData[i][1] > 60) {
      var oLi = document.createElement('li');
      oLi.innerHTML = '第'+arr[i]+'名：'+aqiData[i][0]+' , '+aqiData[i][1];;
      oList.appendChild(oLi);
    }
  }

})();

</script>
</body>
</html>
```

##任务十五：零基础JavaScript编码（三）

###任务描述

参考以下示例代码，读取页面上已有的source列表，从中提取出城市以及对应的空气质量
将数据按照某种顺序排序后，在resort列表中按照顺序显示出来

```
<!DOCTYPE>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
  </head>
<body>

  <ul id="source">
    <li>北京空气质量：<b>90</b></li>
    <li>上海空气质量：<b>70</b></li>
    <li>天津空气质量：<b>80</b></li>
    <li>广州空气质量：<b>50</b></li>
    <li>深圳空气质量：<b>40</b></li>
    <li>福州空气质量：<b>32</b></li>
    <li>成都空气质量：<b>90</b></li>
  </ul>

  <ul id="resort">
    <!-- 
    <li>第一名：北京空气质量：<b>90</b></li>
    <li>第二名：北京空气质量：<b>90</b></li>
    <li>第三名：北京空气质量：<b>90</b></li>
     -->

  </ul>

  <button id="sort-btn">排序</button>

<script type="text/javascript">

/**
 * getData方法
 * 读取id为source的列表，获取其中城市名字及城市对应的空气质量
 * 返回一个数组，格式见函数中示例
 */
function getData() {
  /*
  coding here
  */

  /*
  data = [
    ["北京", 90],
    ["北京", 90]
    ……
  ]
  */

  return data;

}

/**
 * sortAqiData
 * 按空气质量对data进行从小到大的排序
 * 返回一个排序后的数组
 */
function sortAqiData(data) {

}

/**
 * render
 * 将排好序的城市及空气质量指数，输出显示到id位resort的列表中
 * 格式见ul中的注释的部分
 */
function render(data) {

}

function btnHandle() {
  var aqiData = getData();
  aqiData = sortAqiData(aqiData);
  render(aqiData);
}


function init() {

  // 在这下面给sort-btn绑定一个点击事件，点击时触发btnHandle函数

}

init();

</script>
</body>
</html>
```

##任务十六：零基础JavaScript编码（四）

###任务描述

* 参考以下示例代码，用户输入城市名称和空气质量指数后，点击“确认添加”按钮后，就会将用户的输入在进行验证后，添加到下面的表格中，新增一行进行显示
* 用户输入的城市名必须为中英文字符，空气质量指数必须为整数
* 用户输入的城市名字和空气质量指数需要进行前后去空格及空字符处理（trim）
* 用户输入不合规格时，需要给出提示（允许用alert，也可以自行定义提示方式）
* 用户可以点击表格列中的“删除”按钮，删掉那一行的数据

```
task.html

<!DOCTYPE>
<html>
  <head>
    <meta charset="utf-8">
    <title>IFE JavaScript Task 01</title>
    <script src="task.js"></script>
  </head>
<body>

  <div>
    <label>城市名称：<input id="aqi-city-input" type="text"></label><br>
    <label>空气质量指数：<input id="aqi-value-input" type="text"></label><br>
    <button id="add-btn">确认添加</button>
  </div>
  <table id="aqi-table">
  <!-- 
    <tr>
      <td>城市</td><td>空气质量</td><td>操作</td>
    </tr>
    <tr>
      <td>北京</td><td>90</td><td><button>删除</button></td>
    </tr>
    <tr>
      <td>北京</td><td>90</td><td><button>删除</button></td>
    </tr>
   -->
  </table>

</body>
</html>
task.js

/**
 * aqiData，存储用户输入的空气指数数据
 * 示例格式：
 * aqiData = {
 *    "北京": 90,
 *    "上海": 40
 * };
 */
var aqiData = {};

/**
 * 从用户输入中获取数据，向aqiData中增加一条数据
 * 然后渲染aqi-list列表，增加新增的数据
 */
function addAqiData() {

}

/**
 * 渲染aqi-table表格
 */
function renderAqiList() {

}

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle() {
  // do sth.

  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数

  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数

}

init();
```

##任务十八：基础JavaScript练习（一）

###任务描述

如图，模拟一个队列，队列的每个元素是一个数字，初始队列为空
有一个input输入框，以及4个操作按钮
点击"左侧入"，将input中输入的数字从左侧插入队列中；
点击"右侧入"，将input中输入的数字从右侧插入队列中；
点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值；
点击"右侧出"，读取并删除队列又侧第一个元素，并弹窗显示元素中数值；
点击队列中任何一个元素，则该元素会被从队列中删除





