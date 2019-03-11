const consts = require('../consts');

function poke(message, args, vars){
    if (args.length >= 3){
        args.shift();
        let connard = args.shift();
        let sayMessage = args.join(' ');

        message.channel.send('<@' + consts.connards[connard] + '> ' + sayMessage);
    }else{
        message.reply('usage : yume poke <connard> <message>');
    }
}

module.exports = poke;