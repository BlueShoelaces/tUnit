Macro.add("test", {
    tags: null,
    handler : function () {
        var testName = this.args[0];

        State.variables.tests.push(new Test(testName, this.payload));
    }
});