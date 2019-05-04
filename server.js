const express = require('express');
const app = express();
app.set('view engine','ejs');
app.use(express.static('./public'))

app.get('/',(req,res)=>{
    let name = '<i>KPT</i>';
    let arrPerson = [
        {name: 'Ti', age: 12},
        {name: 'Teo', age: 10},
        {name: 'Nam', age: 11},
        {name: 'Nu', age: 9}
    ];
    // person.age<10 ?  "green" : "red"
    res.render('home',{ name, arrPerson });
})
app.listen(3000, ()=>console.log('Server start on port 3000'))

// email
// password