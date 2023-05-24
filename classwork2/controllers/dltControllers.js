const data = {
    users: require('../models/dlt.json'),
    setUser: function (data) {
        this.users = data;
    }
}

const path = require('path')
const fsPromises = require('fs/promises')



const handleRegister = async (req, res) => {
    const {firstname, lastname, sog, gender, dob, num} = req.body
    if(!firstname || !lastname || !sog ||!gender || !dob || !num)   
    return res.status(400).json({message: "Fill all this field"})

    const duplicate1 =  data.users.find(person  => person.firstname == firstname)
    const duplicate2=  data.users.find(person  => person.lastname == lastname)
    const duplicate3=  data.users.find(person  => person.sog == sog)
    const duplicate4=  data.users.find(person  => person.gender == gender)
    const duplicate5=  data.users.find(person  => person.dob == dob)
    const duplicate6=  data.users.find(person  => person.num == num)

    if(duplicate1, duplicate2, duplicate3, duplicate4, duplicate5, duplicate6) return res.status(409).json({message: `Account exist`}) //
    
    try {
        const newUser = {"firstname" : firstname, "lastname": lastname, "sog": sog, "gender" : gender, " dob" : dob, "num": num}


        data.setUser([...data.users, newUser])
        fsPromises.writeFile(path.join(__dirname, '..',  'models', 'dlt.json'), JSON.stringify(data.users))

        console.log(newUser);
           res.status(201).json({message : `Your Account  has been  registered successfully`})
    } catch (err) {
        res.status(500).json({message: err.message})
    }
}

module.exports = handleRegister