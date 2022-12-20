// get Element APP 1
let skillSection = document.querySelector(".our-skill");
let spans = document.querySelectorAll(".prograss span");

// window.onscroll = () => {
//   if (window.scrollY >= skillSection.offsetTop) {
//     spans.forEach((span) => {
//       span.style.width = span.dataset.width;
//     });
//   }
// };

// Section Events
// Get End Date Event
let countDownDate = new Date("Dec 31, 2022 23:59:59").getTime();

let counter = setInterval(() => {
  // get Now Date
  let dateNow = new Date().getTime();
  // Diffrent between now date and end date
  let diffDate = countDownDate - dateNow;

  // get Time units
  let days = Math.floor(diffDate / (1000 * 60 * 60 * 24));
  let hours = Math.floor((diffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((diffDate % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((diffDate % (1000 * 60)) / 1000);

  // Add Varibles in HTML Elemnts
  document.querySelector(".days").innerHTML = `${days} <span>Days</span>`;
  document.querySelector(".hours").innerHTML = `${hours} <span>Hours</span>`;
  document.querySelector(
    ".minutes"
  ).innerHTML = `${minutes} <span>Minutes</span>`;
  document.querySelector(
    ".seconds"
  ).innerHTML = `${seconds} <span>Seconds</span>`;
}, 1000);

// Increase Number ON Scrolling => APP 2
let nums = document.querySelectorAll("#stats .card .num");
let statsSection = document.getElementById("stats");
let started = false;

window.onscroll = () => {
  // App 1
  if (window.scrollY >= skillSection.offsetTop) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  // App 2
  if (window.scrollY >= statsSection.offsetTop) {
    if (!started) {
      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;

  let count = setInterval(() => {
    el.textContent++;
    
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
