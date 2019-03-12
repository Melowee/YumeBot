const consts = require('../consts');
const Command = require('../classes/Command');

class AllanCommand extends Command{
    constructor(){
        super({
            name: 'allan',
            group: 'troll',
            description: 'Message communiste personnalisé pour Allan'
        });
    }

    run(message, args, vars){
        message.channel.send('<@' + consts.connards.allan + '> La nuit, les lumières réchauffent le coeur des travailleurs fatigués.');
    }
}

module.exports = AllanCommand;