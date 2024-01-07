const express = require("express");
const app = express();

const userRouter = require("./routes/UserRoute.js");
app.use("/user", userRouter);

const PORT = process.env.PORT || 8060;
app.listen(PORT, () => {
  console.log("Server is up and running on : " + PORT);
});
