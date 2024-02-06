const express =require('express')
const mongoose = requuire('mongoose');
const app = express()



app.listen(8000, (err)=>{
    if(err){
        console.log(`there is a error present! ${err}`);
    }else{
        console.log('server started!');
    }
})