let txt = "Godslastering en andere vuile woorden zullen gecensureerd worden!";

let input = prompt("Welk woord wil je censureren?");

if (txt.includes(input)) {
  document.write(
    txt.substring(0, txt.search(input)) +
      " GECENSUREERD " +
      txt.substring(txt.search(input) + input.length, txt.length)
  );
}
