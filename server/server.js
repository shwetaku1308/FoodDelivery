const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./utils/db");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Database connection
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
// Add more routes for restaurants and users here

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
