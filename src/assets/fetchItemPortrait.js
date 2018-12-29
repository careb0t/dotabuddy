var fs = require('fs')
var itemList = require('./data/itemList.json')

console.log(itemList.items)

function fetchItemPortraits() {
    for (i=0; i<itemList.items.length; i++) {
        itemList.items[i].portrait = 'http://cdn.dota2.com/apps/dota2/images/items/' + itemList.items[i].name.substr(5) + '_lg.png'
        console.log(itemList.items[i].name.substr(5))
    }
}

fetchItemPortraits()

fs.writeFile('./src/assets/data/itemListNew.json', JSON.stringify(itemList, null, 2), function (err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(itemList, null, 2));
    console.log('writing to ' + './itemListNew.json');
  });