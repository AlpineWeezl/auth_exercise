
export const notAllowed = (req, res, next) => {
    res.status(401).send({error: 'Not Allowed'});
}