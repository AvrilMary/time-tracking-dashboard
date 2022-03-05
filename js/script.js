
// Global variables

const daily = document.querySelector(".daily");
const weekly = document.querySelector(".weekly");
console.log(weekly);
const monthly = document.querySelector(".monthly");

//Work
const currentDayWork = document.querySelector("#work .daily-time");
console.log(currentDayWork);
const currentWeekWork = document.querySelector("#work .weekly-time");
const currentMonthWork = document.querySelector("#work .monthly-time");

weekly.addEventListener("click", function () {
    currentWeekWork.style.color = "purple";
});



