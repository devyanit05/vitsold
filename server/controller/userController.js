const User = require('../models/user');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

// TODO move secret and port to env file
// const {Secret} = require('../Middleware/FetchUser')

exports.createUser = async (req, res) => {
    let obj = {
        token: null,
        error: null,
        user: null
    }

    // create encrypted password
    try {

        const { email, name, password } = req.body
        const exists = await User.findOne({ email })

        if (exists) {
            obj.error = "User already exists";
            return res.status(400).json(obj);
        }

        const salt = await bcrypt.genSalt(10);
        const securePassword = await bcrypt.hash(password, salt);
        const user = new User({
            name,
            email,
            password: securePassword,
        })

        user.save()
            .then(() => {
                const uniqueData = {
                    id: user._id
                }
                const token = jwt.sign(uniqueData, process.env.SECRET);
                console.log("Saved");
                obj.user = user;
                obj.token = token;
                res.json(obj);
            })
            .catch((err) => {
                obj.error = err.message
                res.json(obj)
            })
    } catch (error) {
        obj.error = error.message
        console.log(error)
        res.json(obj)
    }
}

exports.login = async (req, res) => {
    let obj = {
        token: null,
        error: null,
        user: null
    }

    try {
        const { email, password } = req.body;
        let user = await User.findOne({ email: email })
        let DbPassword = user.password

        if (!user) {
            obj.error = "use valid email"
            return res.status(400).json(obj)
        }

        let comparePass = await bcrypt.compare(password, DbPassword);
        // console.log(comparePass);
        if (!comparePass) {
            obj.error = "Incorrect Password"
            return res.status(400).json(obj);
        }
        else {
            const uniqueData = {
                id: user._id
            }
            const token = jwt.sign(uniqueData, process.env.SECRET);
            console.log("LOGGED IN");
            obj.token = token;
            obj.user = user
            res.json(obj);
        }
    } catch (error) {
        obj.error = "Internal server error"
        res.json(obj)
    }
}