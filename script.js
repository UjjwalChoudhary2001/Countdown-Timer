const startDate = new Date(); //start point
console.log("Starting Date: ", startDate);
const endDate = new Date("2028-07-21 00:00:00");
console.log("End Date: ", endDate); //end point

function calc() {
  let currDate = new Date(); //Some middlepoint
  let mill = endDate - currDate;

  let days = Math.floor(mill / (1000 * 60 * 60 * 24));
  let hours = Math.floor((mill / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((mill / (1000 * 60)) % 60);
  let sec = Math.floor((mill / 1000) % 60);

  let progress = Math.floor(
    (100 * (currDate - startDate)) / (endDate - startDate) //(100*dist cov/total dis)
  );
  document.getElementById("progress-bar").style.width = progress + "%";
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = sec;

  //Handling the case when Pending Dist is negative
  if (endDate - currDate < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
    document.getElementById("progress-bar").style.width = "100%";
  }
}
let x = setInterval(calc, 1000);
