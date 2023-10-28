const UserDb = require("../models").user

const controller = {
    registerUser: async function (req, res)
    {
        try
        {
            let user = {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                isOwner: req.body.isOwner,
            }
            console.log(user);

            const newUser = await UserDb.create(user)
            if (newUser)
            {
                res.status(200).send(newUser)
            }
        } catch (err)
        {
            console.log(err.message)
            res.status(500).send("Server error")
        }
    },

    getUserByEmailAndPassword: async function (req, res)
    {
        const { email, password } = req.body;
        UserDb.findOne({
            where: {
                email: email,
                password: password,
            },
        })
            .then((user) =>
            {
                if (!user)
                {
                    return res.status(404).send({ message: "User not found!" });
                }
                else
                {
                    return res.status(200).send({message:"user gasit"});
                }
            })
            .catch((err) =>
            {
                console.error(err);
                res.status(500).send({ message: "Server error!" });
            })
    },

}

module.exports = controller;
