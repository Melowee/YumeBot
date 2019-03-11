const consts = require('../consts');

function reponseCasseCouilles(message, vars){
    if (vars.chiante){
        switch (message.author.id){
            case consts.connards.allan:
                message.reply("Regarde Mob Psycho");
                break;
            case consts.connards.fabien:
                message.reply("Tiens un monocycle");
                break;
            case consts.connards.clement:
                message.reply("Tg");
                break;
            case consts.connards.peru:
                message.reply("Regarde Hunter x Hunter");
                break;
            case consts.connards.romain:
                message.reply("Regardez un gros con qui parle");
                break;
            case consts.connards.sebastien:
                message.reply("Je sens qu'il a du pif celui là !");
            default:
                message.reply("Inconnu au bataillon celui-là");
        }
    }
}

module.exports = reponseCasseCouilles;