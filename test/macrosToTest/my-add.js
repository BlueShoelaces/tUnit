Macro.add("my-add", {
    handler: function () {
        console.log("add args[0] = " + this.args[0]);
        console.log("add args[1] = " + this.args[1]);
        new Wikifier(this.output, this.args[0] + this.args[1]);
    }
});