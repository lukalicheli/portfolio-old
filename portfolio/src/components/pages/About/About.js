import React from "react";
import profile from "./profile.png";

const styles = {
  fontColor: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default function About() {
  return (
    <div className="container-fluid d-flex justify-content-center .ms-1 .me-1 row">
      <img
        src={profile}
        className=" card border-transparent mb-3 bg-transparent col-sm-8 mt-2 rounded img-thumbnail "
        style={{
          height: "320px",
          width: "auto",
          borderRadius: "10%",
          marginLeft: "75px",
          marginRight: "35px",
          marginBottom: "60px",
          border: "transparent",
        }}
        alt="Profile"
      />

      <div
        style={{ display: "flex", flexWrap: "wrap", border: "transparent" }}
        className="card mb-3 bg-transparent col-sm-8 mt-2 rounded bg-transparent"
      >
        <div className="card-body">
          <br></br>
          <p
            className="card-text"
            style={{
              color: "lightgrey",
              fontSize: "large",
              padding: "10px",
              textAlign: "center",
            }}
          >
            I am a Full Stack Web Developer that is collaborative, but also a
            strong, independent, problem solver. Having used React paired with
            Material-UI Library, I have experience developing an intuitive user
            interface. I utilized reusable components and virtual DOM to give
            the app a mobile feel and used MongoDB and GraphQL to give it
            extensive functionality. Documentation is my best friend, along with
            having relentless tenacity with debugging errors in order to create
            a smooth performing and robust application.
          </p>
          <hr />
          <p
            className="card-text"
            style={{
              color: "lightgrey",
              textAlign: "center",
              fontSize: "large",
            }}
          >
            {" "}
            HTML : CSS : JavaScript : React : Express : NodeJs <br /> Sequelize
            : MySQL : NoSQL : MongoDB : Mongoose : <br />
            Insomnia : Apollo Sandbox : WebPack
          </p>
        </div>
      </div>
      <footer
        className="text-center"
        style={{
          marginTop: "30px",
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
