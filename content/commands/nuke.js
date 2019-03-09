function nuke(message, args){
    if(args[1]){
        message.channel.fetchMessages({ limit : args[1] }).then((messages) => {
            message.channel.bulkDelete(messages).catch('error');
        });
    }else{
        message.reply('usage : yume nuke <nbNukedMessages>');
    }
}

module.exports = nuke;