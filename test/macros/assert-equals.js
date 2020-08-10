Macro.add("assert-equals", {
    handler : function () {
        var expected = this.args[0];
        var actual = this.args[1];

        if (expected === actual) {
            this.args[2].push("Passed!");
        } else {
            this.args[2].push("Failed :(");
        }
    }
});