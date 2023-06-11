import { React, Component } from "react";
import "./HeaderStyle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class SplitText extends Component {
  render() {
    return (
      <span aria-label={this.props.copy} role={this.props.role}>
        {this.props.copy.split("").map(function (char, index) {
          let style = { "animation-delay": 0.5 + index / 10 + "s" };
          return (
            <span aria-hidden="true" key={index} style={style}>
              {char}
            </span>
          );
        })}
      </span>
    );
  }
}

function Header() {
  return (
    <h1>
      <SplitText copy="FIGURE THAT SPEECH!" role="heading" />
    </h1>
    // <div class="falling-letters">
    //   <span>H</span>
    //   <span>e</span>
    //   <span>l</span>
    //   <span>l</span>
    //   <span>o</span>
    //   <span> </span>
    //   <span>W</span>
    //   <span>o</span>
    //   <span>r</span>
    //   <span>l</span>
    //   <span>d</span>
    // </div>
  );
}

export default Header;
