import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes.js";
import blogRouter from "./routes/blog-routes.js";
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);


mongoose
  .connect(
    "mongodb+srv://saiabhijith21:Abhi7995@kuteheart-web.c35fhfc.mongodb.net/data?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() =>
    console.log("Connected TO Database and Listening TO Localhost 5000")
  )
  .catch((err) => console.log(err));