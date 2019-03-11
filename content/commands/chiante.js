function chiante(message, args, vars){
    if (vars.chiante){
        vars.chiante = false;
        message.reply('Mode chiante désactivé.');
    }else{
        vars.chiante = true;
        message.reply('Mode chiante activé !');
    }
}

module.exports = chiante;