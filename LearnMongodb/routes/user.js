const express = require('express');

const router = express.router();

router.get('/' , async (req,res)=>{
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
  
  router.post('/', async (req, res) => {
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

  module.exports = router;