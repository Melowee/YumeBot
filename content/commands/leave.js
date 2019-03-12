const Command = require('../classes/Command');

class LeaveCommand extends Command{
    constructor(){
        super({
            name: 'leave',
            group: 'voice',
            description: 'Quitte le salon vocal si il est connecté quelque part (pas con hein)'
        });
    }

    run(message, args, vars){
        const connection = message.guild.voiceConnection;
    
        if(connection){
            connection.disconnect();
            message.reply('Jui pu là :(');
        }else{
            message.reply('Jui pas co gros con');
        }
    }
}

module.exports = LeaveCommand;