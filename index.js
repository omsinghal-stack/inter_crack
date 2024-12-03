const express = require('express');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();
const app = express();
let cm_name = [];
let cm = [];
app.use(cors());
fs.readFile('./questions.json', 'utf-8', (err, dt) => {
    cm_name = JSON.parse(dt);
})
fs.readFile('./company_names.json','utf-8',(err,data)=>{
    cm = JSON.parse(data);
})
app.get('/',(req,res)=>{
    res.send(cm);
})
app.get('/cname', (req, res) => {
    
    const cname = req.query.cname;
    const type = req.query.type;
    let ret_data = [];
    if(cname.indexOf(cname)>-1){
            ret_data = cm_name.filter((c)=>{
                return c.cname === cname && c.type===type;
            })
            if(ret_data.length===0){
                ret_data =  {
                    "message": 'Not found'
                }
            }
    }
    else{
        ret_data = {
            "message": 'Not found'
        }
    }
    res.send(ret_data);
});

app.listen(process.env.PORT, () => {
    console.log("server start");
})