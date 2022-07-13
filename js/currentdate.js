
const daynames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday"
];
const months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
const d = new Date();
const dayName = daynames[d.getDay()];
const monthName = months[d.getMonth()];
const year = d.getFullYear();
const hour = d.getHours();
const min = d.getMinutes();


//const fulldate = dayName + ", " + monthName + " " + d.getDate() +", " + year;
const fulldate = `${dayName}, ${d.getDate()} ${monthName} ${year} ${hour}:${min}`;
// using getElementById
document.getElementById("year").textContent = year;
document.getElementById("currentdate").textContent = fulldate;


// ****************************

try {
  const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
} catch (e) {
  alert('Error with code or your browser does not support Locale');
}
