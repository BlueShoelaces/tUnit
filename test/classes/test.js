window.Test = function (name, payload) {
	this.name = name;
	this.payload = payload;
};

Test.prototype.run = function () {
	for (var i = 0; i < this.payload.length; i++) {
		return Dialog.wiki(this.payload[i].contents);
	};
};

Test.prototype.clone = function () {
	return new Test(
		this.name,
		this.payload
	);
};

Test.prototype.toJSON = function () {
	return JSON.reviveWrapper(String.format(
		'new Test({0},{1},{2},{3})',
		JSON.stringify(this.name),
		JSON.stringify(this.payload)
	));
};