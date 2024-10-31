const CrudRepository  = require('../lib/crudRepository');
const Rol = require('../models/Rol');

class RolRepository extends CrudRepository{
    constructor(){
        super(Rol);
    }
}
module.exports = new RolRepository();