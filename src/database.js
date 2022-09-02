require('./keys');
const mongo = require('mongoose');
const { keys } = require('./keys');

const MONGO_URI = `mongodb+srv://${keys.user}:${keys.pass}@cluster0.2fwyb.mongodb.net/?retryWrites=true&w=majority`;


(async()=>{
    await mongo.connect(MONGO_URI,{
        useNewUrlParser: true
    })
    .then(db=>console.log('db is connected'))
    .catch(err=>console.log(err))
})();
