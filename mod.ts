import { CommandClient, Intents } from './deps.ts';
import { config } from './config.ts';

const client = new CommandClient({
  prefix: '$',
  owners: config.owners,
});

client.on('ready', async () => {
  console.log(`${client.user!.username} is ready on ${await client.guilds.size()} servers`);
  client.setPresence({
    name: 'Light Novels',
    type: 'WATCHING',
  });
});

client.commands.loader.loadDirectory('./commands', { maxDepth: 2 });

client.connect(config.token, Intents.All);
