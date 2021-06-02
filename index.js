require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();
const botCommands = require('./commands');

Object.keys(botCommands).map(key => {
    bot.commands.set(botCommands[key].name, botCommands[key]);
});

const TOKEN = process.env.TOKEN;
const PREFIX = process.env.PREFIX + ' ';

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    if (!msg.content.startsWith(PREFIX) || msg.author.bot) return;

    const args = msg.content.slice(PREFIX.length).split(' ');
    const command = args.shift();
    console.info(`Called command: ${command}`);
    
    if (!bot.commands.has(command)) return;

    try {
        bot.commands.get(command).execute(msg, args);
    } catch (error) {
        console.error(error);
        msg.reply('tuve un error al procesar ese comando :slight_frown:');
    }
});
