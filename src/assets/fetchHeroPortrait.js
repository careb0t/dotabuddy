var fs = require('fs')
var heroList = require('./heroList.json')

function fetchHeroPortraits() {
    for (i=0; i<heroList.heroes.length; i++) {
        heroList.heroes[i].portrait = 'http://cdn.dota2.com/apps/dota2/images/heroes/' + heroList.heroes[i].name + '_vert.jpg'
    }
}

fetchHeroPortraits()

fs.writeFile('./src/assets/heroListNew.json', JSON.stringify(heroList, null, 2), function (err) {
    if (err) return console.log(err);
    console.log(JSON.stringify(heroList, null, 2));
    console.log('writing to ' + './heroListNew.json');
  });