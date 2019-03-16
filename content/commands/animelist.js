const Command = require('../classes/Command');
const HTTP = require('follow-redirects').http;
const Discord = require('discord.js');

class AnimelistCommand extends Command{
  constructor(){
    super({
      name: 'animelist',
      group: 'util',
      description: 'Affiche la liste d\'animes de l\'utilisateur indiqué'
    });
  }

  createEmbed(message, args, data){
    const embed = new Discord.RichEmbed();

    embed.setTitle('Stats Anime de ' + args[1]);
    embed.addField('Animes vus : ', data.finished);
    embed.addField('Animes à voir : ', data.planned);
    embed.addField('Animes en cours : ', data.visionning);
    embed.addField('Animes en pause : ', data.paused);
    embed.addField('Animes abandonnés : ', data.abandonned);
    embed.addBlankField();
    embed.addField('Total animes : ', data.total);
    embed.addField('Temps de visionnage total : ', data.time + '  heures');
    embed.addField('Nombre d\'épisodes : ', data.episodes);

    message.channel.send(embed);
  }

  cutCode(message, args, HTML){
    let stats = HTML.substring(HTML.indexOf("animes-progression"), HTML.indexOf("Dernières entrées"));
    stats = stats.substring(stats.indexOf("soit"));

    let data = {};

    data["time"] = stats.substring(stats.indexOf(" ")+1, stats.indexOf("H"));

    stats = stats.substring(stats.indexOf("strong"));

    data["finished"] = stats.substring(stats.indexOf(">")+1, stats.indexOf("<"));

    stats = stats.substring(stats.indexOf("<strong")+1);

    data["visionning"] = stats.substring(stats.indexOf(">")+1, stats.indexOf("</"));

    stats = stats.substring(stats.indexOf("<strong")+1);

    data["paused"] = stats.substring(stats.indexOf(">")+1, stats.indexOf("</"));

    stats = stats.substring(stats.indexOf("<strong")+1);

    data["abandonned"] = stats.substring(stats.indexOf(">")+1, stats.indexOf("</"));

    stats = stats.substring(stats.indexOf("<strong")+1);

    data["planned"] = stats.substring(stats.indexOf(">")+1, stats.indexOf("</"));

    stats = stats.substring(stats.indexOf("<strong")+1);

    data["total"] = stats.substring(stats.indexOf(">")+1, stats.indexOf("</"));

    stats = stats.substring(stats.indexOf("<strong")+1);
    stats = stats.substring(stats.indexOf("<strong")+1);

    data["episodes"] = stats.substring(stats.indexOf(">")+1, stats.indexOf("</"));

    this.createEmbed(message, args, data);

  }

  run(message, args, vars){
    if(args[1]){
      const options = {
        host: 'anime-gate.net',
        port: 80,
        path: '/profil/' + args[1]
      }
  
  
      const req = HTTP.request(options);
      req.end();
  
      req.on('response', (res) => {
        res.setEncoding('utf-8');
        let body = '';
        res.on('data', (chunk) => {
          body += chunk;
        })
  
        res.on('end', () => {
          //console.log(body);
          this.cutCode(message, args, body);
        })
      })
    }else{
      message.reply('usage : yume animelist <user>');
    }
  }
}

module.exports = AnimelistCommand;