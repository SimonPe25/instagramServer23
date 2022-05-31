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

app.all('*', function(req, res,next) {
    /**
     * Response settings
     * @type {Object}
     */
    var responseSettings = {
        "AccessControlAllowOrigin": req.headers.origin,
        "AccessControlAllowHeaders": "Content-Type,X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5,  Date, X-Api-Version, X-File-Name",
        "AccessControlAllowMethods": "POST, GET, PUT, DELETE, OPTIONS",
        "AccessControlAllowCredentials": true
    };

    /**
     * Headers
     */
    res.header("Access-Control-Allow-Credentials", responseSettings.AccessControlAllowCredentials);
    res.header("Access-Control-Allow-Origin",  responseSettings.AccessControlAllowOrigin);
    res.header("Access-Control-Allow-Headers", (req.headers['access-control-request-headers']) ? req.headers['access-control-request-headers'] : "x-requested-with");
    res.header("Access-Control-Allow-Methods", (req.headers['access-control-request-method']) ? req.headers['access-control-request-method'] : responseSettings.AccessControlAllowMethods);

    if ('OPTIONS' == req.method) {
        res.send(200);
    }
    else {
        next();
    }


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



