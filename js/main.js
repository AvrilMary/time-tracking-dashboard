// Global variables

const daily = document.querySelector(".daily");
console.log(daily);
const weekly = document.querySelector(".weekly");
console.log(weekly);
const monthly = document.querySelector(".monthly");
console.log(monthly);
const url = './data.json';
let dailyTime = document.querySelector(".daily-time");
console.log(dailyTime);


function reqData() {
  fetch(url)
  .then(res => res.json()) //need to use the json method convert the json data to a javascript object
  .then(data => adder(data)) 
  .catch((error)=> {
    console.error(error);
  })
}


// This function here is looping through my data an identifying 
function adder(data) {
  console.log(data);
  
   data.forEach(ele => {
    console.log(ele);
   let updateDaily = ele.timeframes.daily.current;
   dailyTime = updateDaily.innerText;
  })
}

reqData();


/* I need to create a function that will update the daily info
by updating the current and previous sections of every section
Then create an event listener that will call this function when the daily section is clicked. */


const dailyInfo = function () {
  const daily = data.current;
  return daily;
}



daily.addEventListener("click", function () {

})




// Replace ./data.json with your JSON feed

/*async function loadData() {
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
*/

