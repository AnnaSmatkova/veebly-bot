import DiscordJS, { Intents, Message, TextChannel } from 'discord.js';
import dotenv from 'dotenv';

dotenv.config();

const client = new DiscordJS.Client({
    presence: {
        status: 'online',
        activities: [
            {
                name: "Veebly.net",
            }
        ]
    },
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_PRESENCES,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_INTEGRATIONS
    ]
});

client.on("ready", () => {
    console.log("I'm ready");
})

client.on("guildMemberAdd", member => {
    const role = member.guild.roles.cache.find(role => role.name === "╘ Member");

    if (role) {
        member.roles.add(role);
    } else {
        console.log("Role not found");
    }


  if(member.guild.id === "950056589757403158") {
    const channel = client.channels.cache.get("950070877679128578");
    const message = `Welcome ${member.user.username}`;

    console.log(message);

    let embed = new DiscordJS.MessageEmbed()
        .setTitle(message)
        .setColor("#34ACB6")
        .setFooter({text: "mc.veebly.net"});

    if ( channel ) {
        channel.send({ embeds: [embed] });
    }
  }
})

client.on("message", message => { 
  if (message.content === "ping") {
     message.channel.send("pong")

}

if (message.content === "nevies") {
  let embed = new DiscordJS.MessageEmbed()
  .setTitle("Rules")
  .setDescription("• Server managment reserves the right to ban someone without notice\n• [ GDPR ] All data from the servers are being saved\n• It is not allowed to defame the players or members of our team\n• We do not refund the money\n• It is not allowed to damage server in any way ( DDoS, Bot Attack etc. )\n• It is disallowed to manipulate with an account of other player\n• Player is obliged to report the bug they found, not use it in their profit\n• It is disallowed to use hack client! Minimap is allowed\n• Everyone is obliged to follow the same rules regardless of their rank.")
  .setColor("RED")
  .setFooter({text: "Breaking of rules is punishable by ban"});

  message.channel.send({ embeds: [embed] });

}
if (message.content === "!ip") {
  let embed = new DiscordJS.MessageEmbed()
  .setTitle("mc.veebly.net")
  .setDescription("")
  .setColor("#34ACB6")
  .setFooter({text: "mc.veebly.net"});

  message.channel.send({ embeds: [embed] });  
}

})

client.login(process.env.VEEBLY_TOKEN);
