const Command = require('../classes/Command');

class SayCommand extends Command{
    constructor(){
        super({
            name: 'say',
            group: 'util',
            description: 'Ecris le message précisé par le commandiste'
        });
    }

    run(message, args, vars){
        if (args[1]){
            args.shift();
            let sayMessage = args.join(' ');
    
            message.channel.send(sayMessage);
        }else{
            message.reply('usage : yume say <message>');
        }
    }
}

module.exports = SayCommand;