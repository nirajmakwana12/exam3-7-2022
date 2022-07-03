import styled from "@emotion/styled";
import ShopsBg from "../../assets/shops.png";

const ShopsStyle = styled.div({
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
      "linear-gradient(0deg, rgba(0,0,0,0) 0%, rgba(35,35,35,0.6730042358740371) 100%)",
    height: "100%",
  },
  "& .BoxContainer": {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    padding: "20px 120px",
  },
  "& .MuiCardContent-root": {
    padding: "16px 16px",
  },
  "& .MuiCardActions-root": {
    padding: "10px 10px",
  },
  "& .MuiRating-icon": {
    color: "",
  },
  "& .deliveryIcon": {
    display: "flex",
    alignItems: "center",
    color: "black",
    boxShadow: "0px 5px 10px 0px #0706060F",
    padding: "4px 10px",
    borderRadius: "20px",
  },
});

export default ShopsStyle;
