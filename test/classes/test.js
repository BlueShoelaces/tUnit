window.Test = function (name, testPassage) {
	this.name = name;
	this.testPassage = testPassage;
};

Test.prototype.run = function () {
	return Dialog.wiki(Story.get(this.testPassage).processText());
}

Test.prototype.clone = function () {
	return new Test(
		this.name,
		this.testPassage
	);
};

Test.prototype.toJSON = function () {
	return JSON.reviveWrapper(String.format(
		'new Test({0},{1},{2},{3})',
		JSON.stringify(this.name),
		JSON.stringify(this.testPassage)
	));
};