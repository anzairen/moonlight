var card_table_class = "card";

// ƒVƒƒƒbƒtƒ‹‚Ì“®ì
Array.prototype.shuffle = function() {
	var x = this.length;
	while (x) {
		var y = Math.floor(Math.random() * x);
		var t = this[--x];
		this[x] = this[y];
		this[y] = t;
	}
	return this;
}

var random = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
		17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,
		35, 36);

num = random.shuffle();
var r = -1;
var card_td = new Array();
for (var i = 0; i <= 5; i++) {
	card_td[i] = new Array();
	for (var j = 0; j <= 5; j++) {
		r++;
		card_td[i][j] = num[r];

	}
}