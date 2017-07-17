var axios = require('axios');
var md5 = require('md5');

function getMarvelCharacters(key){
    var ts = Date.now();
    var private_key = 'fc77bba6e40243bc554d08073f19b74454c9a84d';
    var public_key = '0b78bc1780065ce276e924699d555b9c';
    var hash = md5(ts+private_key+public_key);
    var keySearch = key;

  if (keySearch) {
    return axios.get("https://gateway.marvel.com/v1/public/characters?apikey="+public_key+"&hash="+hash+'&nameStartsWith='+keySearch);
  }
  else {
    return axios.get("https://gateway.marvel.com/v1/public/characters?apikey="+public_key+"&hash="+hash);
  }
}


var helpers = {
  getMarvelInfo: function(key){
    return axios.all([getMarvelCharacters(key)])
      .then(function(arr){
        return {
          characters: arr[0].data.data.results,
        }
      })
  }
}

module.exports = helpers;
