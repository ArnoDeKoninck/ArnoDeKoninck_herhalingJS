let kostprijs = parseInt(prompt("Wat is de Kostprijs?", "10"));
let btw = parseFloat((prompt("Wat is het btw percentage in %?"), "12") / 100);
let aantal = parseInt(prompt("Wat is het aantal dat u wenst?", "2"));
let total = "";
if (kostprijs !== null || btw !== null || aantal !== null) {
  if (kostprijs !== "" || btw !== "" || aantal !== "") {
    if (
      isNaN(kostprijs) == false &&
      isNaN(btw) == false &&
      isNaN(aantal) == false
    ) {
      total = (kostprijs + kostprijs * btw) * aantal;
      document.write(
        "Voor een prijs van: €" +
          kostprijs +
          ", BTW van: " +
          btw * 100 +
          "% en " +
          aantal +
          " stuks, is de totale prijs: €" +
          total.toFixed(2)
      );
    }
  }
}
