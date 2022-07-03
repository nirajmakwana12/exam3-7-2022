import React, { useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import { useSelector, useDispatch } from "react-redux";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import Button from "@mui/material/Button";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import NavBarStyle from "./NavBarStye";
import ShopRun from "../../assets/shoprun.png";
import Vector from "../../assets/Vectorarro.png";
import VectorLiine from "../../assets/Vector.png";
import Clock from "../../assets/clock.png";
import Down from "../../assets/down.png";
import Shop from "../../assets/shop.png";
import User from "../../assets/user.png";
import Bag from "../../assets/bag.png";
import Fav from "../../assets/fav.png";

const drawerWidth = 240;

const FavIcon = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // backgroundImage: `url(${Vector})`,
        marginBottom: "10px",
        width: "10px",
      }}
    >
      {/* <img src={VectorLiine} alt="hello" style={{ position: "absolute" }} /> */}
      <img src={Fav} height="26px" alt="hello" />
    </div>
  );
};
const BagIcon = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        width: "10px",
        // backgroundImage: `url(${Vector})`,
      }}
    >
      <img src={Bag} height="20px" alt="hello" />
      {/* <img src={VectorLiine} alt="hello" style={{ position: "absolute" }} /> */}
    </div>
  );
};
const VectorIcon = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // backgroundImage: `url(${Vector})`,
      }}
    >
      {/* <img src={VectorLiine} alt="hello" style={{ position: "absolute" }} /> */}
      <img src={Vector} className="smallIcon  " alt="hello" />
    </div>
  );
};
const ShopIcon = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // backgroundImage: `url(${Vector})`,
      }}
    >
      {/* <img src={VectorLiine} alt="hello" style={{ position: "absolute" }} /> */}
      <img src={Shop} className="smallIcon" alt="hello" />
    </div>
  );
};
const UserIcon = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        // backgroundImage: `url(${Vector})`,
      }}
    >
      {/* <img src={VectorLiine} alt="hello" style={{ position: "absolute" }} /> */}
      <img src={User} className="smallIcon" alt="hello" />
    </div>
  );
};

const AppBar = styled(MuiAppBar, {
  //   shouldForwardProp: (prop) => prop !== "open",
})(() => ({
  boxShadow: "none",
  padding: "2px 120px",
  backgroundColor: "white",
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const Navbar = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const list = useSelector((stateReducer) => stateReducer.Reducer);
  console.log(list);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <NavBarStyle>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar className="toolbar">
            <IconButton
              className="icon"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>
            <div>
              <img src={ShopRun} alt="ShopRun" />
            </div>
            <Button
              size="small"
              shape
              variant="text"
              className="deliveryIcon"
              startIcon={<VectorIcon />}
            >
              Delivery Address / Post Code
            </Button>
            <Button size="small" shape variant="text" className="DeliverASAP">
              <img src={Clock} className="smallIcon" alt="clock" />
              <span style={{ color: "black" }}>Deliver ASAP</span>
              <img src={Down} alt="down" style={{ marginLeft: "10px" }} />
            </Button>
            <Button
              size="small"
              shape
              variant="text"
              className="DeliverASAP"
              startIcon={<ShopIcon />}
            >
              Shops
            </Button>
            <Button
              size="small"
              shape
              variant="text"
              className="DeliverASAP"
              startIcon={<UserIcon />}
            >
              Sign in
            </Button>
            <Button
              size="small"
              shape
              variant="text"
              className="DeliverASAP"
              startIcon={<UserIcon />}
            >
              Sign in
            </Button>
            <div className="DeliverASAP" style={{ width: 60 }}>
              <div style={{ position: "relative" }}>
                <FavIcon />
              </div>
              <div style={{ position: "relative" }}>
                <span
                  style={{
                    position: "absolute",
                    top: "-15px",
                    right: "-20px",
                    borderRadius: "20px",
                    fontSize: "10px",
                    boxShadow: "rgb(7 6 6 / 9%) 0px 0px 20px 10px",
                    background: "white",
                    width: "20px",
                    textAlign: "center",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "20px",
                  }}
                >
                  {list.cart}
                </span>
                <BagIcon />
              </div>
            </div>
            {/* <Button
              Button
              size="small"
              shape
              variant="text"
              startIcon={<FavIcon />}
            />
            <Button
              Button
              size="small"
              shape
              variant="text"
              startIcon={<BagIcon />}
            /> */}
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="persistent"
          anchor="left"
          open={open}
        >
          <DrawerHeader>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </DrawerHeader>
          <Divider />
          <List>
            {["Inbox"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </Box>
    </NavBarStyle>
  );
};

export default Navbar;
