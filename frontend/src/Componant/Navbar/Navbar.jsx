import "./Navbar.css";
import logo from "../../Images/MSD 07.png";
import { BiWallet } from "react-icons/bi";
import { ChevronDownIcon } from "@chakra-ui/icons";

import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import Login from "../Login/Login";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Cart from "../Cart/Cart";
import { useNavigate } from "react-router-dom";
import Location from "../Location/Location";
import SearchBox from "./SearchBox/SearchBox";

const Navbar = () => {
  const { logoutAuth, token, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNavigate = () => navigate("/", { replace: true });
  const handleLogout = () => {
    logoutAuth();
    navigate("/", { replace: true });
  };

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo" onClick={handleNavigate}>
        <img src={logo} alt="Logo" />
      </div>

      {/* Location Section */}
      <div className="navbar-location">
        <Location />
      </div>

      {/* Search Section */}
      <div className="navbar-search">
        <SearchBox />
      </div>

      {/* Cart Section */}
      <div className="navbar-cart">
        <Cart />
      </div>

      {/* Credit Button */}
      <Button
        className="navbar-credit"
        size="md"
        leftIcon={<BiWallet />}
      >
        Credit
      </Button>

      {/* User Authentication Section */}
      <div className="navbar-auth">
        {token ? (
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton
                  isActive={isOpen}
                  as={Button}
                  rightIcon={<ChevronDownIcon />}
                >
                  {user}
                </MenuButton>
                <MenuList>
                  <MenuItem>My Orders</MenuItem>
                  <MenuItem>Invite a Friend</MenuItem>
                  <MenuItem>Help & Support</MenuItem>
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        ) : (
          <Login />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
