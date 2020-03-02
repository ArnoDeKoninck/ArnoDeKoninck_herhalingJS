let names = new Array();

function ingeven() {
  let input = prompt("Geef de naam van de cursist in. (0 om te stoppen).");
  if (input !== null && input !== "") {
    if (input === "0") {
      document.write("U bent gestopt met cursisten ingeven.");
      tonen();
    } else {
      names.push(input);
      ingeven();
    }
  } else alert("U heeft niets ingevuld of geanuleerd");
}
function tonen() {
  if (names.length !== 0) {
    document.write("<br>Dit zijn de cursisten: <br>");
    for (let i = 0; i < names.length; i++) {
      document.write(names[i] + "<br>");
    }
  } else document.write("<br>Er zijn geen cursisten ingegeven.");
}

ingeven();
