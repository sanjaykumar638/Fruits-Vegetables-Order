import {
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    console.log("Search for:", searchTerm); // Replace with search logic
    onClose(); // Close the modal after executing search
  };

  return (
    <>
      {/* Input Field */}
      <InputGroup w={"570px"} rounded={"xl"}>
        <Input
          placeholder="Find fresh vegetables, fruits, and dairy"
          rounded={"full"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={onOpen} // Open modal when the input is focused
        />
        <InputRightElement>
          <FaSearch color="green" />
        </InputRightElement>
      </InputGroup>

      {/* Modal for Search */}
      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />

          <ModalBody pb={6} mt="10px">
            <FormControl>
              <Input
                ref={initialRef}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </FormControl>
            <Button
              mt={4}
              colorScheme="green"
              w="full"
              onClick={handleSearch}
            >
              Search
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchBox;
