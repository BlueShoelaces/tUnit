Macro.add("assert-true", {
    handler : function () {
        var actual = this.args[0];
        console.log("What is passed in to assert-true? " + actual);

        if (actual == true) {
            console.log("actual: " + actual + " evaluated to true");
            State.variables.tempOutput = "Passed!";
        } else {
            console.log("actual: " + actual + " evaluated to false");
            State.variables.tempOutput = "Failed: expected true but was " + actual + ".";
        }
    }
});