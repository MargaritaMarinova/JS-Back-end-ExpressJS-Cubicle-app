const env = process.env.NODE_ENV || 'development';

const mongoose = require('mongoose')
const config = require('./config/config')[env];
const indexRouter = require('./routes')
const express = require('express')
const app = express();
const databaseUrl = 'mongodb+srv://softuniadmin:adminsoft@softuni-ui6vi.mongodb.net/cubicle?retryWrites=true&w=majority'

mongoose.connect(databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err)=> {
    if (err){
        console.error(err)
        throw err
    }
    console.log('Database is setup and running')
})

require('./config/express')(app);
app.use('/', indexRouter)

app.listen(config.port, console.log(`Listening on port ${config.port}! Now its up to you...`));