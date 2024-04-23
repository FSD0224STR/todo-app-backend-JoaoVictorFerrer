const User = require('../models/user.models')

const getUser = (req, res) => {
    User.findOne()
    .then(userDocs => {
      console.log('Found this: ', userDocs)
     return res.status(200).json(userDocs)
    })
    .catch(err => {
        console.log('Error while getting the user: ', err)
        res.status(400).json(err)
      });
  }


const loggerUser = async (req, res) => {
  console.log('esto es email', req.body.email)
  console.log('esto es pass', req.body.password)
  try {
    const userLogin = await User.findOne({ email: req.body.email })
    console.log('esto es newlogin',userLogin)
    if (!userLogin) {
      return res.status(404).json({ msg: "User not found" })
     
    }
    if (userLogin.password !== req.body.password) {
      return res.status(403).json({ msg: "Forbidden" })
    }
    
    return res.status(200).json({ msg: "Login successful" })
    
  } catch (error) {
    return res.status(500).json({ msg: "Internal Server Error" });
    
  }
    


}

module.exports = {
    getUser,
    loggerUser
}