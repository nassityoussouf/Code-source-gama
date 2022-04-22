const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "?"
const canvas = require("canvas")


Client.on("ready", () => {
    console.log("le bot est ALLUMÉ!!");
});

Client.on("messageCreate", message => {
    // m!ping
    if(message.content === prefix + "ping"){
        message.channel.send(":Panda:");
    }
    //?help

    else if (message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
         .addField("`?help`","Donne toutes les infos de commandes ")
         .addField("?mes créateurs","regarde mes créateurs")
         .setDescription("bonjour, :Meme: ici il y a toutes les commandes du bot, n'hésite pas à l'inviter!")
         .setColor("#00f7ff")  
         .setTitle('🕋 Les commandes du bot');
        message.channel.send({ embeds: [embed]})
    }
});

Client.on("messageCreate", message => {
    if(message.content === prefix + "info-bot"){
        const embed = new Discord.MessageEmbed()
        .setTitle("Information du bot")
    }
});


Client.on("guildMemberRemove", member => {
    console.log("un membre viens de sortir");
});

Client.on("message", message => {
    if(message.author.bot)return;
    if(message.channel.type == "dm")return;

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first()

            if(mention == undefined)(
            message.channel.send("**⚠ Oups... Une erreur s'est produite!** ||Veuillez voir si le membre et la raison ont été bien mentionné(s)||"))
        }
        else{
            mention.ban();
            message.channel.send(mention.displayName + "à bien été banni!")
        }
    } 
});









Client.on("messageCreate", message => {
    if(message.content === prefix + "prefix" + client.on("message", (msg) => {
        
    })){
        const embed = new Discord.MessageEmbed()
        .setDescription("le prefix est maintenant " + '`' + message + '`')
        prefix = message
    }
});



Client.on("messageCreate", message => {
    if(message.content === 'Pls button'){
        var row = new Discord.MessageActionRow()
        .addComponents(new Discord.MessageButton()
            .setCustomId('Button1')
            .setLabel('Test')
            .setStyle('DANGER')
            .setEmoji(':Panda:')
        );
    
        message.channel.send({content: 'message avec button', components: [row]});
    }
})

Client.login(token)
