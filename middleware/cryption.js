import bcrypt from "bcryptjs";


export const encryptPassword = async (req, res, next) => {
    const { password } = req.body;

    const salt = await bcrypt.genSalt(10);
    const encryptedPassword = await bcrypt.hash(password, salt);

    req.body.encryptedPassword = encryptedPassword;
    next();
}