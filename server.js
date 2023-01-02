const express=require('express');
const app=express();
const bodyParser=require('body-parser')
app.use(bodyParser());


app.get('/',(req,res)=>{
    res.sendFile(__dirname+('/index.html'));

})

app.post('/display', async (req,res)=>{
    var obj="Product Name:"+ req.body.pdt +"  <br>  "+"  Product Price:  "+ req.body.rte+" <br>  "+"  Product Quantity:  "+req.body.qty;
    res.send(obj);

})

app.listen(3000,()=>{
    console.log('connect to 3000 server....')
})