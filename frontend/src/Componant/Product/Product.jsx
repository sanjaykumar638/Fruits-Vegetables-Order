import { Box } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Fetchdata } from "../../Redux/Products/Action";
import "./Product.css";
import ProductList from "./ProductList/ProductList";
import Sidebar from "./SideBar/Sidebar";

const Product = () => {
  const { query } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Fetchdata(query));

    // Scroll to the top of the page whenever the query changes
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [dispatch, query]);

  return (
    <Box id="mainContainer">
      {/* Sidebar Section */}
      <Box id="Container1">
        <Sidebar />
      </Box>

      {/* Product List Section */}
      <Box id="Container2">
        <ProductList />
      </Box>
    </Box>
  );
};

export default Product;
