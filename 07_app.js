let scores = [309, 40, 10, 49];
function getHighest(array) {
  let indexHighest = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] > array[indexHighest]) indexHighest = i;
  }
  return indexHighest;
}
document.write("Voor var scores = " + scores);
document.write(
  "<br>Het grootste getal: " +
    scores[getHighest(scores)] +
    " staat in de array op plaats: " +
    getHighest(scores)
);
