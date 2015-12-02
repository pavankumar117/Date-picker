var getdate  = new Date();
var date = getdate.getDate();
var month = getdate.getMonth();
var year = getdate.getFullYear();
var Day = getdate.getDay();
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
			printtable += "<tr colspan = '8' align = 'center'>";
				printtable += "<th onclick = 'monthdec()' class = 'click'><</th>";
				printtable += "<th colspan = '2' id = 'monthtd'>" + armonths[tempmonth] + "</th>";
				printtable += "<th onclick = 'monthinc()' class = 'click'>></th>";
				printtable += "<th onclick = 'yeardec()' class = 'click'><</th>";
				printtable += "<th colspan = '2' id = 'yeartd'>" + tempyear + "</th>";
				printtable += "<th onclick = 'yearinc()' class = 'click'>></th>";
			printtable += "</tr>";
			printtable += "<tr colspan = '8' align = 'center' colspan = '1'>"
				for (var i = 0; i < arweeks.length; i++){
					printtable += "<td id = 'weektd' colspan = '1'>" + arweeks[i] + "</td>";
				}
			printtable += "</tr>";
			//printing week days at their positions
			printtable += "<tr align = 'center' colspan = '1'>";
				for (var k = 0; k < arweeks.length; k++){
					if (weekday === k) {
						for(var month_days = 1; month_days <= total_Days_in_month; month_days++) {
							if(Yeartemp == tempyear && Monthtemp == tempmonth && date === month_days){
								/*above if condition checks the to days month , date with printing
								month , date and print the value separately*/
								printtable += "<td id = 'today' class = 'tabledata1' onclick = 'check(" + month_days + ")'>" + (month_days) + "</td>";
								count++;
							}
							else{
								printtable += "<td class = 'tabledata1' onclick = 'check(" + month_days + ")'>" + ( month_days) + "</td>";
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
	}return printtables(tempmonth,tempyear);
}

function monthdec() {    //function for decreasing the month and year
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

function monthinc() {   //function for increasing the month and year
	if (month >= 11){
		month=0;
		year++;
		Datepicker(month,year);
	}
	else {
		month = month+1;
		Datepicker(month,year);
	}
}

function yeardec() {    //function for decreasing the month and year
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

function yearinc() {   //function for increasing the month and year
	console.log(year);
	if (month >= 11){
		month = 0;
		year++;
		Datepicker(month,year);
	}
	else {
		year = year+1;
		Datepicker(month,year);
	}
}

function check(month_day) {
	$('#textbox').val(resultyear + "/" +(resultmonth+1) + "/" + month_day);
	$('#mytable').hide();
}
