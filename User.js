import mongoose from 'mongoose';

const users = new mongoose.Schema({ 
    urlcoment:[],
    url2coment:[],
    url3coment:[],
    url4coment:[],
    url5coment:[],
    url6coment:[],
    url7coment:[],
    url8coment:[],
    url9coment:[],
    url10coment:[]
})

export default mongoose.model('users', users);