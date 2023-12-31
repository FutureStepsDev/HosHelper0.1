const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./models/index");
const hospitalRoutes = require("./routes/Routes");
const pharmacienRoutes = require("./routes/Routes");
const userRoutes = require("./routes/Routes");
const medicationRoutes = require("./routes/Routes");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = process.env.PORT || 7000;
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api", hospitalRoutes);
app.use("/api", userRoutes);
app.use("/api", pharmacienRoutes);
app.use("/api", medicationRoutes);
db.sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection has been established successfully.");
    return db.sequelize.sync();
  })
  .then(() => {
    console.log("Models synchronized with the database.");

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Unable to connect to the database:", error);
  });
