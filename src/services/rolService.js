const rolRepository = require('../repositories/rolRepository');

class RolService{
    getAllRols(){
        return rolRepository.findAll();
    }

    getRollById(id){
        return rolRepository.findById(id);
    }

    createRol(userData){
        return rolRepository.create(userData);
    }

    updateRol(id, userData){
        return rolRepository.update(id, userData);
    }

    deleteRol(id){
        return rolRepository.delete(id);
    }

    async getUsersByRol(rolId){ 
        const rol = await rolRepository.findById(rolId);
        if(!rol){
            throw new Error('Rol not found');
            return;
        }
        const users = await rolRepository.findUserByIdRol(rolId);
        const userbyrol = {
            data:{
                ...rol,
                usuarios: users
            }
        }
        return userbyrol;
    }
}
module.exports = new RolService();