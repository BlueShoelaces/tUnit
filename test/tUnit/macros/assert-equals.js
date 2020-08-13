Macro.add("assert-equals", {
    handler : function () {
        let expected = this.args[0];
        // var actual = this.args[1];
        let actual = $("<div/>").wiki(this.args[1]).html();

        
        console.log("this.args[0] = " + expected);
        console.log("this.args[1] = " + actual);

        if (expected == actual) {
            State.variables.tempOutput = "Passed!";
        } else {
            State.variables.tempOutput = "Failed: expected " + expected + " but was " + actual + ".";
        }
    }
});