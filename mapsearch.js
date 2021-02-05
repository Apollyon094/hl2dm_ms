const ht = require ("http");
const fs = require ("fs");
const rl = require ("readline-sync");
async function repeat (func, times) {
    await func ();
    times && --times && await repeat (func, times);
}
const name = rl.question ("Enter a map name. \n");
const fastdls = ["http://fusionheadweb.site.nfoservers.com/maps/", "http://gawp.fastdl.scorpex.org/maps/", "http://outlaw.fastdl.scorpex.org/maps/", "http://clans.playugh.com/66f1190c/hl2dm/maps/"];
const file = fs.createWriteStream ("./" + name + ".bsp.bz2");
function request (foo, bar) {
	ht.get (fastdls [foo] + bar + ".bsp.bz2", function (response) {
		response.pipe (file);
		console.log ("File found from " + fastdls [foo] + "!");
	})
}
request (0, name);
