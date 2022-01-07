const months = [
    'January',
    'Febuary',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];
const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const deadline = document.querySelector('.deadline');
const giveaway = document.querySelector('.giveaway');
const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2022, 3, 20, 16, 21 , 0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = futureDate.getMonth();
month = months[month];
const date = futureDate.getDate();
const weekday = weekdays[futureDate.getDay()];

giveaway.textContent = `giveaway ends on ${weekday}, ${date} ${month}  ${year} ${hours}:${mins}pm`

// future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureDate - today;
    // console.log(t);

    // values in ms
    const oneDay = 24 * 60  * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;
    // calcuate all values
    let days = t / oneDay;
    days = Math.floor(days);
    let hours = Math.floor((t % oneDay ) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);
    // console.log(days);
    // console.log(hours);
    // console.log(minutes);
    // console.log(seconds);

    // set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if(item < 10) {
            return item = `0${item}`
        }
        return item;
    };

    items.forEach(function(item, index) {
        item.innerHTML = format(values[index]);
    });

    if( t < 0) {
        clearInterval(countdown);
        deadline.innerHTML = `<h4 class="expired"> Sorry, this giveaway has expired.</h4>`
    }


}
// countdown
let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();


