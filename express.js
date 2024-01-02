const express = require('express');
const path = require('path');

const app = express();

const publicpath = path.join(__dirname,'public')

// app.use(express.static(publicpath));

app.set('view engine' , 'ejs');

app.get('/profile' , (req,res)=>{
    const users = {
        name:'mehul bansal',
        email:'mehul@gmail.com',
        country:'INDIA',
        skills:['html','css','js']
    };
    res.render('profile',{users});
})

app.get('/login' , (req,res)=>{
    res.render('login');
})

app.get('',(req,res)=>{
    res.sendFile(`${publicpath}/index.html`)
})

app.get('/about' , (req,res)=>{
    res.sendFile(`${publicpath}/about.html`);
})

app.get('/home' , (req,res)=>{
    res.sendFile(`${publicpath}/home.html`);
})

app.get('*' , (req,res)=>{
    res.send('Error page');
})


app.listen(3030);