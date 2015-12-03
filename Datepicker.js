var getdate  = new Date();
var date = getdate.getDate();
var month = getdate.getMonth();
var year = getdate.getFullYear();
var Day = getdate.getDay();
var h = getdate.getHours();
var m = getdate.getMinutes();
var s = getdate.getSeconds();
var arr12 = [];
var no_of_month_days = new Date(getdate.getFullYear(),getdate.getMonth()+1,0).getDate();
var armonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
'Oct', 'Nov', 'Dec'];
var arweeks = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
var resultyear = 0;
var resultmonth = 0;
//******Function Date Picker********
function Datepicker(tempmonth,tempyear) {
	var tempmonth = month;
	var printtable =""
	var tempyear = year;
// Function for printing tables
	function printtables(tempmonth,tempyear) {
		var Monthtemp = getdate.getMonth(); //temparary variable taken for highlighting today
		var Yeartemp = getdate.getFullYear();
		var start_day_of_month = 1; // defining variable =1 as months start with 1
		var getweekday = new Date(tempyear,tempmonth,1);//gets months start day
		var weekday = getweekday.getDay();//gets where 1 day of month in a week starts with
		var total_Days_in_month = new Date(tempyear,tempmonth+1, 0).getDate();//gets total days in month
		var count = 0;
		printtable += "<table id = 'mytable'>";
		printtable += "<tr align = 'center'>";
		printtable += "<td id = 'clock' onclick = 'timepick()'><img src = 'clock.png' width = 20 height= 20></img></td>";
		printtable += "<td colspan = 5></td>";
		printtable += "<td><img src = 'logo.png' width = 20 height= 20></img></td>";
		printtable += "</tr>";
		printtable += "<tr  align = 'center'>";
		printtable += "<th onclick = 'monthdec()' class = 'click'><</th>";
		printtable += "<th colspan = '1' id = 'monthtd'>" + armonths[tempmonth] + "</th>";
		printtable += "<th onclick = 'monthinc()' class = 'click'>></th>";
		printtable += "<th onclick = 'yeardec()' class = 'click'><</th>";
		printtable += "<th colspan = '2' id = 'yeartd'>" + tempyear + "</th>";
		printtable += "<th onclick = 'yearinc()' class = 'click'>></th>";
		printtable += "</tr>";
		printtable += "<tr colspan = '8' align = 'center' colspan = '1'>"
		for (var i = 0; i < arweeks.length; i++){
			printtable += "<th id = 'weektd' colspan = '1'>" + arweeks[i] + "</td>";
		}
		printtable += "</tr>";
		//printing week days at their positions
		printtable += "<tr align = 'center' colspan = '1'>";
		for (var k = 0; k < arweeks.length; k++){
			if (weekday === k) {
				for(var month_days = 1; month_days <= total_Days_in_month; month_days++) {
					if(Yeartemp == tempyear && Monthtemp == tempmonth && date === month_days){
						printtable += "<td align = 'center' id = 'today' class = 'tabledata1' onclick = 'result(" + month_days + ")'>" + (month_days) + "</td>";
						count++;
					}
					else{
						printtable += "<td class = 'tabledata1' onclick = 'result(" + month_days + ")'>" + ( month_days) + "</td>";
						count++;
						if(count % 7 === 0) {
							printtable += "</tr><tr align = 'center' colspan = '1'>";
						}
					}
				}
			}
			else {
				printtable += "<td></td>";
				count++;
			}
		}
		printtable += "</tr>";
		printtable += "</table>";
		document.getElementById('mydiv').innerHTML=printtable;
		resultyear = tempyear;
		resultmonth = tempmonth;
	}
	return printtables(tempmonth,tempyear);
}
//function for decreasing the month and year
function monthdec() {
	if (month <= 0) {
		month = 11;
		year--;
		Datepicker(month,year);
	}
	else {
		month = month-1;
		Datepicker(month);
	}
}
//function for increasing the month and year
function monthinc() {
	if (month >= 11) {
		month = 0;
		year++;
		Datepicker(month,year);
	}
	else {
		month = month+1;
		Datepicker(month,year);
	}
}
//function for decreasing the month and year
function yeardec() {
	if (month <= 0) {
		month = 11;
		year--;
		Datepicker(month,year);
	}
	else {
		year = year-1;
		Datepicker(month);
	}
}
//function for increasing the month and year
function yearinc() {
	if (month >= 11) {
		month = 0;
		year++;
		Datepicker(month,year);
	}
	else {
		year = year+1;
		Datepicker(month,year);
	}
}
function result(month_day) {
	$('#textbox').val(resultyear + "/" +(resultmonth+1) + "/" + month_day);
	$('#mytable').hide();
}
//Function for dispalying time automatically
function settime() {
	var today = new Date();
	var h = today.getHours();
	var m = today.getMinutes();
	var s = today.getSeconds();
	m = checkTime(m);
	s = checkTime(s);
	var tabletime =""
	tabletime += "<table id = tabletime><tr>";
	tabletime += "<td>@</td><td>" + h + ':' + "</td>";
	tabletime +="<td>" + m + ':' + "</td>";
	tabletime += "<td>" + s + ':' + "</td><td>@</td>";
	tabletime += "</tr></table>";
	document.getElementById('mydiv2').innerHTML= tabletime;
	var t = setTimeout(settime, 1000);
	if(arr12[0] === h && arr12[1] === m && arr12[2] === s) {
		window.alert('hello');
	}
}
function checkTime(i) {
	if (i < 10) {
		i = '0' + i;
	}
	return i;
}
// Event listenebr for Picking time

function timepick() {
 var printtime =""
 printtime += "<select id = 'hour'>";
 for (var i = 0; i < 24; i++){
	 printtime += "<option onclick = 'validate(" + i + ")'>" + i + "</option>";
 }
 printtime += "</select>";
 printtime += "<select id = 'minute'>";
 for (var j = 0; j < 60; j++){
	printtime += "<option onclick = 'validate(" + j + ")'>" + j + "</option>";
 }
 printtime += "</select>";
 printtime += "<select id = 'second'>";
 for (var k = 0; k < 60; k++){
	 printtime += "<option onclick = 'validate(" + k + ")'>" + k + "</option>";
 }
 printtime += "</select>";
 console.log(i);
 document.getElementById('mydiv3').innerHTML=printtime;
}

function validate(x){
	if (x >= 0 && arr12.length >= 3){
		console.log('popped out');
		arr12.splice('*');
	}
	else if (x >= 0){
		arr12.push(x);
	}
	 console.log(arr12[0]);
	 console.log(arr12[1]);
	 console.log(arr12[2]);
}
