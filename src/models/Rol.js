class Rol{
    static tableName = 'rol';
    constructor(id,nombre,definicion){
        this.id = id;
        this.nombre = nombre;
        this.definicion = definicion;
    }
}
module.exports = Rol;