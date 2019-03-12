const Command = require('../classes/Command');

class NukeCommand extends Command{
    constructor(){
        super({
            name: 'nuke',
            group: 'util',
            description: 'Supprime le nombre de messages indiqué par le commandiste'
        });
    }

    run(message, args, vars){
        if(args[1]){
            message.channel.fetchMessages({ limit : args[1] }).then((messages) => {
                message.channel.bulkDelete(messages).catch('error');
            });
        }else{
            message.reply('usage : yume nuke <nbNukedMessages>');
        }
    }
}


module.exports = NukeCommand;