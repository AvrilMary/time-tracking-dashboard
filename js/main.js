
// Replace ./data.json with your JSON feed


fetch('./data.json').then(response => {
    return response.json();
  }).then(data => {
    // Work with JSON data here
   console.log(data);    
   const res = JSON.parse(data);
   console.log(res);
  }).catch(err => {
    // Do something for an error here
  });

  


  /*
async function getData() {
  let url = './data.json';
  try {
    let res = await fetch(url);
    return await res.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getData();

*/





// Global variables

const daily = document.querySelector(".daily");
console.log(daily);
const weekly = document.querySelector(".weekly");
console.log(weekly);
const monthly = document.querySelector(".monthly");
console.log(monthly);

daily.addEventListener("click", function () {

})


