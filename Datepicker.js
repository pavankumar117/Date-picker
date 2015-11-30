var getdate  = new Date();
var month = getdate.getMonth();
var year = getdate.getFullYear();
var Day = getdate.getDay();
console.log(month);
var no_of_month_days = new Date(getdate.getFullYear(),getdate.getMonth()+1,0).getDate();
var armonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var arweeks = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa'];
console.log(arweeks.length);
console.log(armonths.length);
	
function printtables(temp,tempyear){
	console.log(month);
	var temp = month;
	var printtable;
	var tempyear = year; 
	printtable += "<table border = '1' id = 'mytable'><tr align = 'center'><td onclick = 'monthinc()' class = 'click'><</td>";
		printtable += "<td colspan = 3>" + armonths[temp] + "</td><td colspan = 2>" + tempyear + "</td>";
		printtable += "<td onclick = 'monthdec()' class = 'click'>></td>";
		printtable += "<tr align = 'center'>"
			for (var i = 0; i < arweeks.length; i++){
				printtable += "<td>" + arweeks[i] + "</td>";
			}
		printtable += "</tr><tr>";
		if (temp === 0 || temp === 2 || temp === 4 || temp === 6 || temp === 7 || temp === 9 || temp === 11 ) {
			for( var i=1; i<=31; i++) {
				printtable += "<td>" + i + "</td>";
			}			
		}
		else if (temp === 3 || temp === 5 || temp === 8 || temp === 10 || temp === 12){
			for( var i = 1; i <= 30; i++) {
				printtable += "<td>" + i + "</td>";
			}
		}
		printtable += "</tr>";
		
		printtable += "<tr>";
		if (temp === 1) {
			if (year % 100 === 0 ? year % 400 === 0 ? true : false : year % 4 === 0){
				for( var i = 1; i <= 29; i++) {
					printtable += "<td>" + i + "</td>";
				}
			}
			else  {
				for( var i = 1; i <= 28; i++) {
				printtable += "<td>" + i + "</td>";
				}
			}
		}
	printtable += "</tr"; 
	printtable += "</table>";
		
	$('#mytable').html(printtable);
	document.getElementById('mydiv').innerHTML=printtable;	
		
}	
	
function monthinc() {
	if(month < 0){
		month = 11;
		year--;
		printtables(month,year);
	}
	else{
		month = month-1;
		printtables(month);
	}
}
	
function monthdec() {
	if(month < armonths.length){
		month = month+1;
		printtables(month,year);
	}
	else{
		month=0;
		year++;
		console.log(year);
		printtables(month,year);
		
	}
}

function check() {
	if(year % 100 === 0 ? year % 400 === 0 ? true : false : year % 4 === 0) {
		
	}
	else {
		console.log('not a leap year');
	}
}