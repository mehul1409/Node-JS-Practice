const express = require("express");

const userRouter = require('./routes/user');
const app = express();


//Routes
app.use('/user',userRouter);

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connectionj Established");
  }
});
