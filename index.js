const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = process.env.prefix

const moment = require("moment");

client.on('ready', () => {

  console.log(`Logged in as ${client.user.tag}!`);

});

client.on("message", message => {

  if(message.content.startsWith("Wstaff")) {

        if(!message.channel.guild) return;

                if(message.author.bot) return;

                const channel =message.guild.channels.cache.find(channel => channel.name === "staff")//نـاوی ژورەکە دانـێ کە بـتوانن کوماندەکە بـەکار بێنن

            if(!channel) {return message.channel.send(`تاقیکردنەوە`)}

            message.channel.send('ناوت چیە؟ ').then( (m) =>{

                      setTimeout(() => {

                        m.delete()

                      }, 10000);

              m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m1) => {

                  m1 = m1.first();

                  var name = m1.content;

                  m1.delete();

                  message.channel.send('تەمەنت چەندە؟ ').then( (m) =>{

                      setTimeout(() => {

                        m.delete()

                      }, 10000);

                      m.channel.awaitMessages( m2 => m2.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m2) => {

                          m2 = m2.first();

                          var age = m2.content;

                          m2.delete()

                          message.channel.send('ماوەی چەندە لە دیسکۆردی؟ ').then( (m) =>{

                            setTimeout(() => {

                              m.delete()

                            }, 10000);

                            m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m3) => {

                                m3 = m3.first();

                                var date = m3.content;

                                m3.delete();

                                message.channel.send('شارەزاییت لە چ شتێلی کاروباری ستاف هەیە؟ ').then( (m) =>{

                                  setTimeout(() => {

                                    m.delete()

                                  }, 10000);

                                  m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m4) => {

                                      m4 = m4.first();

                                      var reason = m4.content;

                                      m4.delete();

                                      message.channel.send('دەتوانی ڕۆژانە بۆ ماوەی چەند ئەکتیڤ بیت؟ ').then( (m) =>{

                      setTimeout(() => {

                        m.delete()

                      }, 10000);

                                        m.channel.awaitMessages( m1 => m1.author == message.author,{ max: 1, time: 60*1000 } ).then ( (m5) => {

                                            m5 = m5.first();

                                            var time = m5.content;

                                            m5.delete();

                      message.channel.send('__**سـیڤیەکەت نـێردرا بـەرێزم :** __')

                      .then( (mtime)=>{

                        setTimeout(() => {

                          let embed = new Discord.MessageEmbed()

                          .setAuthor(message.author.username, message.author.avatarURL()) 

                          .setColor('#RED')

                        .setTitle(`It's your cv **${message.author.tag} **`)

                        .addField('> \` نـاوت:\`', ` ** ${name} ** ` , true)

                        .addField('> \`تـەمەن :\`', ` ** ${age} ** ` , true)

                        .addField('> \` مـاوەی جـەندە لـە دیـسکوردی : \`',`** ${date} ** ` , true)

                        .addField('> \`لـە ج شـتێکی کـاروباری سـتاف شـارەزایت هـەیە\` ',` ** ${reason} ** ` , true)

                        .addField('> \`روژانـە دەتـوانی بـو مـاوەی جـەند ئـەکتیف بـی لـە سـتاف :\`',` ** ${time} ** ` , true)

                        .addField('> \`__**ســیفیەکەت بــبینەوە بـەرێزم**__\`',` \`${message.author.createdAt} \` ` , true)

                        channel.send(embed)

                        }, 2500);

                        setTimeout(() => {

                          mtime.delete()

                        }, 3000);

                        setTimeout(() => {

                          message.delete()

                        }, 3000);

                  })

                })

                })

              })

            })

          })

        })

        })

              })

          })

        })

    

}

});

client.on('message',async message => {

  let mention = message.mentions.members.first();

  if (message.content.startsWith(prefix + "yas")) {

  if(!message.channel.guild) return;

  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;

  const reRoom = message.guild.channels.cache.find(channel => channel.name === "staff-wargera"); /// نـاوی ژورەکە

  if (!reRoom) return message.channel.send(`staff-wargera`)//نـاوی ژورە قـەبولنەکراوەکە

  if(!mention) return message.reply("تـکایە تـاکی کـە (@)"); //دەستکاری ئەمە مەە

 

  reRoom.send(`< بەخێربێیت، تۆ وەک ستاف پەسەند کرايت بڕۆ ڤۆيس بۆ زانینی ياساكان و وەرگرتنی ڕۆڵ و زانیاریەکان   \n ${mention} - :partying_face: `)

  }

     });

client.on('message',async message => {

  let mention = message.mentions.members.first();

  if (message.content.startsWith(prefix + "no")) {

  if(!message.channel.guild) return;

  if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return;

  const reRoom = message.guild.channels.cache.find(channel => channel.name === "staff-nawargera"); /// نـاوی ژورەکە

  if (!reRoom) return message.channel.send(`staff-nawargera`)//نـاوی ژورە قـەبولنەکراوەکە

  if(!mention) return message.reply("تـکایە تـاکی کـە (@)"); //دەستکاری ئەمە مەە

 

  reRoom.send(`> بـبورە تـو نەهاتیە قـەبولکردن  \n ${mention} - :pleading_face: `)

  }

});

require('./server')();

client.login(process.env.token);

///token la secren dane

///preix la shweni token dane 
