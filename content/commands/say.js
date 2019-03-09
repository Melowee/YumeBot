function say(message, args){
    if (args[2]){
        args.shift();
        let sayMessage = args.join(' ');

        message.channel.send(sayMessage);
    }else{
        message.reply('usage : yume say <message>');
    }
}

module.exports = say;