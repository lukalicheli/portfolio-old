import React from "react";
import downloadResume from "./resume3.pdf";
import resume1 from "./resume1.png";
import resume2 from "./resume2.png";
import resume3 from "./resume3.png";

const styles = {
  img: {
    width: "450px",
    margin: "10px",
  },
  fontColor: {
    color: "#fff",
    textDecoration: "none",
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
            
            <img src={resume3} style={styles.img} alt="Resume part 2" />
          </a>
        </div>
      </div>
      <footer
        className="text-center"
        style={{
          marginTop: "20px",
          width: "100%",
          color: "lightgrey",
          textAlign: "center",
          fontSize: 25,
        }}
      >
        <a style={styles.fontColor} href="mailto: lukalicheli@gmail.com">
          lukalicheli@gmail.com
        </a>{" "}
        |{" "}
        <a style={styles.fontColor} href="tel:732-586-4369">
          732.586.4369
        </a>{" "}
        |{" "}
        <a style={styles.fontColor} href="https://github.com/lukalicheli">
          Github
        </a>{" "}
        |{" "}
        <a
          style={styles.fontColor}
          href="https://www.linkedin.com/in/lukalicheli/"
        >
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
