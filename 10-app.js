function bereken() {
  let nummer = document.getElementById("input1").value;
  let macht = document.getElementById("input2").value;
  if (nummer !== null && macht !== null) {
    if (nummer !== "" && macht !== "") {
      if (isNaN(nummer) == false && isNaN(macht) == false) {
        schrijf(nummer, macht);
      } else
        document.getElementById("output").value =
          "Gelieve je invoer na te kijken.";
    } else
      document.getElementById("output").value =
        "Gelieve je invoer na te kijken.";
  } else
    document.getElementById("output").value = "Gelieve je invoer na te kijken.";
}
function schrijf(nummer, macht) {
  document.getElementById("output").value = machtsverheffing(nummer, macht);
}
function machtsverheffing(nummer, macht) {
  let result = nummer;
  for (let i = 0; i < macht - 1; i++) {
    result *= nummer;
  }
  return result;
}
