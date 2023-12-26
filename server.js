import app from "./app.js";
import dotenv from "dotenv";
dotenv.config({
  path: "./config/config.env",
});

app.listen(process.env.PORT, () => {
  console.log(`Server is working on port ${process.env.PORT}`);
});
