require("dotenv").config({ path: "./src/.env" });

const path = require("path");
const express = require("express");
const methodOverride = require("method-override");
const morgan = require("morgan");
const { engine } = require("express-handlebars");
const handlebarsHelpers = require("handlebars-helpers")();
const app = express();
const port = process.env.PORT || 3000;
const route = require("./routes");
const mysql = require("mysql2");
const { sequelize } = require("./sequelize");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Sử dụng cookie-parser middleware
app.use(cookieParser());

app.use(cors());

//Sử dụng tài nguyên tĩnh từ thư mục "public"
app.use(express.static(path.join(__dirname, "public")));

// override with POST having ?_method=...
app.use(methodOverride("_method"));

//Sử dụng middleware express.urlencoded và express.json
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

// HTTP logger
app.use(morgan("combined"));

// Template engine
app.engine(
  "hbs",
  engine({
    extname: ".hbs",
    helpers: handlebarsHelpers,
  })
);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources", "views"));

//Routes init
route(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
