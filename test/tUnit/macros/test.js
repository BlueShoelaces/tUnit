Macro.add("test", {
    tags: null,
    handler : function () {
        var numberOfArguments = this.args.length;
        var optionalSecondParameter;
        if (numberOfArguments > 1) {
            optionalSecondParameter = this.args[1];
            if (optionalSecondParameter == "focus") {
                State.variables.weAreFocusing = true;
            }
        }

        var testName = this.args[0];

        State.variables.tests.push(new Test(testName, this.payload, optionalSecondParameter));
    }
});