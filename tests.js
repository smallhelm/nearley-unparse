var test = require("tape");
var grammar = require("./test-grammar");
var unparse = require("./");

test("it", function(t){
  t.equals(unparse(grammar, {
    start: "bar"
  }), "bar");

  t.equals(unparse(grammar, {
    start: "bar",
    override_rule: {bar: function(){return "baz";}}
  }), "baz");

  t.end();
});
