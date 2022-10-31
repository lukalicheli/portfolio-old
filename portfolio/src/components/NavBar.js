import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import PersonIcon from "@mui/icons-material/Person";
import ConstructionIcon from "@mui/icons-material/Construction";
import DvrIcon from "@mui/icons-material/Dvr";

export default function NavBar({ currentPage, handlePageChange }) {
  const [value, setValue] = React.useState(0);

  return (
      <div style={{display: "flex", backgroundImage: "linear-gradient(rgba(0,0,0,.3) ,rgba(0,0,0,.5))", justifyContent: "space-around", flexWrap: "wrap", marginBottom: "50px", paddingBottom: "20px"}}>
          
    <div style={{display: "flex"}}>
    <h1 style={{display: "flex", marginTop: "20px", marginLeft: "40px", color: "white", fontSize: 55, color: "lightgrey" }}>Luka Licheli</h1>
    </div>
    <div>
      <BottomNavigation
        sx={{ backgroundColor: "transparent", marginTop: "35px", marginRight: "20px", display: "flex" }}
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          sx={{ color: "lightgrey", marginRight: "10px"}}
          label="About"
          href="#about"
          icon={<PersonIcon sx={{fontSize: 40}} />}
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link "}
        />
        <BottomNavigationAction
          sx={{ color: "lightgrey", marginRight: "20px" }}
          label="Portfolio"
          to="/portfolio"
          icon={<ConstructionIcon sx={{fontSize: 40}} />}
          href="#portfolio"
          onClick={() => handlePageChange("Portfolio")}
          className={
            currentPage === "Portfolio" ? "nav-link active" : "nav-link"
          }
        />
        <BottomNavigationAction
          sx={{ color: "lightgrey", marginRight: "20px" }}
          label="Resume"
          to="/resume"
          icon={<DvrIcon sx={{fontSize: 40}} />}
          href="#resume"
          onClick={() => handlePageChange("Resume")}
          className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
        />
      </BottomNavigation>
      </div>
    </div>
  );
}
