/* DOM */
const myName = document.querySelector('#myName')
const myClock = document.querySelector('#myClock')

/* promt ile bilgi al */
let userName = prompt('Lütfen Kullanıcı Adınızı Yazınız')

/* Trim ile boşlukları sil */
if (userName.trim().length > 0){
    myName.innerHTML=userName;

}
else{
    myName.innerHTML='Misafir'
}
/* Günleri Belirleme */
function getDaysString(dayNumber){
    const days = ['Pazartesi','Sali','Çarsamba','Persembe','Cuma','Cumartesi','Pazar']
    return days[dayNumber-1]
}

/* Tarih Saat al */
function getTimeAndDay(){
    const date = new Date();
    let currentTimeAndDate;
    const options = {hour12: false}
    currentTimeAndDate = `${date.toLocaleTimeString('tr-TR',options)} ${getDaysString(date.getDay())}`
    return currentTimeAndDate
}

/* Yazı içerisine ekleme */
function showTime(){
    myClock.innerHTML=getTimeAndDay()

}

setInterval(showTime);