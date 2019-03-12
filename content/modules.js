const commands = {
    animelist: new (require('./commands/animelist'))(),
    poke: new (require('./commands/poke'))(),
    nuke: new (require('./commands/nuke'))(),
    say: new (require('./commands/say'))(),
    allan: new (require('./commands/allan'))(),
    fill: new (require('./commands/fill'))(),
    chiante: new (require('./commands/chiante'))(),
    join: new (require('./commands/join'))(),
    leave: new (require('./commands/leave'))()
}

const events = {
    reponseCasseCouilles: require('./events/reponseCasseCouilles')
}

module.exports = {
    commands: commands,
    events: events
}