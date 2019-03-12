class Command{
    constructor(attributes){
        this.name = attributes.name;
        this.group = attributes.group;
        this.description = attributes.description;
    }
}

module.exports = Command;