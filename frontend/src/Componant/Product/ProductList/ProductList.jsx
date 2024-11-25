import { Box, Select, useToast } from "@chakra-ui/react";
import "./ProductList.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import AddtoCartButton from "../../AddToCartButton/AddtoCartButton";
import { coldPressed, dryfruits, fruits, staples, vegetables } from "../../../Constant/data";

const ProductList = () => {
  const { query } = useParams();
  const toast = useToast();
  const [productList, setProductList] = useState([]);
  const [sortOrder, setSortOrder] = useState("");

  // Category Mapping
  const categoryMapping = {
    coldPressed,
    fruits,
    vegetables,
    dryfruits,
    kitchenstaples: staples,
  };

  // Update Product List Based on Query
  useEffect(() => {
    if (query && categoryMapping[query]) {
      setProductList([...categoryMapping[query]]);
    }
  }, [categoryMapping, query]);

  // Sort Products
  useEffect(() => {
    if (sortOrder) {
      const sortedArray = [...productList].sort((a, b) => {
        return sortOrder === "low" ? a.price - b.price : b.price - a.price;
      });
      setProductList(sortedArray);
    }
  }, [productList, sortOrder]);

  // Add to Cart
  const handleAddToCart = (product) => {
    const cart = JSON.parse(localStorage.getItem("FraazoCart")) || [];
    cart.push(product);
    localStorage.setItem("FraazoCart", JSON.stringify(cart));

    toast({
      title: "Added to Cart",
      description: `${product.name} was successfully added.`,
      status: "success",
      duration: 1500,
      isClosable: true,
      position: "top",
    });
  };

  // Store Selected Product in Local Storage
  const handleProductClick = (product) => {
    localStorage.setItem("oneProduct", JSON.stringify(product));
  };

  return (
    <Box id="mainContainerProductList">
      {/* Sort Box */}
      <Box id="filterSortBox">
        <Box id="marginBoxforsort"></Box>
        <Select
          placeholder="Sort by"
          id="selectforFilter"
          variant="flushed"
          borderColor="teal"
          color="gray"
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="low">Price Low to High</option>
          <option value="high">Price High to Low</option>
        </Select>
      </Box>

      {/* Product List */}
      <Box id="container1list">
        {productList?.map((product) => (
          <Box key={product._id} id="container11">
            <Link to={`/product/${query}/${product.name}/${product._id}`}>
              <Box
                id="imgbox"
                onClick={() => handleProductClick(product)}
                style={{ height: "100px", width: "200px" }}
              >
                <img src={product.image} alt={product.name} />
              </Box>
            </Link>
            <Box id="textBox">
              <p id="name">
                {product.name.slice(0, 26)}
                {product.name.length > 26 && "..."}
              </p>
              <Box id="lowerboxlist">
                <Box id="leftbox">
                  <p id="qty">{product.quantity}</p>
                  <p id="price">₹{product.price}</p>
                </Box>
                <Box id="rightbox">
                  <AddtoCartButton HandelCart={handleAddToCart} ele={product} />
                </Box>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
