import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import Navbar from "./Componets/Navbar";
import Shops from "./Componets/Shops";
import { Box } from "@mui/material";
import Footer from "./Componets/footer";
import ShopDetails from "./Componets/ShopDetails";
import ProductDetails from "./Componets/ProductDetails";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Navbar />
        <Box style={{ paddingTop: "80px", width: "100%" }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Shops />} />
              <Route path="/2" element={<ShopDetails />} />
              <Route path="/3" element={<ProductDetails />} />
            </Routes>
          </BrowserRouter>
        </Box>
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
