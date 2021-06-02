module.exports = {
    name: 'start_event',
    description: 'Empezar un evento',
    execute(msg, args) {
        if (msg.member.hasPermission('ADMINISTRATOR')) {
            let preMsg = msg.content.split('start_event');
            preMsg.shift();
            if (NoneEmpty(preMsg)) {
                console.log(preMsg)
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