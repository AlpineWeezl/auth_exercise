import usersModel from "../models/usersModel.js";

export const createUser = (req, res) => {
    const { error } = req.validation;
    const { username, email, encryptedPassword } = req.body;

    const newUser = usersModel.create(
        {
            username: username,
            email: email,
            password: encryptedPassword
        }
    );

    return res.status(201).send('User successfully created!');



}