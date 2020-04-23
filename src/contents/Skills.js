import React, { Component } from "react";
class Skills extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myskills: ["HTML", "CSS", "JS", "PHP", "REACT JS", "FIREBASE", "MIT APP"]
    };
  }
  render() {
    return (
      <div className="condiv skills">
        <h1 className="subtopic">My Skills</h1>
        <ul>
          {this.state.myskills.map(function(value, i) {
            return <li key={i}>{value}</li>;
          })}
          ;
        </ul>
      </div>
    );
  }
}
export default Skills;
