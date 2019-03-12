const Command = require('../classes/Command');

class FillCommand extends Command{
    constructor(){
        super({
            name: 'fill',
            group: 'util',
            description: 'Envoie le nombre de messages indiqués dans le salon'
        });
    }

    run(message, args, vars){
        if (args[1]){
            args.shift();
            let n = args.shift();
            let msg = args.join(' ');
    
            for(let i = 0; i < n; i++){
                if (msg.length > 0){
                    message.channel.send(msg)
                }else{
                    message.channel.send('Message n°' + (i+1));
                }
            }
        }else{
            message.reply('usage : yume fill <nbOfMessage> [text]');
        }
    }
}

module.exports = FillCommand;