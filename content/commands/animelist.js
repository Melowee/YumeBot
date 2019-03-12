const Command = require('../classes/Command');
const HTTP = require('follow-redirects').http;

class AnimelistCommand extends Command{
  constructor(){
    super({
      name: 'animelist',
      group: 'util',
      description: 'Affiche la liste d\'animes de l\'utilisateur indiqué'
    });
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
          message.reply('Ca marche');
          console.log(body);
        })
      })
    }else{
      message.reply('usage : yume animelist <user>');
    }
  }
}

module.exports = AnimelistCommand;