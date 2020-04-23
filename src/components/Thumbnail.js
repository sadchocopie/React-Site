import React from "react"; // Import the Component component from React
import { Link } from "react-router-dom"; // Import the Link component

function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link}>
        <div className="project-image">
          <img
            src={props.image}
            alt="project thumbnail"
            style={{ width: "400px" }}
          />
        </div>
        <div className="project-title">{props.title}</div>
      </Link>
      <div className="project-category">{props.category}</div>
    </div>
  );
}

export default Thumbnail;
