const UserServices = require('../services/user.services');


const createUser = async (req,res) =>{
    try {
        // un cli nos manda la información.
        // en el cuerpo de una petición.
        // nosotros la obtenemos en req-body.
        const newUser = req.body;
        // consultamos al modelo para realizar la operación
        const result = await UserServices.create(newUser);
        // se encarga de dar respuesta
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error);
    }
};


module.export = {
    createUser,
};

