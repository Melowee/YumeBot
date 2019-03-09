const { Client, RichEmbed, Attachment } = require('discord.js');
const YTDL = require('ytdl-core');
const client = new Client();

const commands = require('./content/modules');
const consts = require('./content/consts');

const menMEN = "https://www.youtube.com/watch?v=wd9PVqYelhI";

let queue = [];
let dispatcher;

let chiante = false;

function join(message){
	const channel = message.member.voiceChannel;

  	if(message.member.voiceChannel){
  		if(!message.guild.voiceConnection){
		    channel.join()
		    .then(connection => message.reply("Jui là :)"))
		    .catch(console.error);
		}
	}else{
		message.reply("Jui pas co gros con");
	}
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

function reponseCasseCouilles(message){

	switch (message.author.id){
		case connards.allan:
			message.reply("Regarde Mob Psycho");
			break;
		case connards.fabien:
			message.reply("Tiens un monocycle");
			break;
		case connards.clement:
			message.reply("Tg");
			break;
		case connards.peru:
			message.reply("Regarde Hunter x Hunter");
			break;
		case connards.romain:
			message.reply("Regardez un gros con qui parle");
			break;
		case connards.sebastien:
			message.reply("Je sens qu'il a du pif celui là !");
		default:
			message.reply("Inconnu au bataillon celui-là");
	}
}

client.on('ready', () => {
  console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  client.user.setActivity('se faire développer');
});

client.on('message', async message => {
  if(message.author.bot) return;

  if(chiante){
  	reponseCasseCouilles(message);
  }

  if(message.content.indexOf('yume') !== 0) return;

/*
  const args = message.content.slice(4).trim().split(/ +/g);
  console.log(args);
  const command = args.shift().toLowerCase();
*/
	message.delete().catch(O_o=>{});


	const args = message.content.split(' ');
	console.log(args);
	args.shift()
	command = args[0];
	console.log("Commande : " + command);


  if(command === "men"){
	 join(message);
	 queue.push(menMEN);
	 if(!dispatcher){
		play(message.guild.voiceConnection, message);
	}
   const attachment = new Attachment('yume_contents/mentransparent.png');
   const embed = new RichEmbed()
      .setTitle('Meeeeeenn')
      .setColor(0xFF0000)
      .setImage('https://dauchez-clement-portfolio.000webhostapp.com/private/fichiersdivers/mentransparent.png');
    message.channel.send(embed);
  }

  if (command === "join"){
  	join(message);
  }

  if (command === "leave"){
  	if(message.guild.voiceConnection){
  		message.guild.voiceConnection.disconnect();
  		message.reply("Jui pu là :(");
  	}else{
  		message.reply("Jui pas co gros con");
  	}

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

  if (command === "chiante"){
  	if (chiante){
  		chiante = false;
  		message.reply("Mode chiante désactivé.");

  	}else{
  		chiante = true;
  		message.reply("Mode chiante activé !");
  	}
  }


	if (commands[command]){
		commands[command](message, args);
		message.reply('je connais');
	}else{
		message.reply('je connais pas');
	}

});

client.login(consts.token);
