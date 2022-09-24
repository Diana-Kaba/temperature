let temp = [15, 7, 0, -3, 5, 11];
let positive = 0;
let negative = 0;
let sum = 0;
for (let i = 0; i < temp.length; i++) {
  if (temp[i] > 0) {
    //  document.write(" +" + temp[i]);
    positive++;
    document.write("Плюсовая температура: " + positive + "<br>");
  } else if (temp[i] < 0) {
    //   document.write(temp[i] + " ");
    negative++;
    document.write("Минусовая температура: " + negative + "<br>");
  }
  sum += temp[i];
}
let middle = sum / temp.length;
document.write("Средняя температура: " + middle);