import { Box } from "@mui/system";
import InputBase from "@mui/material/InputBase";
import React, { useState } from "react";
import ShopsDetailsStyle from "./ShopsDetailsStyle";
import Rating from "@mui/material/Rating";
import Paper from "@mui/material/Paper";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import ListIcon from "@mui/icons-material/List";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { ViewItem, FILTER, AddToCart as Add } from "../../redux/action";

const dataTags = [
  { tag: "All", photo: require("../../assets/Page1.png") },
  { tag: "Fruits", photo: require("../../assets/Page1.png") },
  { tag: "Vegetables", photo: require("../../assets/Page1.png") },
];

const BoxContainer = ({ title, Select, onC, Photo }) => {
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
          height: 60,
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
            : "lightgrey",
        }}
      >
        <img
          height="30px"
          style={{ paddingRight: "10px" }}
          src={Photo}
          alt={title}
        />{" "}
        <h5>{title}</h5>
      </Paper>
    </Box>
  );
};

export const ShopCard = ({
  photo,
  shopName,
  price,
  rating,
  Details,
  priceSub,
  AddToCart,
}) => {
  const Navigate = useNavigate();
  const Dispatch = useDispatch();
  return (
    <Box style={{ padding: "20px 6px" }}>
      <Card sx={{ maxWidth: 220, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            padding: "10px",
          }}
        >
          <IconButton
            aria-label="delete"
            style={{ background: "white" }}
            onClick={Details}
          >
            <ListIcon />
          </IconButton>
          <IconButton aria-label="delete">
            <FavoriteBorderIcon />
          </IconButton>
        </div>
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
            style={{
              fontWeight: "600",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
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
            {price}
            {priceSub}
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
            onClick={AddToCart}
            style={{
              borderRadius: "20px",
              backgroundColor: "#43B028",
            }}
            variant="contained"
            fullWidth
          >
            Add To Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

const ShopDetails = () => {
  const [first, setfirst] = useState(0);
  const [Cart, setCart] = useState(1);
  const list = useSelector((stateReducer) => stateReducer.Reducer.Store);
  const listData = useSelector((stateReducer) => stateReducer.Reducer);
  const Dispatch = useDispatch();
  console.log(listData, "lisths");
  const Navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef] = useKeenSlider(
    {
      initial: currentSlide,
      loop: true,
      slides: {
        perView: 5,
        spacing: 15,
      },
    },
    [
      (slider) => {
        let timeout;
        let mouseOver = false;
        function clearNextTimeout() {
          clearTimeout(timeout);
        }
        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }
        slider.on("created", () => {
          slider?.container?.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider?.container?.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });
        slider?.on("dragStarted", clearNextTimeout);
        slider?.on("animationEnded", nextTimeout);
        slider?.on("updated", nextTimeout);
      },
    ]
  );

  const DetailsProdcut = (item) => {
    Dispatch(ViewItem(item));
    const listData = list.filter((data) => item.type === data.type);
    Dispatch(FILTER(listData));
    Navigate("/3", { state: item });
    localStorage.setItem("Filter", JSON.stringify(listData));
    localStorage.setItem("View", JSON.stringify(item));
  };
  const btnClick = () => {
    setCart(Cart + 1);
    Dispatch(Add(Cart));
  };
  return (
    <ShopsDetailsStyle>
      <Box className="bgHeading">
        <Box className="grey">
          <div
            style={{
              position: "absolute",
              display: "flex",
              top: "20px",
            }}
          >
            <div style={{ width: "100%" }}>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <img src={require("../../assets/LOGO.png")} alt="log" />
              </div>
              <div style={{ textAlign: "center", color: "white" }}>
                <h1 style={{ margin: "0" }}>Harris Farm Markets</h1>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "20px 0",
                }}
              >
                <Rating
                  name="size-large"
                  style={{ color: "white", paddingRight: "10px" }}
                  defaultValue={0}
                  size="large"
                />
                <span style={{ color: "white" }}>No rating found yet</span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "0 20px",
                }}
              >
                <Button
                  style={{
                    borderRadius: "30px",
                    color: "white",
                    borderColor: "white",
                  }}
                  variant="outlined"
                >
                  More Info
                </Button>
                <Button
                  style={{
                    borderRadius: "30px",
                    color: "white",
                    borderColor: "white",
                  }}
                  variant="outlined"
                >
                  Give a review
                </Button>
              </div>
              <div
                style={{
                  paddingTop: "40px",
                  display: "flex",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    borderRadius: "30px",
                    width: "100%",
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
      <Box className="BoxContainer" style={{ justifyContent: "center" }}>
        {dataTags.map((item, index) => (
          <BoxContainer
            onC={() => setfirst(index)}
            title={item.tag}
            Photo={item.photo}
            Select={index === first}
          />
        ))}
      </Box>
      <div>
        <div style={{ padding: "0px 120px 0 120px" }}>
          <div style={{ padding: "0 0 0 0px" }}>
            <h1 style={{ margin: "0", fontWeight: "700" }}>Fruits</h1>
            <div
              style={{
                backgroundColor: "#43B028",
                height: "5px",
                width: "90px",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
        <Box className="BoxContainer">
          <div ref={sliderRef} className="keen-slider">
            {list
              .filter((items) => items.type === "frutis")
              .map((item) => {
                return (
                  <div className="keen-slider__slide number-slide1">
                    <ShopCard
                      Details={() => DetailsProdcut(item)}
                      price={item.price}
                      photo={item.photo}
                      priceSub={item.convert}
                      shopName={item.name}
                    />
                  </div>
                );
              })}
          </div>
        </Box>
        <div style={{ padding: "0px 120px 0 120px" }}>
          <div style={{ padding: "0 0 0 0px" }}>
            <h1 style={{ margin: "0", fontWeight: "700" }}>Vegetables</h1>
            <div
              style={{
                backgroundColor: "#43B028",
                height: "5px",
                width: "90px",
                borderRadius: "20px",
              }}
            />
          </div>
        </div>
        <Box className="BoxContainer">
          <div ref={sliderRef} className="keen-slider">
            {list
              .filter((items) => items.type === "vegi")
              .map((item) => {
                return (
                  <div className="keen-slider__slide number-slide1">
                    <ShopCard
                      price={item.price}
                      Details={() => DetailsProdcut(item)}
                      photo={item.photo}
                      priceSub={item.convert}
                      shopName={item.name}
                      AddToCart={btnClick}
                    />
                  </div>
                );
              })}
          </div>
        </Box>
      </div>
    </ShopsDetailsStyle>
  );
};

export default ShopDetails;
