var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good Evening!!!';
} else if (hourNow > 12) {
    greeting = 'Good aternoon!!!';
} else if (hourNow > 0) {
    greeting = 'Good Morning!!!';
} else {
    greeting = 'Welcome'
}
document.write ('<span>'+greeting+'</span>');


// 값이 숫자일때는 '' 쓸필요없어, 그 외에 '' 써야함
// alert ('<h1>안녕</h1>')
// 태그는 문서(document) 영역에서만 읽혀지므로 alert창에서는 따옴표 안에 태그 그대로 노출됨



alert('<h1>안녕</h1>');
document.write('<h1>안녕</h1>');

// var username;
// var message;
// username ='웹니지';
// message = '우리의 변화에 주목하라';




// var today = new Date();
// var hourNow = today.getHours();
// var greeting;
// if (hourNow > 18) {
//     greeting = 'Good Evening!!!';
// } else if (hourNow > 12) {
//     greeting = 'Good Afternoon!!!';
// } else if (hourNow > 0) {
//     greeting = 'Good Morning!!!';
// } else {
//     greeting = 'Welcome!!!';
// }
// document.write('<span>'+greeting+'</span>');