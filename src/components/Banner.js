import React from "react";
let image = require("../images/meme-bg.jpg");
let image2 = require("../images/meme-duck.png");
let image3 = require("../images/success.png");

let style = {
  banner: {
    backgroundImage: `url(${image}), url(${image2})`,
    backgroundSize: "460px, 150px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left 20px bottom, right -1px bottom -1px",
    backgroundColor: "#65879d"
  }
};

function Banner(props) {
  return (
    <div className="banner" style={style.banner}>
      <p>{props.text}</p>
      <img
        src={image3}
        class={props.topScore ? "success moveIn" : "success"}
        alt="success baby meme"
      />
    </div>
  );
}

export default Banner;
