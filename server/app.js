// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv").config();

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);

// 👇 Start handling routes here]
// const allRoutes = require("./routes/index");
// app.use("/api", allRoutes);

const indexRoutes = require("./routes/index.routes");
app.use("/api", indexRoutes);

const authRoutes = require("./routes/auth.routes");
app.use("/auth", authRoutes);

const projectRoutes = require("./routes/project.routes");
app.use("/api", projectRoutes);
// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
const taskRoutes = require("./routes/task.routes");
app.use("/api", taskRoutes);

require("./error-handling")(app);

module.exports = app;
