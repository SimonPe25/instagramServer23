import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors'
import morgan from 'morgan';



const app = express()

app.use(morgan('dev'))
app.use(cors())

const PORT = process.env.PORT || 5000
const DB_URL = "mongodb+srv://simon:987654321@cluster0.8pv5z.mongodb.net/IntagramDB?retryWrites=true&w=majority"

//Cors
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

app.use(express.json())
app.use('/', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL, {useUnifiedTopology:true, useNewUrlParser:true, useFindAndModify: false})
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))
       
    } catch (e) {
        console.log("ERROR CONECTED :", e);
    }
}
startApp()



