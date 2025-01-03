import { useToast } from "@chakra-ui/react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

export const PrivateComponent = ({ children }) => {
  const { token } = useContext(AuthContext);
  const toast = useToast();
  if (token === "") {
    toast({
      title: "Not Register User",
      description: "Seems you are not the Register user of Fraazo",
      status: "warning",
      duration: 5000,
      isClosable: true,
      position: "top"
    });
    return <Navigate to="/" replace={false} />;
  }

  return children;
};
