import React from "react";
import downloadResume from "./resume3.pdf";
import resume1 from "./resume1.png";
import resume2 from "./resume2.png";

const styles = {
  img: {
    width: "450px",
    margin: "10px",
  },
};

export default function Resume() {
  return (
    <div>
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "25px" }}>
        Resume
      </h1>
      <div className="d-flex justify-content-center">
        <div className="my-3">
          <a href={downloadResume} download>
            <img src={resume1} style={styles.img} alt="Resume" />
            <img src={resume2} style={styles.img} alt="Resume part 2" />
          </a>
        </div>
      </div>
    </div>
  );
}
