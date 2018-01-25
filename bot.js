const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'fox!owo') {
    	message.reply('what's this?');
  	}
});

client.on('message', message => {
    if (message.content === 'fox!toiletpaper') {
    	message.reply('Tide pods are the best invention since toilet paper');
  	}
});

client.on('message', message => {
    if (message.content === 'fox!labo') {
    	message.reply('Did you know that Nintendo has ran out of ideas? <:labo_man:405820609948286976>');
  	}
});

client.on('message', message => {
    if (message.content === 'fox!credits') {
    	message.reply('Credits for coding this entire bot & hosting it goes to Korvby#6903. The owner is VioletTheFox#4335, and he made the ideas for commands.');
  	}
});

client.on('message', message => {
    if (message.content === 'fox!hell') {
    	message.reply('Hell is a nice placy, you should definitely visit.');
  	}
});

client.on('message', message => {
    if (message.content === 'fox!nou') {
    	message.reply('No u');
  	}
});

client.on('message', message => {
    if (message.content === 'fox!oneshot') {
    	message.reply('Not with that aim');
  	}
});

client.on('message', message => {
    if (message.content === 'fox!gay') {
    	message.reply("You're mom gay");
  	}
});

client.on('message', message => {
    if (message.content === 'fox!nohomo') {
    	message.reply('You are homo, stop lying');
  	}
});

client.on('message', message => {
    if (message.content === 'fox!ugly') {
    	message.reply('no ugly people allowed in this server');
  	}
});

client.on('message', message => {
    if (message.content === 'fox!commands') {
    	message.reply('credits, ugly, gay, owo, nou, hell, toiletpaper, labo, nohomo, oneshot: prefix is fox!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
