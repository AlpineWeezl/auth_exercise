import Joi from "joi"

export const createUserValidation = (req, res, next) => {
    const schema = Joi.object(
        {
            username: Joi.string().min(1).required(),
            email: Joi.string().email(),
            password: Joi.string().min(8).required()
        }
    )
    req.validation = schema.validate(req.body);
    if (req.validation.error) return res.status(400).send(req.validation.error.details[0].message);
    next();
}