
// Replace ./data.json with your JSON feed
fetch('./data.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
    console.log(data);
  }).catch(err => {
    // Do something for an error here
  });


// Global variables

const daily = document.querySelector(".daily");
console.log(daily);
const weekly = document.querySelector(".weekly");
console.log(weekly);
const monthly = document.querySelector(".monthly");
console.log(monthly);

daily.addEventListener("click", function () {

})


