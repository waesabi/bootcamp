const express = require("express");
const dotenv = require("dotenv");
const logger = require("./middleware/logger");
const morgan = require("morgan");
const connectDB = require("./config/db");
const colors = require("colors");
// Routes
const bootcamps = require("./routes/bootcamps");

// load env variables
dotenv.config({ path: "./config/config.env" });

// connect to monogo db
connectDB();

const app = express();

// body parser
app.use(express.json());

// dev loggin middleware
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

// Mount routers
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  );
});

// handle unhandled promise rejections
process.on("unhandledRejection", (error, promise) => {
  console.log(`Error: ${error.message}`.red);
  // Close server & exit process
  server.close(() => process.exit(1));
});
