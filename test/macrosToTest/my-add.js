Macro.add("my-add", {
    handler: function () {
        new Wikifier(this.output, this.args[0] + this.args[1]);
    }
});