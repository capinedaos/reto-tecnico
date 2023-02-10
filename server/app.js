const express = require("express");
// const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const compression = require("compression");
const morgan = require("morgan");
const path = require("path");
const cors = require("cors");

// Routers
const { shipsRouter } = require("./routes/ships.routes");

// Global err controller
const { globalErrorHandler } = require("./controllers/error.controller");

// Utils
const { AppError } = require("./utils/appError.util");

// Init express app
const app = express();
app.use(cors());

// Enable incoming JSON
app.use(express.json());

// Serving static files
app.use(express.static(path.join(__dirname, "public")));

// Limit the number of requests that can be accepted to our server
// const limiter = rateLimit({
//   max: 10000,
//   windowMs: 60 * 60 * 1000, // 1 hr
//   message: "Number of requests have been exceeded",
// });

// app.use(limiter);

// Add security headers
app.use(helmet());

// Compress responses
app.use(compression());

// Log incoming requests
if (process.env.NODE_ENV === "development") app.use(morgan("dev"));
else app.use(morgan("combined"));

// Routers and define endpoints
app.use("/api/v1/ship-management/ship", shipsRouter);

// Handle incoming unknown routes to the server
app.all("*", (req, res, next) => {
  next(
    new AppError(
      `${req.method} ${req.originalUrl} not found in this server`,
      404
    )
  );
});

app.use(globalErrorHandler);

module.exports = { app };
