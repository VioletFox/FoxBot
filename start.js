const Discord = require("discord.js");
const client = new Discord.Client();

commands = {
  '!video': {
    execute: getVideo,
    description: 'get a youtube video by search word'
  },

const config = require("./config.json")

client.on("ready", () => {
	console.log(`Foxbot is ready to bite`);
	client.user.setActivity(`why?`);
});

client.on("message", message => {
	if (message.author.bot) return;
	if(message.content.indexOf(config.prefix) !==0) return; 
	
	const args = message.content.slice(config.prefix.length).trim().split(/ +/g)
	const command = args.shift().toLowerCase();

	try {
		let commandFile = require(`./${command}.js`);
		commandFile.run(client, message, args);
	} catch (err) {
		console.error(err);
	}
});

client.login(process.env.BOT_TOKEN);
