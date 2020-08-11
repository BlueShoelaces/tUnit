Macro.add("assert-equals", {
    handler : function () {
        var expected = this.args[0];
        var actual = this.args[1];

        if (expected === actual) {
            State.variables.tempOutput = "Passed!";
        } else {
            State.variables.tempOutput = "Failed: expected " + expected + " but was " + actual + ".";
        }
    }
});