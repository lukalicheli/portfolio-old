import React from "react";
import happyhour from "./happyhour.png";
import notetaker from "./notetaker.png";
import planner from "./WorkDayPlanner.gif";
import text from "./text-editor.png";
import text2 from "./text-editor2.png";
import password from "./password-generator.png";
import ers from "./ers-app.png";

import { Button } from "react-bootstrap";

const styles = {
  shadow: {
    boxShadow: "0px 0px 30px aqua",
    color: "white",
  },
  width: {
    width: "300px",
  },
  fontColor: {
    color: "#fff",
    textDecoration: "none",
  },
};

export default function Portfolio() {
  return (
    <div className="row d-flex justify-content-center mx-0">
      <h1 style={{ color: "white", textAlign: "center", marginBottom: "40px" }}>
        Portfolio
      </h1>

      {/* Happy Hour */}
      <div className="col-sm-4 shadow p-2 mx-1 bg-transparent rounded mt-1">
        <div className="bg-transparent" style={styles.shadow}>
          <a href="https://desolate-earth-02940.herokuapp.com/">
            <img src={happyhour} alt="happyhour" className="card-img-top" />
          </a>
          <div className="card-body">
            <p className="card-text">
              A happy hour finder application that lets users to login and persist their favorite deals. Also has the functionality to add and delete reviews.
            </p>
            <hr />
            <p className="text-center">
              Javascript | React | MongoDB | GraphQL | NodeJS
            </p>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="outline-dark"
                className="d-block mb-2"
                href="https://desolate-earth-02940.herokuapp.com/"
                target="_blank"
              >
                DEMO
              </Button>
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "aqua",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="outline-dark"
                className="d-block mb-2"
                href="https://github.com/lukalicheli/Happy-Hour"
              >
                REPO
              </Button>
            </div>
          </div>
        </div>
      </div>

       {/* ERS Application */}
       <div className="col-sm-4 shadow p-2 mx-1 bg-transparent rounded mt-1">
        <div className="bg-transparent" style={styles.shadow}>
          <a href="https://lukalicheli.github.io/password-generator/">
            <img
              src={ers}
              alt="ERS Application"
              className="card-img-top"
            />
          </a>
          <div className="card-body">
            <p className="card-text">
              An expense reimbursement application that employers can use to
              keep track of users and reimbursements. Has user login
              functionality as well as CRUD operations for users and
              reimbursements.
            </p>
            <hr />
            <p className="text-center">Java | Spring | Angular</p>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="outline-dark"
                className="d-block mb-2"
                href="https://github.com/lukalicheli/reimbursement-api"
              >
                API
              </Button>
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "aqua",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="outline-dark"
                className="d-block mb-2"
                href="https://github.com/lukalicheli/reimbursement-frontend"
              >
                UI
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Text Editor */}
      <div className="col-sm-4 shadow p-2 mx-1 bg-transparent rounded mt-1">
        <div className="bg-transparent" style={styles.shadow}>
          <a href="https://hybrid-text-editor.herokuapp.com/">
            <img src={text2} alt="text" className="card-img-top" />
          </a>
          <div className="card-body">
            <p className="card-text">
              A simple text editor that you can download to your desktop to use
              offline.
            </p>
            <hr />
            <p className="text-center">
              NodeJS | Express | Babel | Webpack | Workbox
            </p>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="outline-dark"
                className="d-block mb-2"
                href="https://hybrid-text-editor.herokuapp.com/"
              >
                DEMO
              </Button>
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "aqua",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="outline-dark"
                className="d-block mb-2"
                href="https://github.com/lukalicheli/Text-Editor"
              >
                REPO
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Work Day Scheduler */}
      <div className="col-sm-4 shadow p-2 mx-1 bg-transparent rounded mt-1">
        <div className="bg-transparent" style={styles.shadow}>
          <a href="https://lukalicheli.github.io/work-day-planner/">
            <img src={planner} alt="planner" className="card-img-top" />
          </a>
          <div className="card-body">
            <p className="card-text">
              A single day planning app that lets you save hourly reminders.
              Tabs colored according to hour.
            </p>
            <hr />
            <p className="text-center">HTML | CSS | Javascript | jQuery </p>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="outline-dark"
                className="d-block mb-2"
                href="https://lukalicheli.github.io/work-day-planner/"
                target="_blank"
              >
                DEMO
              </Button>
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "aqua",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="outline-dark"
                className="d-block mb-2"
                href="https://github.com/lukalicheli/work-day-planner"
              >
                REPO
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Note Taker
      <div className="col-sm-3 shadow p-2 mx-3 bg-transparent rounded mt-1">
        <div className="bg-transparent" style={styles.shadow}>
          <a href="https://note-taker-619.herokuapp.com/notes">
            <img src={notetaker} alt="notetaker" className="card-img-top" />
          </a>
          <div className="card-body">
            <p className="card-text">
              Note Taker is a simple app that allows users to save notes online
              and saves to local storage for the ability to use it offline.
            </p>
            <hr />
            <p className="text-center">
              Javascript | NodeJS | Express | Uniqid | Bootstrap
            </p>

            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "orange",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="outline-dark"
                className="d-block mb-2"
                href="https://note-taker-619.herokuapp.com/notes"
                target="_blank"
              >
                DEMO
              </Button>
              <Button
                style={{
                  width: "40%",
                  backgroundColor: "aqua",
                  color: "black",
                  fontWeight: "bold",
                }}
                variant="outline-dark"
                className="d-block mb-2"
                href="https://github.com/lukalicheli/note-taker"
              >
                REPO
              </Button>
            </div>
          </div>
        </div>
      </div> */}

     

      


      <footer
        className="text-center"
        style={{
          marginTop: "40px",
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
