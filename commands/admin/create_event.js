const eventCommands = require('../../database/eventCommands.js');

module.exports = {
    name: 'create_event',
    description: 'Empezar un evento',
    execute(msg, args) {
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            // Get command args
            let preMsg = msg.content.split('create_event');
            preMsg.shift();
            // If contains details
            if (NoneEmpty(preMsg)) {
                // Get detail's array
                let details = preMsg[0].substring(1).split('#');
                if (details.length == 4) {
                    // Insert event in database
                    eventCommands.insertEvent(details[0], details[1], details[2], details[3]);
                    msg.channel.send(`Evento creado exitósamente`);
                    msg.delete();
                } else {
                    msg.channel.send(`Es necesario ingresar los detalles en el formato correcto <@${msg.author.id}>`);
                }
            } else {
                msg.channel.send(`Ingresa los detalles del evento <@${msg.author.id}>`);
            }
        } else {
            msg.channel.send(`No tienes los permisos suficientes para ejecutar ese comando <@${msg.author.id}>`);
        }
    },
};

function NoneEmpty(arr) {
    return arr.indexOf("") === -1;
}