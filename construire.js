/* Fabrique index.html : index.template.html + la partition « Grille cool de Dorian » (partition.musicxml) intégrée en base64.  Usage : node construire.js */
const fs = require('fs');
const b64 = fs.readFileSync(__dirname + '/partition.musicxml').toString('base64');
const crypto = require('crypto'), vers = f => crypto.createHash('md5').update(fs.readFileSync(__dirname + '/' + f)).digest('hex').slice(0, 8);   // version d'un script = empreinte de son contenu : le navigateur recharge un script dès qu'il change
fs.writeFileSync(__dirname + '/index.html', fs.readFileSync(__dirname + '/index.template.html', 'utf8').replace(/(\b[A-Za-z_0-9]+\.js)\?v=[A-Za-z0-9]*/g, (m, f) => fs.existsSync(__dirname + '/' + f) ? f + '?v=' + vers(f) : m).replace('__PARTITION_B64__', b64));
console.log('index.html écrit');
