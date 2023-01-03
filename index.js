let request = require('./request.js');
let https = require('https');
let config = require('./config.js');

let url = "https://logowanie.net.uw.edu.pl:6082/php/uid.php?vsys=1&rule=1";

let post = request(config.username, config.password)
let post2 = new URLSearchParams(post).toString()

let options = {
    method: "POST"
}

let req = https.request(url, options, (res) => {
    console.log('statusCode:', res.statusCode)
    console.log('headers:', res.headers)

    res.on('data', (d) => {
        process.stdout.write(d)
    })
})

req.on('error', (e) => {
    console.error(e)
})

req.end(post2)