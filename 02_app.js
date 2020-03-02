let input = prompt("Vul hier de dag van de week in!", "Maandag");

if (input !== null) {
  if (input !== "") {
    console.log(input);
    switch (input.toLowerCase()) {
      case "maandag":
        document.write("Helaas, het is een werkdag");
        break;
      case "dinsdag":
        document.write("Helaas, het is een werkdag");
        break;
      case "woensdag":
        document.write("Helaas, het is een werkdag");
        break;
      case "donderdag":
        document.write("Helaas, het is een werkdag");
        break;
      case "vrijdag":
        document.write("Helaas, het is een werkdag");
        break;
      case "zaterdag":
        document.write("Hoera, het is weekend!");
        break;
      case "zondag":
        document.write("Hoera, het is weekend!");
        break;

      default:
        document.write(
          "U heeft geen weekdag ingegeven met de juiste schrijfwijze!"
        );
        break;
    }
  } else document.write("U heeft geen gegevens ingevuld.");
} else document.write("U heeft geanuleerd.");
