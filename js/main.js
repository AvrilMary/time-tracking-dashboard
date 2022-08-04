// Global variables

const daily = document.querySelector(".daily");
console.log(daily);
const weekly = document.querySelector(".weekly");
console.log(weekly);
const monthly = document.querySelector(".monthly");
console.log(monthly);

// Replace ./data.json with your JSON feed

async function loadData() {
  fetch('./data.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
  console.log(data);  
  }).catch(err => {
    // Do something for an error here
  });
}

loadData();


/* I need to create a function that will update the daily info
by updating the current and previous sections of every section
Then create an event listener that will call this function when the daily section is clicked. */


const dailyInfo = function () {
  const daily = data.current;
  return daily;
}



daily.addEventListener("click", function () {

})


