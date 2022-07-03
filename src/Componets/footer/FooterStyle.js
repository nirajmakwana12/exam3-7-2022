import styled from "@emotion/styled";

const FooterStyle = styled.div({
  backgroundColor: "#16161A",
  padding: "20px 0",
  "& .BoxContainer": {
    display: "flex",
    justifyContent: "space-around",
    padding: "20px 120px",
    flexWrap: "wrap",
  },
  "& .footerHeading": {
    fontWeight: "600",
    paddingBottom: "15px",
  },
  "& .subHeading": {
    paddingBottom: "10px",
  },
  span: {
    color: "white",
  },
});

export default FooterStyle;
