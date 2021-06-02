const eventCommands = require('../../database/eventCommands.js');
const eventImg = 'https://media.discordapp.net/attachments/837604983838474292/849694718727946240/4Io-MD_r.png';

module.exports = {
    name: 'last_event',
    description: 'Obtener la información del último evento creado',
    execute(msg, args) {
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            eventCommands.getLastEvent(function (event) {
                // Send last created event information
                msg.channel.send({embed: {
                    color: 6205295,
                    title: event.title,
                    description: "Evento #" + event.id,
                    fields: [
                        {
                            name: "Descripción",
                            value: event.description
                        },
                        {
                            name: "Duración",
                            value: event.duration
                        },
                        {
                            name: "Jugadores",
                            value: event.players
                        }
                    ],
                    thumbnail: {url: eventImg},
                }});
                msg.delete();
            });
        } else {
            msg.channel.send(`No tienes los permisos suficientes para ejecutar ese comando <@${msg.author.id}>`);
        }
    },
};