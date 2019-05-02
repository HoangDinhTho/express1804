const express = require('express');
const app = express();

// uri
// app.get('/home',(request, response)=>{
//     response.send({
//         name: "Hello KPT!",
//         method:'GET'
//     })
// })
// app.post('/home',(request, response)=>{
//     response.send({
//         name: "Hello KPT!",
//         method:'POST'
//     })
// })
app.listen(8000,()=>{
    console.log('Server start on port 8000')
});

