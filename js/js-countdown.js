// Set the date we're counting down to
//var countDownDate = new Date("Dec 27, 2021 00:00:00").getTime();
var countDownDate = new Date(1640538000000).getTime();
function pad(num){
    return ('00' + num).slice(-2);
}
// Update the count down every 1 second
var x = setInterval(function () {
    const items = Array.prototype.slice.call(document.getElementsByClassName('countdown'));
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    items.forEach(e=>{
        e.innerHTML =
            `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
            ;
    });


    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        items.forEach(e=>{
            e.innerHTML = "";
        });
        // let btn = document.getElementById('to-mint-page');
        // btn.classList.remove("d-none");

    }
}, 1000);
