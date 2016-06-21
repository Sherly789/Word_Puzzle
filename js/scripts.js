

$(document).ready(function() {
  $("#blankform form").submit(function(event) {
    event.preventDefault();

    var inputs = $("input#input").val().toLowerCase().split("");

    var outputs = inputs.map(function(input) {
      if (input === "a" || input === "e" || input === "i" || input === "o" || input === "u") {
        return "-";
      } else {
        return input;
      }
    });

    $("#output ul").append(outputs.join(""));
  });
});
