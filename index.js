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

// app.get('/name/:myname/:age?',(req,res)=>{
//     let name = req.params.myname 
//     let age = req.param('age',11)
//     res.send({name,age}) 
// })

// cong/3/4
// tru/3/4
app.get('/:pheptinh/:so_a/:so_b',(req,res)=>{
    const { pheptinh, so_a, so_b } = req.params
    
})
class Pheptinh{
    constructor(pt, a, b){
        this.pt = pt;
        this.a = a;
        this.b = b;
    }
    get pheptinh(){
        if(this.pt=='cong') return '+';
        if(this.pt=='tru') return '-';
        if(this.pt=='nhan') return '*';
        if(this.pt=='chia') return '/';
        if(this.pt=='chiadu') return '%';
        throw new Error('Math Error!');
    }
    getResult(){
        // const bieuthuc = this.a + this.pheptinh + this.b;
        const bieuthuc = `${this.a} ${this.pheptinh} ${this.b}`;
        return eval(bieuthuc)
    }
}
try {
    const test = new Pheptinh('a',2,3)
    console.log(test.getResult())
}
catch (error) {
    console.log(error.message)
}





app.listen(8000,()=>{
    console.log('Server start on port 8000')
});

