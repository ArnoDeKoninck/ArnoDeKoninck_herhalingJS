let txt = "Godslastering en andere vuile woorden zullen gecensureerd worden!";

let input = prompt("Welk woord wil je censureren?");
document.write(txt + "<br>");
if (txt.includes(input)) {
  document.write(
    "<br>" +
      txt.substring(0, txt.search(input)) +
      " GECENSUREERD " +
      txt.substring(txt.search(input) + input.length, txt.length)
  );
}
