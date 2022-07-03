import { Box } from "@mui/material";
import React, { useState } from "react";
import ShopsStyle from "./ShopsStyle";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useNavigate } from "react-router-dom";

const BoxContainer = ({ title, Select, onC }) => {
  return (
    <Box
      onClick={onC}
      sx={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        cursor: "pointer",
        "& > :not(style)": {
          m: 1,
          width: 140,
          height: 80,
        },
      }}
    >
      <Paper
        elevation={2}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          fontSize: "14px",
          padding: "0 10px",
          color: Select ? "white" : "",
          background: Select
            ? "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(122,185,42,1) 1%, rgba(67,177,40,1) 96%, rgba(66,177,41,1) 99%)"
            : "",
        }}
      >
        {title}
      </Paper>
    </Box>
  );
};

const dataTags = [
  "All",
  "Asian",
  `Beer, Wine 
& Spirit`,
  "Beverages",
  `Breads 
  & Bakery`,
  `Dairy & Eggs`,
  `Deli`,
  `Frozen`,
  `Fruits`,
  `Gifts 
  & Flowers`,
  `Health`,
  `Meats`,
  `Pantry`,
  `Pasta, Rice
  & Grains`,
  `Seefood`,
  `Vegetables`,
];

const ShopsData = [
  {
    photo: require("../../assets/shops bg/1.png"),
    shopName: "Chemist Warehouse",
    location: "Castle Hill, NSW AU 2154",
    rating: "56 reviews",
    ShowItem: "VIEW ALL 134 ITEMS",
  },
  {
    photo: require("../../assets/shops bg/2.png"),
    shopName: "Chemist Warehouse",
    location: "Castle Hill, NSW AU 2154",
    rating: "56 reviews",
    ShowItem: "VIEW ALL 134 ITEMS",
  },
  {
    photo: require("../../assets/shops bg/3.png"),
    shopName: "Chemist Warehouse",
    location: "Castle Hill, NSW AU 2154",
    rating: "56 reviews",
    ShowItem: "VIEW ALL 134 ITEMS",
  },
  {
    photo: require("../../assets/shops bg/4.png"),
    shopName: "Chemist Warehouse",
    location: "Castle Hill, NSW AU 2154",
    rating: "56 reviews",
    ShowItem: "VIEW ALL 134 ITEMS",
  },
  {
    photo: require("../../assets/shops bg/5.png"),
    shopName: "Chemist Warehouse",
    location: "Castle Hill, NSW AU 2154",
    rating: "56 reviews",
    ShowItem: "VIEW ALL 134 ITEMS",
  },
  {
    photo: require("../../assets/shops bg/6.png"),
    shopName: "Chemist Warehouse",
    location: "Castle Hill, NSW AU 2154",
    rating: "56 reviews",
    ShowItem: "VIEW ALL 134 ITEMS",
  },
  {
    photo: require("../../assets/shops bg/7.png"),
    shopName: "Chemist Warehouse",
    location: "Castle Hill, NSW AU 2154",
    rating: "56 reviews",
    ShowItem: "VIEW ALL 134 ITEMS",
  },
  {
    photo: require("../../assets/shops bg/8.png"),
    shopName: "Chemist Warehouse",
    location: "Castle Hill, NSW AU 2154",
    rating: "56 reviews",
    ShowItem: "VIEW ALL 134 ITEMS",
  },
];

export const ShopCard = ({ photo, shopName, location, rating, ShowItem }) => {
  const Navigate = useNavigate();
  return (
    <Box style={{ padding: "20px 6px" }}>
      <Card sx={{ maxWidth: 300 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="240"
          image={photo}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="p"
            style={{ fontWeight: "600" }}
            component="div"
          >
            {shopName}
          </Typography>
          <Typography
            variant="body2"
            style={{
              display: "flex",
              alignItems: "center",
              paddingTop: "10px",
              paddingBottom: "10px",
              fontWeight: "600",
            }}
            color="text.secondary"
          >
            <img
              style={{ paddingRight: "5px" }}
              src={require("../../assets/map.png")}
              alt="map"
              height="16px"
            />
            {location}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            style={{ display: "flex", alignItems: "center" }}
          >
            <Rating
              name="half-rating"
              defaultValue={3}
              style={{ paddingRight: "6px" }}
              precision={1}
            />{" "}
            {rating}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => Navigate("/2")}
            style={{
              borderRadius: "20px",
              backgroundColor: "#43B028",
            }}
            variant="contained"
            fullWidth
          >
            {ShowItem}
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

const Shops = () => {
  const [first, setfirst] = useState(1);
  return (
    <ShopsStyle>
      <Box className="bgHeading">
        <Box className="grey">
          <div
            style={{
              position: "absolute",
              display: "flex",
              justifyContent: "center",
              top: "20px",
            }}
          >
            <div>
              <div style={{ textAlign: "center", color: "white" }}>
                <h1 style={{ margin: "0" }}>Shop from your favourite</h1>
                <h1 style={{ margin: "0" }}>grocery stores!</h1>
              </div>
              <div
                style={{
                  paddingTop: "40px",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    borderRadius: "30px",
                    background: "white",
                  }}
                >
                  <InputBase
                    style={{ padding: "6px 0px" }}
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="I am shopping for..."
                    inputProps={{ "aria-label": "search google maps" }}
                  />
                  <div
                    style={{
                      backgroundColor: "#43B028",
                      display: "flex",
                      alignItems: "center",
                      borderRadius: "0px 30px 30px 0px",
                    }}
                  >
                    <button
                      style={{
                        outline: "none",
                        border: "none",
                        textAlign: "center",
                        color: "white",
                        backgroundColor: "transparent",
                      }}
                    >
                      <span>SEARCH</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Box>
      <Box className="BoxContainer">
        {dataTags.map((item, index) => (
          <BoxContainer
            onC={() => setfirst(index)}
            title={item}
            Select={index === first}
          />
        ))}
      </Box>
      <Box>
        <div style={{ padding: "0 120px", margin: "0", color: "#43B028" }}>
          <h1 style={{ margin: "0 0 0 4px" }}>16 Shops Found</h1>
        </div>
        <Box className="BoxContainer">
          {ShopsData.map((item) => {
            return (
              <ShopCard
                photo={item.photo}
                shopName={item.shopName}
                location={item.location}
                rating={item.rating}
                ShowItem={item.ShowItem}
              />
            );
          })}
        </Box>
      </Box>
      <Box className="BoxContainer">
        <div style={{ display: "flex", padding: "20px 0" }}>
          <Button
            size="small"
            shape
            variant="text"
            className="deliveryIcon"
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
          <Pagination
            count={2}
            renderItem={(item) => (
              <PaginationItem
                components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
          <Button
            size="small"
            shape
            variant="text"
            className="deliveryIcon"
            endIcon={<ArrowForwardIosIcon />}
          >
            Next
          </Button>
        </div>
      </Box>
    </ShopsStyle>
  );
};

export default Shops;
