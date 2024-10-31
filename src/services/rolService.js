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
}
module.exports = new RolService();