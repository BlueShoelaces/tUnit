Macro.add("assert-equals", {
    handler : function () {
        let expected = this.args[0];
        let actual = $("<div/>").wiki(this.args[1]).html();

        if (expected == actual) {
            State.variables.tempOutput = "Passed!";
        } else {
            State.variables.tempOutput = "Failed: expected " + expected + " but was " + actual + ".";
        }
    }
});