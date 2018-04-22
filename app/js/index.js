import "../css/index.css";

import mount from "./mount";
import LikeButton from "./LikeButton";

mount(new LikeButton({ bgColor: "red" }), document.getElementById("root"));
