Macro.add("test", {
    tags: null,
    handler : function () {
        var testName = this.args[0];
        var tests = this.args[1];

        tests.push(new Test(testName, this.payload));
    }
});