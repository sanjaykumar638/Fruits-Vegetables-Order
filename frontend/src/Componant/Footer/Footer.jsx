import React from "react";
import "./Footer.css";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import img1 from "../../Images/img11.svg";
import img2 from "../../Images/MSD 07.png";
import img3 from "../../Images/img13.png";
import img4 from "../../Images/img14.png";
import img5 from "../../Images/img15.png";
import img6 from "../../Images/img16.png";
import img7 from "../../Images/img17.png";
import { Box, Button, Heading, Input, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      {/* Download App Section */}
      <Box id="Container">
        <Box id="dowloadeappcontainer">
          <img src={img5} alt="App Preview" id="img1" />
        </Box>
        <Box id="container2">
          <Heading as="h1">Download The App</Heading>
          <Text id="downloadtext">Enter your number to receive the app link</Text>
          <Box id="Container3">
            <Box id="Container31">
              <FaGooglePlay /> Android
            </Box>
            <Box id="Container32">
              <FaApple /> iPhone
            </Box>
          </Box>
          <Box id="Container4">
            <Input
              type="text"
              id="Container41"
              placeholder="Enter Your Mobile number"
            />
          </Box>
          <Button id="Container5" colorScheme="teal">
            SUBMIT
          </Button>
          <Box id="Container6">
            Available on <img src={img6} alt="Google Play" />
            <img src={img7} alt="App Store" />
          </Box>
        </Box>
      </Box>

      {/* Footer Content */}
      <Box id="Card">
        <Box id="footer_imgDiv">
          <img src={img1} alt="Logo" id="footer_img" />
        </Box>
        <Box id="Footer_Card">
          <Box id="footer_card_1">
            <Box id="footer_card_2">
              <img src={img2} alt="Fresh Produce" id="footer_card_3" />
              <Text>
                Order fresh fruits & vegetables online, delivered directly from farms.
              </Text>
            </Box>
            <Box id="footer_Card_4">
              <Heading as="h3">Useful Links</Heading>
              <Box>Privacy Policy</Box>
              <Box>FAQ</Box>
              <Box>Terms & Conditions</Box>
            </Box>
            <Box id="footer_card_8">
              <Heading as="h3">Connect with Us</Heading>
              <Box id="footer_card_9">
                <HiOutlineMail /> support@msd07.com
              </Box>
              <Text>102, RS Puram, Coimbatore City NH 601 010.</Text>
              <Box id="footer_card_6">
                <img src={img3} alt="Google Play" />
                <img src={img4} alt="App Store" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box id="copyright">
          © 2024 MSD 07. All Rights Reserved.
        </Box>
      </Box>
    </>
  );
};

export default Footer;
