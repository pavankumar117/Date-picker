var getdate  = new Date();
var month = getdate.getMonth();
var year = getdate.getFullYear();
var Day = getdate.getDay();
var no_of_month_days = new Date(getdate.getFullYear(),getdate.getMonth()+1,0).getDate();
var armonths = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
var arweeks = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];

//******Function Date Picker********

function Datepicker(temp,tempyear) {
	var temp = month;
	var printtable;
	var tempyear = year;

// Function for printing tables
	function printtables(temp,tempyear) {
		var start_day_of_month = 1; // defining variable =1 as months start with 1
		var getweekday = new Date(tempyear,temp,1);//gets months start day
		var weekday = getweekday.getDay();//gets where 1 day of month in a week starts with
		var total_Days_in_month = new Date(tempyear,temp+1, 0).getDate();//gets total days in month
		//var printtable;
		var count = 0;
		printtable += "<table id = 'mytable'>";
		printtable += "<tr align = 'center'>";
			printtable += "<th onclick = 'monthdec()' class = 'click'><</th>";
			printtable += "<th colspan = '2' id = 'monthtd'>" + armonths[temp] + "</th>";
			printtable += "<th onclick = 'monthinc()' class = 'click'>></th>";
			printtable += "<th onclick = 'yeardec()' class = 'click'><</th>";
			printtable += "<th colspan = '2' id = 'yeartd'>" + tempyear + "</th>";
			printtable += "<th onclick = 'yearinc()' class = 'click'>></th>";
		printtable += "</tr>";

		printtable += "<tr align = 'center' colspan = '1'>"
			for (var i = 0; i < arweeks.length; i++){
				printtable += "<td id = 'weektd'>" + arweeks[i] + "</td>";
			}
		printtable += "</tr>";
		//printing week days at their positions
		printtable += "<tr align = 'center' colspan = '1'>";
			for (var k = 0; k < arweeks.length; k++){
				if (weekday === k) {
					for(var i = 0; i < total_Days_in_month; i++) {
						printtable += "<td id = 'tabledata1' onclick = getdata()>" + (i+1) + "</td>";
						count++;
						if(count % 7 === 0) {
							printtable += "</tr><tr align = 'center' colspan = '1'>";
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
	}return printtables(temp,tempyear);

	function getdata() {
		$('#textbox').val(tempyear);
	}
	return getdate();
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
	if (month >=11){
		month=0;
		year++;
		Datepicker(month,year);
	}
	else {
		year = year+1;
		Datepicker(month,year);
	}
}
