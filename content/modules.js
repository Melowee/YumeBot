const commands = {
    animelist: require('./commands/animelist'),
    poke: require('./commands/poke'),
    nuke: require('./commands/nuke'),
    say: require('./commands/say'),
    allan: require('./commands/allan'),
    fill: require('./commands/fill'),
    chiante: require('./commands/chiante'),
    join: require('./commands/join'),
    leave: require('./commands/leave')
}

const events = {
    reponseCasseCouilles: require('./events/reponseCasseCouilles')
}

module.exports = {
    commands: commands,
    events: events
}