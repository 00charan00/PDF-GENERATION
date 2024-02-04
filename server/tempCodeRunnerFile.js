// console.log("TESTING");
// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = today.getMonth(); // Note: January is 0!
// var yyyy = today.getFullYear();
// let suffix="suffix";

// if(dd%10==1){
//     suffix="st";

// }
// else if(dd%10==2){
//     suffix="nd";
// }
// else if(dd%10==3){
//     suffix="rd";
// }
// else{
//     suffix="th";
// }

// Using Intl.DateTimeFormat to get the month name
// var monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });
// var monthName = monthFormatter.format(new Date(yyyy, mm, dd));
// console.log(typeof dd);
// dd=parseInt(dd);

// // today = dd + '/' + monthName + '/' + yyyy;
// today=monthName + dd + suffix;
// console.log(today);


console.log("TESTING");
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = today.getMonth(); // Note: January is 0!
var yyyy = today.getFullYear();
let suffix = "suffix";

if (dd % 10 == 1) {
    suffix = <sup>st</sup>;
} else if (dd % 10 == 2) {
    suffix = <sup>nd</sup>;
} else if (dd % 10 == 3) {
    suffix = <sup>rd</sup>;
} else {
    suffix = <sup>th</sup>;
}

// Using Intl.DateTimeFormat to get the month name
var monthFormatter = new Intl.DateTimeFormat('en-US', { month: 'long' });
var monthName = monthFormatter.format(new Date(yyyy, mm, dd));

console.log(typeof dd);
dd = parseInt(dd);

// today = dd + '/' + monthName + '/' + yyyy;
today = monthName + ' ' + dd + suffix;
console.log(today);
