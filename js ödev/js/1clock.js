/*/ DOM /*/ 
const myName = document.querySelector('#myName');
const myClock = document.querySelector('#myClock');

/*/ Get info /*/ 
let userName=prompt('Lütfen Adınızı Yazınız.');

/*/ Username Checker /*/ 
if (userName.trim().length > 0){
    myName.innerHTML = userName;

} else {
    myName.innerHTML='Misafir';
}

/*/ date get /*/ 
function getDaysString(dayNumber){
    const days = ['Pazar','Pazartesi','Sali','Çarşamba','Perşembe','Cuma','Cumartesi'];
    return days[dayNumber];
}

/*/ get currently time /*/ 
function getTimeAndDay(){
    const date = new Date();
    let currentTimeAndDate;

    const options = {hour12: false};
currentTimeAndDate = `${date.toLocaleTimeString('tr-TR',options)} ${getDaysString(date.getDay())}`;
    return currentTimeAndDate;

};

/* dom to Myclock*/ 
function showTime(){
    myClock.innerHTML= getTimeAndDay();
};

setInterval(showTime);
