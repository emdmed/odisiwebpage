const Consulta = require("../models/contact_model.js");
const Chat = require("../models/chat_model.js");

const db_handler = {
    register: async function(contact, callback){
        contact.date =  new Date();
        let write = await Consulta.create(contact, callback)
        await write;
        return true;
    },
    demo: async function(contact, callback){
        contact.date = new Date();
        let write = await consulta.create(contact, callback)
        await write;
        return true;
    },
    store_chat: async function(chat, callback){
        let write = await  Chat.create(chat, callback);
        await write;
        return true;
    }
}

module.exports = db_handler;
        


