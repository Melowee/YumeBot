const Command = require('../classes/Command');
const Discord = require('discord.js');

class HelpCommand extends Command{
    constructor(){
        super({
            name: 'help',
            group: 'utile',
            description: 'Fournit une aide concernant les diverses commandes disponibles sur ce bot'
        });
    }

    sortCommands(commands){
        let sortedCommands = {}

        for(let command in commands){
            if (sortedCommands[commands[command].group]){
                sortedCommands[commands[command].group].push(commands[command]);
            }else{
                sortedCommands[commands[command].group] = [commands[command]];
            }
        }
        return sortedCommands;
    }

    run(message, args, commands){
        const embed = new Discord.RichEmbed();

        const sortedCommands = this.sortCommands(commands);

        embed.setTitle('Voici de l\'aide pour un connard en détresse');
        embed.setDescription('Wollah si jte croise dans la rue tu vas voir qui c\'est David Lafarge dans la vie réelle');

        for (let group in sortedCommands){
            let commandList = ''
            for (let command in sortedCommands[group]){
                if (commandList != ''){
                    commandList += ', ';
                }
                commandList +=  '``' + sortedCommands[group][command].name + '``';
            }

            embed.addField(group, commandList);
        }

        message.channel.send(embed);
    }
}

module.exports = HelpCommand;