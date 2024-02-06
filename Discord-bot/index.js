const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages] });

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
   
        message.reply({
            content: 'oye bsdke gali mt de',
        })
})

client.on('interactionCreate', (interection) => {
    interection.reply("Pong!!");
})

client.login('MTIwMjUxNjgyMjEwNDk5Nzk0OQ.GTK3ZW.B5R-V0nIr8w4d62F5TpN96AR6pnBm_zQGRwuiM')

