const { REST, Routes }  = require('discord.js');

const CLIENT_ID = '1202516822104997949';

const commands = [
  {
    name: 'ping',
    description: 'Replies with Pong!',
  },
];

const rest = new REST({ version: '10' }).setToken('MTIwMjUxNjgyMjEwNDk5Nzk0OQ.GTK3ZW.B5R-V0nIr8w4d62F5TpN96AR6pnBm_zQGRwuiM');

(async()=>{
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
      } catch (error) {
        console.error(error);
      }
})();