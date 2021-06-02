const saludos = [
    [ 'Hola ', '!'],
    [ '¿Cómo va todo ', '? :smile:'],
    [ 'Buenas ', '~'],
    [ 'Hey ', '! :sunglasses:'],
    [ 'Hm... ¿Saludarte ', '? Nah...']
];

module.exports = {
    name: 'saluda',
    description: 'Salúdame!',
    execute(msg, args) {
        let saludoRandom = saludos[Math.floor(Math.random() * saludos.length)];
        msg.channel.send(`${saludoRandom[0]}<@${msg.author.id}>${saludoRandom[1]}`);
    },
};