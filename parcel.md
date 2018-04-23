* 如果你安装了 yarn

```
yarn global add parcel-bundler
```

* npm

```
npm install -g parcel-bundler
```

* 检查是否安装成功

```
parcel --version
```

* 确保全局安装成功后，接下来写几行代码就可以直接测试打包了

> createDOMFromString.js
```javascript
const createDOMFromString = domString => {
  const div = document.createElement("div");
  div.innerHTML = domString;
  return div;
};

export default createDOMFromString;
```

> component.js

```javascript
import createDOMFromString from "./createDOMFromString";

class Component {
  constructor(props = {}) {
    this.props = props;
  }

  setState(state) {
    const oldEl = this.el;
    this.state = state;
    this._renderDOM();
    if (this.onStateChange) this.onStateChange(oldEl, this.el);
  }

  _renderDOM() {
    this.el = createDOMFromString(this.render());
    if (this.onClick) {
      this.el.addEventListener("click", this.onClick.bind(this), false);
    }
    return this.el;
  }
}

export default Component;

```

> mount.js
```javascript
const mount = (component, wrapper) => {
  wrapper.appendChild(component._renderDOM());
  component.onStateChange = (oldEl, newEl) => {
    wrapper.insertBefore(newEl, oldEl);
    wrapper.removeChild(oldEl);
  };
};

export default mount;

```

> 组件 LikeButton.js

```javascript
import Component from "./component";

class LikeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

  onClick() {
    this.setState({ isLiked: !this.state.isLiked });
  }

  render() {
    return `
      <button class='like-btn' style="background-color: ${this.props.bgColor}">
        <span class='like-text'>
          ${this.state.isLiked ? "取消" : "点赞"}
        </span>
        <span class="like-icon">👍</span>
      </button>
    `;
  }
}

export default LikeButton;

```

> 入口 index.js

```javascript
import mount from "./mount";
import LikeButton from "./LikeButton";

mount(new LikeButton({ bgColor: "red" }), document.getElementById("root"));

```

> index.html
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Component</title>
</head>
<body>
  <div id="root" class="root"></div>

  <script src="./index.js"></script>
</body>
</html>
```

> 现在，就可以使用 parcel index.html 命令 启动应用了,然后打开浏览器，localhost:1234 就可以看到效果了， 默认端口是1234，启动的时候可以使用 parcel index.html -p 3000 的方式修改端口，

>可以看到，至始至终，我还没有写过一行打包应用的配置，感觉还是爽歪歪的。 可以看到，打包后dist文件夹是和执行 parcel 命令所在文件夹是同级的。

> end...



