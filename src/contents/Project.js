import React from "react";
import Thumbnail from "../components/Thumbnail";
import thumbnailpic1 from "../img/christmas2019.png";
import thumbnailpic2 from "../img/Buzzthumbnail.png";

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div className="condiv projects">
      <div>
        <Thumbnail
          link="https://www.harrietwang.com/visual-design-collection"
          image={thumbnailpic1}
          title="Visual Design Collection"
          category="UI Design"
        />

        <Thumbnail
          link="https://www.harrietwang.com/buzz"
          image={thumbnailpic2}
          title="Buzz Social"
          category="Product Design"
        />
      </div>
    </div>
  );
}

export default Projects;
