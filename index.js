
const { Client, Intents} = require('discord.js');
const Discord = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const disbut = require("discord-buttons")
disbut(client)
client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`)
  })
  
  client.on('message', (msg) => {
    if (msg.content === '.buy') {
      if(msg.channel.parent.id === "932025827229569064") {
       
  let Embed = new Discord.MessageEmbed()
  .setTitle("Price: 15$ EUR")
  .setColor("BLUE")
  .setDescription("**Payment Method:**")


  let pp = new disbut.MessageButton()
  .setStyle('LINK')
  .setEmoji('<:pp:970377689519243374>')
  .setURL("https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=NGL8FRZ83R4YS")



  let btc = new disbut.MessageButton()
  .setStyle('PRIMARY')
  .setEmoji('<:btc:970377940430884876>')
  .setID('bitcoin')



  let eth = new disbut.MessageButton()
  .setStyle('PRIMARY')
  .setEmoji('<:eth:970378030008643705>')
  .setID('etherium')


  msg.channel.send(Embed, { 
    buttons: [Embed, pp, btc, eth]
  
      })
    }
       
    }
  })




    let timero2 = true;
  client.on('clickButton', async (button) => {
    if (button.id == "bitcoin") {
      if (timero2 == true) {
        let embedBTC = new Discord.MessageEmbed()
        .setTitle("bc1qydqs36wxlx5l7av26d0g64ak3728kkrfwq7vac")
        .setColor("ORANGE")

      button.channel.send(embedBTC)
      timero2 = false;
      setTimeout(() => timero2 = true, 5000)
      }
    }})



    let timero3 = true;
  client.on('clickButton', async (button) => {
    if (button.id == "etherium") {
      if (timero3 == true) {
        let embedBTC = new Discord.MessageEmbed()
        .setTitle("0xF6c1b3198Efc9bAca29D07B1AC547B227FA88D2D")
        .setColor("#6421ff")

      button.channel.send(embedBTC)
      timero3 = false;
      setTimeout(() => timero3 = true, 5000)
      }
    }})



    

client.login("ODUxODYwNDE2MTAzNDQ4NjI2.YL-a1g.WZO_96r1ybWCZMYGfBcqSizZIk0")