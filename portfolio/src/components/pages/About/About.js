import React from "react";
import profile from "./profile.png";

const styles = {
  fontColor: {
    color: "#fff",
    textDecoration: "none"
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
            My name is Luka Licheli and I am currently a Massage Therapist
            looking for a start on a new chapter in my career. I recently
            graduated from San Diego City College with an Associate's in
            Business Administration. I also took a handful of Computer Science
            classes in San Diego State University, but decided a coding bootcamp
            was the right choice for me, as it is more saturated with relevant
            concepts and technology. With a certificate in Full Stack Web
            Development from UCSD, I am pursuing an entry level position as a
            Web Developer and plan to further advance my knowledge in the
            technologies listed below.
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
            Insomnia : Apollo Sandbox
          </p>
        </div>
      </div>
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
    </div>
  );
}
