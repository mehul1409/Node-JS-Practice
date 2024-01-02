const express = require('express');
const app = express();

const reqfilter = (req,res,next) => {
    if(!req.query.age){
        res.send('please provide age');
    }else{
        next();
    }
}

app.use(reqfilter);

app.get('/',(req,res)=>{
    res.send('Welcome to home page')
})

app.get('/users',(req,res)=>{
    res.send('welcome to users page');
})

app.listen(3030);