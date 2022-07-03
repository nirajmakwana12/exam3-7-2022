import styled from "@emotion/styled";
import ShopsBg from "../../assets/shops2.png";

const ShopsDetailsStyle = styled.div({
  "& .bgHeading": {
    background: `url(${ShopsBg})`,
    backgroundSize: "cover",
    position: "relative",
  },
  ".grey": {
    padding: "200px 0",
    display: "flex",
    justifyContent: "center",
    position: "relative",
    background:
      "linear-gradient(0deg, rgba(8,105,84,0.9251050762101716) 100%, rgba(41,41,41,0.7654412106639531) 100%)",
    height: "100%",
  },
  "& .MuiRating-icon": {
    color: "white",
  },
  "& .BoxContainer": {
    display: "flex",
    overflowX: "hidden",
    // justifyContent: "center",
    padding: "20px 120px",
    background:
      "linear-gradient(90deg, rgba(253,255,254,0.5805672610841212) 82%, rgba(253,255,254,1) 100%)",
  },
});

export default ShopsDetailsStyle;
