const express= require('express')

//router object
const router=express.Router()

//signup requiring controller
const userController=require("../controller/signupController")


router.post('/addtask', userController.createtask);
router.get('/addtask',userController.gettask);


//signup route
router.get('/', (req, res)=>{
    res.render("signup")
  });

  


module.exports=router;