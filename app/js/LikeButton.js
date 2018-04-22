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
    // console.log(this.props);
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
