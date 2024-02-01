const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req,res,next)=>{
  console.log("hello form middleware 1");
  // return res.json({msg:"hello form middleware 1"});
  next();
})

app.use((req,res,next)=>{
  console.log("hello from middleware 2");
  next();
})

app.get("/users", (req, res) => {
  const html = `
    <ul>
    ${users
      .map(
        (user) => `
        <li>${user.first_name}</li>
    `
      )
      .join("")}
    </ul>
    `;
  res.send(html);
});

// REST API

app.get("/api/users", (req, res) => {
  return res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = req.params.id;
    const user = users.find((user) => user.id == id);
    return res.send(user.first_name);
  })
  .patch((req, res) => {
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    return res.json({ status: "pending" });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  users.push({ ...body, id: users.length + 1 });

  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    res.json({ status: "pending" });
  });
});

app.listen(8000, () => {
  console.log("server started");
});
