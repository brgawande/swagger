import cookieParser from "cookie-parser";
import express from "express";
// import swaggerJSDoc from "swagger-jsdoc";
import SwaggerUi from "swagger-ui-express";
import YAML from "yamljs";
const swaggerJSDoc = YAML.load("./api.yaml");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", SwaggerUi.serve, SwaggerUi.setup(swaggerJSDoc));

let users = [
  { id: 1, name: "Bhushan" },
  { id: 2, name: "Rohit" },
  { id: 3, name: "Mummy" },
];

// app.get("/string", (req, res) => {
//   res.status(200).send("This is a String");
// });

app.get("/user", (req, res) => {
  res.status(200).send({ id: 1, name: "Bhushan" });
});

app.get("/users", (req, res) => {
  res.status(200).send(users);
});

app.get("/users/:id", (req, res) => {
  const obj = users.find((x) => x.id === parseInt(req.params.id));
  res.status(200).send(obj);
});

app.post("/create", (req, res) => {
  users = [req.body, ...users];
  res.send(users);
});

import userRouter from "./routes/userRoutes.js";
app.use(userRouter);

export default app;
