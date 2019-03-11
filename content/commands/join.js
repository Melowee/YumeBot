function join(message, args, vars){
    const channel = message.member.voiceChannel;
    if (message.member.voiceChannel){
        channel.join().then(
            message.reply('Jui là :)')
        ).catch('caca')
    }else{
        message.reply('T\'es pas co gros con');
    }
}

module.exports = join;