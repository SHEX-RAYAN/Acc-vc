const api = require("discord.js-selfbot");

const fs = require('fs');

const data = fs.readFileSync('tokens.txt', 'UTF-8');

const lines = data.split(/\r?\n/);

const express = require('express')

const app = express()

 

app.get('/', function (req, res) {

  res.send('Polat')

})

app.listen(3000)

lines.forEach((line) => {

    Hosting(line);

});

function Hosting(token)

{

    const userclient = new api.Client()

    userclient.on("ready", () => {

      function randomStatus() {

        let status = ['on break', 'id hosted', '']

        let rstatus = Mathfloor(Math.random * status.length)

        userclient.user.setActivity("RAYO", {type: "WATCHING"});

      }; setInterval(randomStatus, 10000);

        console.log('Connected: ' + userclient.user.tag);

        const vc = userclient.channels.cache.get('999443380960505956')

        vc.join()

    });

    userclient.login(token);

}

process.on('uncaughtException', function (exception) {

});

process.on('unhandledRejection', error => {

}); 
