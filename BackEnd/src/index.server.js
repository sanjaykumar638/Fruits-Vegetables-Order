const express = require("express");
const env = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");
const DryFruitsController = require("./controller/DryFruits");
const FruitsController = require("./controller/Fruits");
const MangosController = require("./controller/Mangos");
const StaplesController = require("./controller/Staples");
const VegitableController = require("./controller/Vegitable");
const SearchQueryController = require("./controller/AllComponant");

const app = express();
env.config();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.error("Database Connection Error:", err.message);
  });

// Routes
app.use("/api", authRoutes);
app.use("/api/dryfruits", DryFruitsController);
app.use("/api/fruits", FruitsController);
app.use("/api/mangos", MangosController);
app.use("/api/kitchenstaples", StaplesController);
app.use("/api/vegitables", VegitableController);
app.use("/api/search", SearchQueryController);

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, (err) => {
  if (err) {
    console.error("Server Error:", err);
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
