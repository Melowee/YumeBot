function leave(message, args, vars){
    const connection = message.guild.voiceConnection;

    if(connection){
        connection.disconnect();
        message.reply('Jui pu là :(');
    }else{
        message.reply('Jui pas co gros con');
    }
}

module.exports = leave;