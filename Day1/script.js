const countdownDisplay = document.getElementById("countdown-display")

function renderCountdown(){
    const christmas = 25
    // Task:
    // - Get today's date (you only need the day).
    const dateToday = new Date()
    const day = dateToday.getDate()
    //console.log(dateToday.getMonth())
    // - Calculate remaining days.
    const daysToXmas = christmas - day
    //console.log(daysToXmas)
    // - Display remaining days in countdownDisplay.
    countdownDisplay.textContent = `${daysToXmas-1} days, 
                                    ${24-dateToday.getHours()-1} hours, 
                                    ${60 - dateToday.getMinutes()-1} minutes, 
                                    ${60 - dateToday.getSeconds()-1} seconds`
}

// renderCountdown()

setInterval(() => {
    renderCountdown()
}, 1000);

// Stretch goals:
// - Display hours, minutes, seconds.
// - Add a countdown for another festival, your birthday, or Christmas 2022.