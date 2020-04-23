import React, { Component } from "react";
import ReactTypingEffect from "react-typing-effect";
import profilepic from "../img/rainbow_photo.png";
import Social from "../components/Social";

class Home extends Component {
  render() {
    return (
      <div className="condiv home">
        <img src={profilepic} className="profilepic" alt="profilepicture" />
        <br />
        <ReactTypingEffect
          className="typingeffect"
          text={["Hi, I am Harriet..."]}
          speed={100}
          eraseDelay={700}
        />

        <Social />
      </div>
    );
  }
}
export default Home;
