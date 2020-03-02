//Declerations
let input = prompt("Vul hier uw emailadres in.", "example@gmail.com");
if (input !== null) {
  if (input !== "") {
    if (
      input.includes("@") &&
      input.includes(".") &&
      input.includes(" ") == false
    ) {
      if (input.indexOf("@") >= 2) {
        document.write("Ziet er goed uit!");
      } else document.write(" Er moeten minstens 2 tekens voor de @ staan");
    } else document.write("Dit lijkt geen correct emailadres te zijn!");
  } else document.write("U heeft niets ingevuld");
} else document.write("U heeft geanuleerd");
