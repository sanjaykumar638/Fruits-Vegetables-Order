import "./Cart.css";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { BsCart3 } from "react-icons/bs";
import img1 from "../../Images/img18.png";
import { Link } from "react-router-dom";
import { useState } from "react";

const Cart = () => {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [state, setState] = useState(true);

  // Retrieve cart data from localStorage or initialize an empty array
  const cart = JSON.parse(localStorage.getItem("FraazoCart")) || [];
  const sum = cart.reduce((total, item) => total + +item.price, 0);

  // Handle deletion of an item from the cart
  const handleDelete = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    localStorage.setItem("FraazoCart", JSON.stringify(updatedCart));
    setState(!state); // Trigger re-render
  };

  // Handle navigation to the address page and store total amount in localStorage
  const handleNavigate = () => {
    localStorage.setItem("FraazoCartamount", JSON.stringify(sum));
    console.log("Navigating to address with amount:", sum);
    onClose();
    navigate("/address");
  };

  // Component to display when the cart is empty
  const EmptyCartMessage = () => (
    <Box id="emptycartBox">
      <Box id="emptycartImg">
        <img src={img1} alt="Empty cart illustration" />
      </Box>
      <Box id="emptycartText">
        <p id="textline1">Whoops... Cart is empty</p>
        <p id="textline2">Add some fruits, veggies, and</p>
        <p id="textline2">dairy products to your cart</p>
        <Button
          onClick={onClose}
          rounded="full"
          mt={"20px"}
          colorScheme="teal"
        >
          Let's Shop
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      {/* Cart button to open the drawer */}
      <Button onClick={() => {
        console.log("Cart button clicked");
        onOpen();
      }} key="sm" m={"0"} p={"10px"} size="md">
        <div>
          <BsCart3 />
        </div>
        Cart
      </Button>

      {/* Drawer for cart */}
      <Drawer onClose={onClose} isOpen={isOpen} size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart ({cart.length} Items)</DrawerHeader>
          <DrawerBody>
            {cart.length === 0 ? (
              <EmptyCartMessage />
            ) : (
              <Box id="cartbox">
                <Box
                  id="cartbox1"
                  overflow={cart.length >= 5 ? "scroll" : "hidden"}
                >
                  {cart.map((ele, index) => (
                    <Box id="compbox" key={index}>
                      <Box id="imgbox1">
                        <img src={ele.image} alt={ele.name} />
                      </Box>
                      <Box id="textBox1">
                        <p id="name1">{ele.name}</p>
                        <p id="qty1">{ele.quantity}</p>
                        <p id="price1">₹{ele.price}</p>
                      </Box>
                      <Box id="buttonBox1">
                        <p
                          id="removebutton"
                          onClick={() => handleDelete(index)}
                        >
                          Remove
                        </p>
                      </Box>
                    </Box>
                  ))}
                </Box>
                <Box id="cartbox2">
                  <Box id="cartBox21">
                    <p id="cartcheckouttext">{cart.length} Items</p>
                    <p id="cartcheckouttext">₹ {sum}</p>
                  </Box>
                  <Box id="cartbox22">
                    <Link to="/address">
                      <Button
                        colorScheme={"teal"}
                        w="185px"
                        mt={"5px"}
                        h="45px"
                        onClick={handleNavigate}
                      >
                        CheckOut
                      </Button>
                    </Link>
                  </Box>
                </Box>
              </Box>
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Cart;
