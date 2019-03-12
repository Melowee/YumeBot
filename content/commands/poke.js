const Command = require('../classes/Command');
const consts = require('../consts');

class PokeCommand extends Command{
    constructor(){
        super({
            name: 'poke',
            group: 'util',
            description: 'Mentionne un connard et lui envoie le message du commandiste'
        });
    }

    run(message, args, vars){
        if (args.length >= 3){
            args.shift();
            let connard = args.shift();
            let sayMessage = args.join(' ');
    
            message.channel.send('<@' + consts.connards[connard] + '> ' + sayMessage);
        }else{
            message.reply('usage : yume poke <connard> <message>');
        }
    }
}


module.exports = PokeCommand;