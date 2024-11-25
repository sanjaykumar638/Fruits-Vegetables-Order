import { Box } from "@chakra-ui/react";
import "./Sidebar.css";
import { BsPlusLg } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Sidebar = () => {
  const { query } = useParams();
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("");

  const categories = [
    { id: "coldPressed", label: "Cold Pressed" },
    { id: "fruits", label: "Fruits" },
    { id: "vegetables", label: "Vegetables" },
    { id: "dryfruits", label: "Dry Fruits" },
    { id: "kitchenstaples", label: "Kitchen Staples" },
  ];

  useEffect(() => {
    if (query) {
      setActiveCategory(query);
    }
  }, [query]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    navigate(`/product/${category}`, { replace: true });
  };

  return (
    <Box id="Sidebar1">
      {categories.map((cat) => (
        <Box
          key={cat.id}
          id={activeCategory === cat.id ? "Sidebar22" : "Sidebar11"}
          onClick={() => handleCategoryChange(cat.id)}
        >
          {activeCategory === cat.id ? <FaMinus id="logo1" /> : <BsPlusLg id="logo1" />}
          <p id="SidbarHead">{cat.label}</p>
        </Box>
      ))}
    </Box>
  );
};

export default Sidebar;
