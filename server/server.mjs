import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
// Import Routes here
import users from "./routes/users.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// app.use(<path>, <variable from import>);
app.use("users", users);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
