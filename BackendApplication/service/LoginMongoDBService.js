const User = require('../schema/loginSchema');

const loginService = async (req, res) => {
     const {username, password} = req.validatedBody; 
        try{
            let fetchedUser= await User.find({"name": username, "password": password});
            // let fetchedUser= await User.findOne({"name": username, "password": password});
            console.log("fetchedUser", fetchedUser);

            //uncomment this line if you are giing t use findOne Query
            // if(!fetchedUser)
            
             if(fetchedUser.length === 0)
                {
                    return res.status(403).send("Login credentials are invalid please enter correct credentials")
                }
            return res.status(200).send("login successfull");
        }catch(error){
            console.log("invalid", error);
        }
}

module.exports = loginService;