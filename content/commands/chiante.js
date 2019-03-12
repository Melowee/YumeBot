const Command = require('../classes/Command');

class ChianteCommand extends Command{
    constructor(){
        super({
            name: 'chiante',
            group: 'troll',
            description: 'Le bot devient chiante et dit de la merde dès que quelqu\'un écrit un truc'
        });
    }

    run(message, args, vars){
        if (vars.chiante){
            vars.chiante = false;
            message.reply('Mode chiante désactivé.');
        }else{
            vars.chiante = true;
            message.reply('Mode chiante activé !');
        }
    }
}

module.exports = ChianteCommand;