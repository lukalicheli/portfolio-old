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
              color: "white",
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
            extensive functionality. With my time at Revature, I have also
            developed my back-end skills, using Java, Spring, AWS, and
            PostgreSQL paired with DBeaver, to build APIs that can function both
            locally and on the web. Currently, I am learning Angular to further
            solidify my front-end skills.
          </p>
          <hr />
          <p
            className="card-text"
            style={{
              color: "white",
              textAlign: "center",
              fontSize: "large",
            }}
          >
            {" "}
            Javascript, Java 8/11, React, Angular, jQuery, MUI Library, Handlebars, HTML, CSS <br />
            Object Oriented Programming, MVC, RESTful API, Data Structures and Designs<br />
            SQL, MySQL, PostgresQL, GraphQL, MongoDB, Compass, Insomnia, DBeaver, AWS, DevOps<br />
            Spring, NodeJS, Express, Axios, Tomcat Server, HTTP Servlets, Apollo Server <br />
            Git, GitHub, GitLab, Bash/Shell, Terminal<br />
          </p>
        </div>
      </div>
      <footer
        className="text-center"
        style={{
          marginTop: "50px",
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
