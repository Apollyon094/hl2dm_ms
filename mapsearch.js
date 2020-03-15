const http = require("http");
const fs = require("fs");
const rl = require("readline-sync");

const name = rl.question("Enter a map name. \n");
const fastdls = ["http://fusionheadweb.site.nfoservers.com/maps/", "http://gawp.fastdl.scorpex.org/maps/", "http://outlaw.fastdl.scorpex.org/maps/", "http://clans.playugh.com/66f1190c/hl2dm/maps/"];
const cheese = 1;

const file = fs.createWriteStream("./" + name + ".bsp.bz2");
function request(yeah) {
	http.get(fastdls[yeah] + name + ".bsp.bz2", function(response) {
		response.pipe(file);
		console.log("File found from " + fastdls[cheese] + "!");
	})
}

const file2 = fs.createWriteStream("./" + name + "-temp" + ".bsp.bz2");
function request2(yeah) {
	http.get(fastdls[yeah] + name + ".bsp.bz2", function(response2) {
		response.pipe(file2);
		console.log("File found from " + fastdls[cheese] + "!");
	})
}

request(cheese);

const stats = fs.statSync("./" + name + ".bsp.bz2")
const stats2 = fs.statSync("./" + name + "-temp" + ".bsp.bz2")
const fileSizeInBytes = stats["size"]
const fileSizeInBytes2 = stats2["size"]

if(fileSizeInBytes2 >= fileSizeInBytes) {
	const file3 = fs.createWriteStream("./" + name + ".bsp.bz2");
	function request3(yeah) {
		http.get(fastdls[yeah] + name + ".bsp.bz2", function(response2) {
			response.pipe(file3);
			console.log("File found from " + fastdls[cheese] + "!");
		})
	}
} else {
	cheese++;
	request3(yeah)
}
