let send = document.querySelector("#liveToastBtn");
let list = document.querySelector("#list");
let dataDom = document.querySelector("#task");
let listAll = document.querySelectorAll("li");
// Seçiciler seçildi ve atama yapıldı

for (let i = 0; i < listAll.length; i++) {
  let carpiButon = document.createElement("span");
  carpiButon.textContent = "\u00D7";
  carpiButon.classList.add("close");
  carpiButon.onclick = removeButton;
  listAll[i].append(carpiButon);
  listAll[i].onclick = check;
}

send.addEventListener("click", elemanEkle);

function elemanEkle() {
  if (dataDom.value == "") {
    $(".error").toast("show"); 
  }else{
    $(".success").toast("show");
    let li = document.createElement("li");
  li.textContent = dataDom.value;
  list.appendChild(li);
  dataDom.value = "";
  li.onclick = check;

  let carpiButon = document.createElement("span");
  carpiButon.textContent = "\u00D7";
  carpiButon.classList.add("close");
  carpiButon.onclick = removeButton;
  li.appendChild(carpiButon);
  list.append(li);
  dataDom.value = "";
  }
  
}

function removeButton() {
  this.parentElement.remove();
  $(".delete").toast("show");
}
function check() {
  
  this.classList.toggle("checked");
  $(".check").toast("show");
}
