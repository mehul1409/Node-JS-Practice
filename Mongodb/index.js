const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({extended:false}));

// connection
mongoose
  .connect("mongodb://127.0.0.1:27017/youtube")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("MongoDB connection error", err);
  });

// schema
const userschema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
},
{timestamps:true},
);

// model
const user = mongoose.model("user", userschema);

app.get('/users' , async (req,res)=>{
  const allUsers = await user.find({});

  if (!allUsers) {
    // Handle the case where allUsers is undefined or null
    res.send("Error fetching users");
  } else {
    const html = `
      <ul>
        ${allUsers.map((user) => `<li>${user.firstname}</li>`).join("")}
      </ul>`;
    res.send(html);
  }
  
})

app.post('/api/users', async (req, res) => {
  const body = req.body;
  if (!body || !body.firstname || !body.lastname || !body.email) {
      return res.status(400).json({ msg: "All fields are required" });
  } else {
      const result = await user.create({
          firstname: body.firstname,
          lastname: body.lastname,
          email: body.email
      });

      console.log('result', result);
      return res.status(200).json({ msg: "User added successfully" });
  }
})

app.listen(8000, (err) => {
  if (err) {
    console.error("Server error:", err);
  } else {
    console.log("Server is running on port 8000");
  }
});
