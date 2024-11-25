const express = require('express');
const fs = require('fs');
const cors = require('cors');
require('dotenv').config();
const app = express();
let cm_name = [];
app.use(cors());
fs.readFile('./questions.json', 'utf-8', (err, dt) => {
    cm_name = JSON.parse(dt);
})
app.get('/cname', (req, res) => {
    const cname = req.query.cname;
    const type = req.query.type;
    let ret_data = [];
    switch (cname) {
        case 'accenture':
            if(type==='hr'){
            ret_data = cm_name.filter((c) => {
                return c.cname === 'accenture' && c.type==='hr';
            })
            }
            else{
                ret_data = cm_name.filter((c) => {
                    return c.cname === 'accenture' && c.type==='technical';
                })  
            }
            break;
        case 'capgemini':
            if(type==='hr'){
                ret_data = cm_name.filter((c) => {
                    return c.cname === 'capgemini' && c.type==='hr';
                })
            }
            else{
                ret_data = cm_name.filter((c) => {
                    return c.cname === 'capgemini' && c.type==='technical';
                })
            }
            break;
        case 'infosys':
            if(type==='hr'){
                ret_data = cm_name.filter((c) => {
                    return c.cname === 'infosys' && c.type==='hr';
                })
            }
            else{
                ret_data = cm_name.filter((c) => {
                    return c.cname === 'infosys' && c.type==='technical';
                })
            }
            break;
        case 'tcs':
            if(type==='hr'){
                ret_data = cm_name.filter((c) => {
                    return c.cname === 'tcs' && c.type==='hr';
                })
            }
            else{
                ret_data = cm_name.filter((c) => {
                    return c.cname === 'tcs' && c.type==='technical';
                })
            }
            break;
        case 'tech_mahindra':
            if(type==='hr'){
                ret_data = cm_name.filter((c) => {
                    return c.cname === 'tech_mahindra' && c.type==='hr';
                })
            }
            else{
                ret_data = cm_name.filter((c) => {
                    return c.cname === 'tech_mahindra' && c.type==='technical';
                })
            }
            break;
        default: ret_data = {
            "message": 'Not found'
        }
    }
    res.send(ret_data);
});

app.listen(process.env.PORT, () => {
    console.log("server start");
})