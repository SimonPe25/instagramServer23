import express from 'express';
import mongoose from 'mongoose';
import router from './router.js';
import cors from 'cors'
import morgan from 'morgan';


const app = express()
app.use(cors({
    origin: ["http://localhost:3000", "https://frontend-for-instagram.herokuapp.com"],
}))

app.use(morgan('dev'))

const PORT = process.env.PORT || 5000
const DB_URL = "mongodb+srv://simon:987654321@cluster0.8pv5z.mongodb.net/IntagramDB?retryWrites=true&w=majority"

app.use(express.json())
app.get('https://frontend-for-instagram.herokuapp.com/home', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })
  
  app.listen(80, function () {
    console.log('CORS-enabled web server listening on port 80')
  })

app.use('/', router)


async function startApp() {
    try {
        await mongoose.connect(DB_URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false })
        app.listen(PORT, () => console.log('SERVER STARTED ON PORT ' + PORT))

    } catch (e) {
        console.log("ERROR CONECTED :", e);
    }
}
startApp()



