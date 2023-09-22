const User = require('../models/signup');

exports.createtask=async(req,res)=>{
try{
const { name, email,description } = req.body;
const user = new User({ name, email, description}) 
await user.save();
res.redirect('/');
}catch(error){
res.send(error)
console.log(error)
    }
}
// Get all expenses
exports.gettask = async (req, res) => {
    try {
     //to find all user
      const users = await User.find();

      //tofind particular user
     // const expences = await expence.find({ userId });
      res.json(users);
    } catch (error) {
      console.log('error')
    }
  };



