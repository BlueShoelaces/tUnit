Macro.add("assert-true", {
    handler : function () {
        var actual = this.args[0];

        if (actual == true) {
            State.variables.tempOutput = "Passed!";
        } else {
            State.variables.tempOutput = "Failed: expected true but was " + actual + ".";
        }
    }
});