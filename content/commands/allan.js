const consts = require('../consts');

function allan(message, args){
    message.channel.send('<@' + consts.connards.allan + '> La nuit, les lumières réchauffent le coeur des travailleurs fatigués.');
}

module.exports = allan;