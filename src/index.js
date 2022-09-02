const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('./database');
const { json } = require('body-parser');
const products = require('./api/products')
const cors = require('cors');

let whiteList = ['http://localhost:3000'];
let corsOptions ={
    origin: function(origin, callback){
        if(whiteList.indexOf(origin) !== -1){
            callback(null, true);  
        }else {
            callback(new Error('not allow by cors'));
        }
    }
}

app.set('port', process.env.PORT || 4000);
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/products',cors(), products);




try {
    app.listen(app.get('port'),()=>{
        console.log('Server on port:',app.get('port'))
    });  
} catch (error) {
    console.error(error);
};