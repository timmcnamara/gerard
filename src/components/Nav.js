import React from "react";

function Nav(props) {
  return (
    <header>
      <div>
        <h1>
          Do you re<span>MEME</span>ber?
        </h1>
        <span>Click an image to begin!</span>
      </div>
      <div>
        <h2>
          <span class="scoreTxt">
            Score:
            <span> {props.score}</span>
          </span>{" "}
          | Top Score: <span>{props.topScore}</span>
        </h2>
      </div>
    </header>
  );
}

export default Nav;
