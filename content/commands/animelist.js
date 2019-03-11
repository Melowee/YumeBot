const HTTP = require('follow-redirects').http;

function animelist(message, args, vars){
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
      body = '';
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

module.exports = animelist;