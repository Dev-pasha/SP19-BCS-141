const {Product , validate} = require('../models/product');

function validateProduct (req, res, next){

    const { error } = validate(req.body);
    if (error) return res.status(400).send(error);
    next();
    // if (error) return res.status(400).send(error.details[0].message);

}


module.exports = validateProduct;