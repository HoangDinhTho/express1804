const express = require('express');
const app = express();
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    let name = '<i>KPT</i>';
    res.render('home',{name});
})
app.listen(3000, ()=>console.log('Server start on port 3000'))