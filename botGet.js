var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

//  search twitter for all tweets containing the word 'banana' since July 11, 2011

var params = {
    q: 'banana since:2011-07-11', 
    count: 3
};

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
    var tweets = data.statuses;
    var tweetsCount = tweets.length;
    for( var i = 0; i < tweetsCount ; i++ ){
        console.log( tweets[i].text );
    }
}