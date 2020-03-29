const Consulta = require("../models/contact_model.js");

const db_handler = {
    register: async function(contact, callback){
        let write = await Consulta.create(contact, callback)
        await write;
        return true;
    }
}



module.exports = db_handler;
        


