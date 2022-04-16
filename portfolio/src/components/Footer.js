import * as React from "react";

const styles = {
  fontColor: {
    color: "#fff",
    textDecoration: "none"
  },
};

export default function Footer() {
    return (
  <footer className="text-center" style={{position: "fixed", left: 0,
  bottom: 0,
  width: "100%",
  color: "lightgrey",
  textAlign: "center", 
  fontSize: 25}}>
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
    );
}
