/* Fabrique index.html : index.template.html + la partition « Grille cool de Dorian » (partition.musicxml) intégrée en base64.  Usage : node construire.js */
const fs = require('fs');
const b64 = fs.readFileSync(__dirname + '/partition.musicxml').toString('base64');
fs.writeFileSync(__dirname + '/index.html', fs.readFileSync(__dirname + '/index.template.html', 'utf8').replace('__PARTITION_B64__', b64));
console.log('index.html écrit');
