const CrudRepository  = require('../lib/crudRepository');
const Rol = require('../models/Rol');

class RolRepository extends CrudRepository{
    constructor(){
        super(Rol);
    }

    async findUserByIdRol(rolId){
        const [rows] = await this.pool.query('SELECT * FROM rol r INNER JOIN usuario u on r.id = u.idRol where r.id = ?', [rolId]);
        return rows;
    }
}
module.exports = new RolRepository();