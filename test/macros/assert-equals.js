Macro.add("assert-equals", {
    handler : function () {
        var expected = this.args[0];
        var actual = this.args[1];

        if (expected === actual) {
            State.variables.output.push("Passed!");
        } else {
            State.variables.output.push("Failed :(");
        }
    }
});