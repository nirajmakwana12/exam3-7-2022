import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FoterICon from "../../assets/fotericon.png";
import FooterStyle from "./FooterStyle";

const Footer = () => {
  return (
    <FooterStyle>
      <Box className="BoxContainer">
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <img src={FoterICon} alt="ico" />
            <div
              style={{
                display: "flex",
                alignItems: "center",
                color: "white",
                textTransform: "capitalize",
              }}
            >
              <img
                src={require("../../assets/phone.png")}
                alt="phone"
                style={{ paddingRight: "10px" }}
              />
              <span>support: 1300 585 888</span>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="footerHeading">
              <span>POPULAR SUBURBS</span>
            </div>
            <div className="subHeading">
              <span>Castle Hill</span>
            </div>
            <div className="subHeading">
              <span>Kellyville</span>
            </div>
            <div className="subHeading">
              <span>Cherrybrook</span>
            </div>
            <div className="subHeading">
              <span>Baulkham Hills</span>
            </div>
            <div className="subHeading">
              <span>Pennant Hills</span>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="footerHeading">
              <span>PAGES</span>
            </div>
            <div className="subHeading">
              <span>About Us</span>
            </div>
            <div className="subHeading">
              <span>Shop Registration</span>
            </div>
            <div className="subHeading">
              <span>Shop &#38; Drive for Us</span>
            </div>
            <div className="subHeading">
              <span>Terms &#38; Conditions</span>
            </div>
          </Grid>
          <Grid item xs={3}>
            <div className="footerHeading">
              <span>KEEP IN TOUCH</span>
            </div>
            <div className="subHeading">
              <span>Contact Us</span>
            </div>
            <div className="subHeading">
              <span>Help Centre</span>
            </div>
            <div className="subHeading">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingTop: "20px",
                  width: "90px",
                }}
              >
                <img src={require("../../assets/facebook.png")} alt="face" />
                <img src={require("../../assets/instagram.png")} alt="face" />
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <hr style={{ background: "grey" }} />
      <Box className="BoxContainer">
        <span>
          {" "}
          <span>&#169;</span> Copyright - Shoprun {new Date().getFullYear()}
        </span>
      </Box>
    </FooterStyle>
  );
};

export default Footer;
