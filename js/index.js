function disp(){

	window.alert('準備中です。');

}

var win1 = document.getElementById('win1').textContent;
var draw1 = document.getElementById('draw1').textContent;
var lose1 = document.getElementById('lose1').textContent;
var result1;
result1= win1 * 3 + draw1 * 1 + lose1 * 0;

var win2 = document.getElementById('win2').textContent;
var draw2 = document.getElementById('draw2').textContent;
var lose2 = document.getElementById('lose2').textContent;
result2= win2 * 3 + draw2 * 1 + lose2 * 0;

var win3 = document.getElementById('win3').textContent;
var draw3 = document.getElementById('draw3').textContent;
var lose3 = document.getElementById('lose3').textContent;
result3= win3 * 3 + draw3 * 1 + lose3 * 0;

var win4 = document.getElementById('win4').textContent;
var draw4 = document.getElementById('draw4').textContent;
var lose4 = document.getElementById('lose4').textContent;
result4= win4 * 3 + draw4 * 1 + lose4 * 0;

var win5 = document.getElementById('win5').textContent;
var draw5 = document.getElementById('draw5').textContent;
var lose5 = document.getElementById('lose5').textContent;
result5= win5 * 3 + draw5 * 1 + lose5 * 0;

var id = '1st';
document.getElementById(id).textContent = result1;
var id = "2nd";
　   document.getElementById(id).textContent=result2;
var id = "3rd";
　   document.getElementById(id).textContent=result3;
var id = "4th";
　   document.getElementById(id).textContent=result4;
var id = "5th";
　   document.getElementById(id).textContent=result5;


$(function() {

  $('#team-logo').slideDown('slow');
	$('#maintext').fadeIn(2500);

});
