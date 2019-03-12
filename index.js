const config = require('./config.json');

const { Client, RichEmbed } = require('discord.js');
const YTDL = require('ytdl-core');
const client = new Client();

const botModule = require('./content/modules');
const consts = require('./content/consts');

let queue = [];
let dispatcher;

let vars = {
	chiante: false
}

function play(connection, message){
	dispatcher = connection.playStream(YTDL(queue[0], {filter: "audioonly"}));
	queue.shift();
	dispatcher.on("end", function(){
		if(queue[0]){
			play(connection, message);
		}else{
			queue = [];
			dispatcher = null;
			connection.disconnect();
		}
	})
}

client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity('se faire développer');
});


client.on('message', async message => {
  if(message.author.bot) return;

	botModule.events.reponseCasseCouilles(message, vars);

  if(message.content.indexOf('yume') !== 0) return;

	message.delete().catch(O_o=>{});


	const args = message.content.split(' ');
	console.log(args);
	args.shift()
	command = args[0];
	console.log("Commande : " + command);


  if(command === "men"){
	 join(message);
	 queue.push(consts.menSoundURL);
	 if(!dispatcher){
		play(message.guild.voiceConnection, message);
	}
   const embed = new RichEmbed()
      .setTitle('Meeeeeenn')
      .setColor(0xFF0000)
      .setImage('https://dauchez-clement-portfolio.000webhostapp.com/private/fichiersdivers/mentransparent.png');
    message.channel.send(embed);
  }

  if (command === "play"){
  		join(message);
  		connection = message.guild.voiceConnection;
  		url = args[1];
  		queue.push(url);
  		console.log(queue);
  		if(!dispatcher){
  			play(connection, message);
  		}
	}

  if(command === "skip"){
  	if (dispatcher){
  		dispatcher.end();
  	}
	}
	
	if(botModule.commands[command]){
		botModule.commands[command].run(message, args, vars);
	}else{
		message.reply('jsp');
	}
/*
	if (botModule.commands[command]){
		botModule.commands[command](message, args, vars);
	}else{
		message.reply('je connais pas');
	}
*/
});

client.login(config.token);
