
let users = [
    {
        id: 1,
        firstname: "joao victor",
        lastname: "Ferreira",
        email: "joaovictorferrer@gmail.com",
        password: ' 13245676889'

    }
]

const getUserById = (req, res) => {
    
    const userFound = users.find(userById => userById.id === Number(req.params.id));
    if (userFound) return res.status(200).json(userFound)
    return res.status(400).json({msg: 'no existe este usuario'})
}

const loggerUser = (req, res) => {
    
    return res.status(200).json({"msg": "Login succesfull"})

}

module.exports = {
    getUserById,
    loggerUser
}