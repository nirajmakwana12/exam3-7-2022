import { Box } from "@mui/system";
import { useKeenSlider } from "keen-slider/react";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { ViewItem, FILTER, AddToCart } from "../../redux/action";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import MinimizeIcon from "@mui/icons-material/Minimize";
import ProductDetailsStyle from "./ProductDetailsStyle";
import { Button } from "@mui/material";
import { ShopCard } from "../ShopDetails";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const ProductDetails = () => {
  const Dispatch = useDispatch();
  const [Number, setNumber] = useState(1);
  const [Data, setData] = useState("Information");
  const listData = useSelector((stateReducer) => stateReducer.Reducer);
  const localData = JSON.parse(localStorage.getItem("Filter"));
  const localView = JSON.parse(localStorage.getItem("View"));
  const loaction = useLocation();
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
  const [Cart, setCart] = useState(listData.cart);
  const btnClick = () => {
    setCart(Cart + 1);
    Dispatch(AddToCart(parseInt(Cart)));
  };
  const filterShow = listData.Store.filter((item) => item === loaction.state);

  const Navigate = useNavigate();
  const DetailsProdcut = (item) => {
    Navigate("/3", { state: item });
  };
  useEffect(() => {
    if (listData.Filter.length === 0 || listData.Filter === []) {
      Dispatch(FILTER(localData));
    }
    if (listData.View === {}) {
      Dispatch(ViewItem(localView));
    }
  }, []);
  const breadcrumbs = [
    <div
      style={{
        padding: "10px 0",
        cursor: "pointer",
      }}
    >
      <Link
        style={{ fontWeight: "900" }}
        underline="hover"
        key="1"
        color="inherit"
        href="/"
      >
        Home
      </Link>
    </div>,
    <div style={{ padding: "10px 0", cursor: "pointer" }}>
      <Link
        style={{ fontWeight: "900" }}
        underline="hover"
        key="2"
        color="inherit"
        href="/2"
      >
        {loaction.state.type === "vegi" ? "Vegetables" : "Frutis"}
      </Link>
    </div>,
    <Typography key="3" color="text.primary">
      {loaction.state.name}
    </Typography>,
  ];
  return (
    <ProductDetailsStyle>
      <Box style={{ padding: "0px 120px" }}>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb"
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Box>
      <Box className="BoxContainer">
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <div>
              <img
                src={loaction.state.photo}
                alt="d"
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </Grid>
          <Grid item xs={6}>
            <div>
              <h1>{loaction.state.name}</h1>
              <h4>
                Sold by: <span className="grenFOnt">Harris Farm Markets</span>{" "}
                <span>Status:</span>
                <span className="grenFOnt">In Stock</span>
              </h4>
              <h1>
                {loaction.state.price}
                <span style={{ fontSize: "12px", color: "grey" }}>/item</span>
              </h1>
              <div>
                <span>Quantity</span>
                <div style={{ display: "flex" }}>
                  <Button
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-evenly",
                      marginRight: "30px",
                      width: "100px",
                      color: "black",
                      border: "1px grey solid",
                      borderRadius: "20px",
                      padding: "0px 20px",
                    }}
                  >
                    <span style={{ fontSize: "18px" }}>-</span>
                    {Number}
                    <span style={{ fontSize: "18px" }}>+</span>
                  </Button>
                  <Button
                    onClick={btnClick}
                    style={{
                      width: "50%",
                      backgroundColor: "#43B028",
                      color: "white",
                      borderRadius: "20px",
                    }}
                  >
                    ADD TO CART
                  </Button>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Button>
                  <FavoriteBorderIcon style={{ color: "grey" }} />
                </Button>
                <span style={{ color: "grey" }}>Add to wishlist</span>
              </div>
              <div>
                <h5>
                  <span style={{ color: "grey" }}>Categories:</span>
                  {loaction.state.type === "vegi" ? "Vegetables" : "Frutis"}
                </h5>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Box className="BoxContainer" style={{ padding: "20px 120px" }}>
        <div className="btn">
          <Button
            style={{
              color: "white",
              background: Data === "Information" ? "#43B028" : "",
              color: Data === "Information" ? "white" : "#43B028",
              boxShadow: "0px 5px 10px 0px #0706060F",
            }}
            onClick={() => setData("Information")}
            fullWidth
          >
            Information
          </Button>
        </div>
        <div className="btn">
          <Button
            style={{
              color: "white",
              background: Data === "Ingredients" ? "#43B028" : "",
              color: Data === "Ingredients" ? "white" : "#43B028",
              boxShadow: "0px 5px 10px 0px #0706060F",
            }}
            onClick={() => setData("Ingredients")}
            fullWidth
          >
            Ingredients
          </Button>
        </div>
        <div className="btn">
          <Button
            style={{
              color: "white",
              background: Data === "Directions" ? "#43B028" : "",
              color: Data === "Directions" ? "white" : "#43B028",
              boxShadow: "0px 5px 10px 0px #0706060F",
            }}
            onClick={() => setData("Directions")}
            fullWidth
          >
            Directions
          </Button>
        </div>
      </Box>
      <Box
        className="BoxContainer"
        style={{ padding: "20px 120px", justifyContent: "center" }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "10px 300px",
          }}
        >
          <p>
            Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
            Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
            ullamcorper ultricies nisi. Nam eget dui.{" "}
          </p>
        </div>
      </Box>
      <Box className="BoxContainertwo">
        <h1>Related Products</h1>
      </Box>
      <Box className="BoxContainer">
        <div ref={sliderRef} className="keen-slider">
          {listData.Filter.map((item) => (
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
          ))}
        </div>
      </Box>
    </ProductDetailsStyle>
  );
};

export default ProductDetails;
