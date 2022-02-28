const boy = document.querySelector("#hei");
const kilo = document.querySelector("#wei");
const bki = document.querySelector("#whi");

boy.addEventListener("input", vkiHesaplama);
kilo.addEventListener("input", vkiHesaplama);

function vkiHesaplama() {
  b = boy.value / 100;
  k = kilo.value;
  endex = k / (b * b);
  endex = endex.toFixed(2);

  bki.setAttribute("class", "");
  if (endex < 18) {
    bki.innerHTML = `Zayıf vki : ${endex}`;
    bki.setAttribute("class", "alert alert-secondary");
  } else if (endex > 18.1 && endex <= 25) {
    bki.innerHTML = `Normal Vki : ${endex}`;
    bki.setAttribute("class", "alert alert-success");
  } else if (endex > 25 && endex <= 30) {
    bki.innerHTML = `Kilolu vki : ${endex}`;
    bki.setAttribute("class", "alert alert-warning");
  } else if (endex > 30 && endex < 35) {
    bki.innerHTML = `Obez vki : ${endex}`;
    bki.setAttribute("class", "alert alert-danger");
  } else {
    bki.innerHTML = `Ciddi Obez vki : ${endex}`;
    bki.setAttribute("class", "alert alert-danger");
  }
}
