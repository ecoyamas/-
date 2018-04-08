function disp(){

	window.alert('準備中です。');

}

var win1 = document.getElementById('win1').textContent;
var draw1 = document.getElementById('draw1').textContent;
var lose1 = document.getElementById('lose1').textContent;

var result;
result = win1 * 3 + draw1 * 1 + lose1 * 0;


var id = '1st';
document.getElementById(id).textContent = result;
var id = "2nd";
　   document.getElementById(id).textContent=3*2+1*2;
var id = "3rd";
　   document.getElementById(id).textContent=3*2+1*1;
var id = "4th";
　   document.getElementById(id).textContent=3*1+1*2;
var id = "5th";
　   document.getElementById(id).textContent=3*1+1*1;
