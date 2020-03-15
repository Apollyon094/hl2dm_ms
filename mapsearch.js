const ht = require("http");
const fs = require("fs");
const rl = require("readline-sync");
const sh = require("sha256");

function repeat(func, times) {
    func();
    times && --times && repeat(func, times);
}

const name = rl.question("Enter a map name. \n");
const fastdls = ["http://fusionheadweb.site.nfoservers.com/maps/", "http://gawp.fastdl.scorpex.org/maps/", "http://outlaw.fastdl.scorpex.org/maps/", "http://clans.playugh.com/66f1190c/hl2dm/maps/"];
var cheese = 0;

const file = fs.createWriteStream("./" + name + "_" + sh(fastdls[0]) + ".bsp.bz2");

function request(foo, bar) {
	ht.get(fastdls[foo] + bar +  ".bsp.bz2", function(response) {
		response.pipe(file);
		console.log("File found from " + fastdls[foo] + "!");
	})
}

function mycodeisreallyterrible() {
	const file = fs.createWriteStream("./" + name + "_" + sh(fastdls[cheese]) + ".bsp.bz2");
	request(cheese, name);
	cheese++;
}

const whatever = fastdls.length - 1

repeat(mycodeisreallyterrible, whatever);
