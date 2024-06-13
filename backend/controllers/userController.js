const User = require('../models/user');

//  /app/join
const register = async(req,res)=>{
    const {email,password} = req.body;
    const user = await User.create({
        email,password
    });
    res.json({success : true})
}

const createUser = async (req,res) =>{
    //get data from req body
    const {username,password} = req.body;

    //"User" is directory name
    const user = await User.create({
        username,
        password
    });
}



const validateUsername = async (req,res) => {
    const {username} = req.body.username;
    const user = await User.findOne({username});
    if (user) {
        res.json({available:false});
    }
    else{
        res.json({available:true});
    }
}

const updateUser = async (req,res) => {
    const userId = req.param.id;

    const {username,password,email,fullName} = req.body;

    await User.findByIdAndUpdate(userId,{
        username,
        password,
        email,
        fullName
    })

    const user = await User.findById(userId);

    res.json({user});
}

module.exports = {
    createUser,
    validateUsername,
    updateUser,
    register
}