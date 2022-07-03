import styled from "@emotion/styled";

const NavBarStyle = styled.div({
  padding: "0 10px",
  display: "flex",
  zIndex: 5,
  position: "fixed",
  justifyContent: "center",
  "& .smallIcon": {
    height: "15px",
    padding: "0 5px",
  },
  "& .icon": {
    color: "black",
  },
  "& .toolbar": {
    display: "flex",
    justifyContent: "space-evenly",
  },
  "& .deliveryIcon": {
    display: "flex",
    alignItems: "center",
    color: "black",
    boxShadow: "0px 5px 10px 0px #0706060F",
    padding: "4px 10px",
    borderRadius: "20px",
  },
  "& .DeliverASAP": {
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "black",
  },
  "& .number": {
    position: "relative",
  },
});

export default NavBarStyle;
