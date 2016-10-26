var Twitter = require("twitter");

var twitter_client = new Twitter({
		consumer_key: process.env.TWITTER_CONSUMER_KEY,
		consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
		access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
		access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
	});

var count = 0;
var keywords = ['google', 'amazon', 'microsoft', 'facebook', 'tesla']

var english = /^[\s\w\d\?><;,\{\}\[\]\-_\+=!@\#\$%^&\*\|\']*$/;

var stream = twitter_client.stream('statuses/filter', {track: keywords.join(',')});
stream.on('data', function(event) {
  if (english.test(event.text)){
  	console.log(event.text);
  	count++;
  }
});
 
stream.on('error', function(error) {
  throw error;
});



