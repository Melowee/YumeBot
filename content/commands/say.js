function say(message, args, vars){
    if (args[1]){
        args.shift();
        let sayMessage = args.join(' ');

        message.channel.send(sayMessage);
    }else{
        message.reply('usage : yume say <message>');
    }
}

module.exports = say;