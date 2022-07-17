

/*

const jsonData= require('./data.json'); 
console.log(jsonData);

*/



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
const weekly = document.querySelector(".weekly");
console.log(weekly);
const monthly = document.querySelector(".monthly");


/*
const getData = async function () {
    const res = await fetch ("data.json");
    const data = await res.json();
    console.log(data);
}

getData();


*/
