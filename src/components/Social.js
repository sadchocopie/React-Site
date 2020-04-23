import React, { Component } from "react";
import { SocialIcon } from "react-social-icons";
class Social extends Component {
  render() {
    return (
      <div className="social">
        <SocialIcon className="icon" url="http://github.com/sadchocopie" />
        <SocialIcon className="icon" url="http://linkedin.com/in/harrietwang" />
        <SocialIcon className="icon" url="http://dribbble.com/harrietwang" />
      </div>
    );
  }
}
export default Social;
