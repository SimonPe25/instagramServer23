import User from "./User.js"


class PostService {
    async getOne(_id) {
        if (!_id) {
            throw new Error('не указан ID')
        }
        const post = await User.findById(_id);
        return post;
    }
    async update(user) {

        console.log(user);
        const userMessage = {
            "autor": user.autor,
            "message": user.message,
            "urlUser": user.urlUser
        }

    if (!user._id) {
        throw new Error('не указан ID')
        }  
        const {_id, photo} = user

        if (photo === "urlcoment") {
            const newUser = await User.findOneAndUpdate(
                { _id: _id }, 
                { $push:  
                    {urlcoment: userMessage}
                        
                })        
    return newUser;
        }
        if (photo === "url2coment") {
            const newUser = await User.findOneAndUpdate(
                { _id: _id }, 
                { $push:  
                    {url2coment: userMessage}
                        
                })        
    return newUser;
        }
        if (photo === "url3coment") {
            const newUser = await User.findOneAndUpdate(
                { _id: _id }, 
                { $push:  
                    {url3coment: userMessage}
                        
                })        
    return newUser;
        }
        if (photo === "url4coment") {
            const newUser = await User.findOneAndUpdate(
                { _id: _id }, 
                { $push:  
                    {url4coment: userMessage}
                        
                })        
    return newUser;
        }
        if (photo === "url5coment") {
            const newUser = await User.findOneAndUpdate(
                { _id: _id }, 
                { $push:  
                    {url5coment: userMessage}
                        
                })        
    return newUser;
        }
        if (photo === "url6coment") {
            const newUser = await User.findOneAndUpdate(
                { _id: _id }, 
                { $push:  
                    {url6coment: userMessage}
                        
                })        
    return newUser;
        }
        if (photo === "url7coment") {
            const newUser = await User.findOneAndUpdate(
                { _id: _id }, 
                { $push:  
                    {url7coment: userMessage}
                        
                })        
    return newUser;
        }
        if (photo === "url8coment") {
            const newUser = await User.findOneAndUpdate(
                { _id: _id }, 
                { $push:  
                    {url8coment: userMessage}
                        
                })        
    return newUser;
        }
        if (photo === "url9coment") {
            const newUser = await User.findOneAndUpdate(
                { _id: _id }, 
                { $push:  
                    {url9coment: userMessage}
                        
                })        
    return newUser;
        }
        if (photo === "url10coment") {
            const newUser = await User.findOneAndUpdate(
                { _id: _id }, 
                { $push:  
                    {url10coment: userMessage}
                        
                })        
    return newUser;
        }   
    }
}

export default new PostService()