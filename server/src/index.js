const createError = require("http-errors");
const express = require("express");
const path = require("path");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
require("dotenv").config({ path: path.resolve(__dirname, "../../.env") });

const userRouter = require("./routes/user.route");

console.log(process.env.SERVER_DATABASE_URI);

mongoose.connect(process.env.SERVER_DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("MongoDB connected");
});

const app = express();

app.use(helmet());
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const assignId = (req, res, next) => {
  req.id = uuidv4();
  next();
};

app.use(assignId);
morgan.token("id", (req) => {
  return req.id;
});
app.use(morgan(":id :method :url :status :response-time"));

app.get("/", (req, res) => {
  res.send("hello world 1");
});

app.use("/api/user", userRouter);

app.use((req, res, next) => {
  next(createError(404));
});

app.listen(process.env.SERVER_PORT, () =>
  console.log(`server is started at ${process.env.SERVER_PORT}`)
);
