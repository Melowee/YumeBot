const Command = require('../classes/Command');

class JoinCommand extends Command{
    constructor(){
        super({
            name: 'join',
            group: 'vocal',
            description: 'Rejoint le salon vocal du commandiste'
        });
    }

    run(message, args, vars){
        const channel = message.member.voiceChannel;
        if (message.member.voiceChannel){
            channel.join().then(
                message.reply('Jui là :)')
            ).catch('caca')
        }else{
            message.reply('T\'es pas co gros con');
        }
    }
}



module.exports = JoinCommand;