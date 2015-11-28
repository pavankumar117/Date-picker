var armonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];

var arday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
'Saturday'];

var date = new Date(); //var date prints complete date
var dd = date.getDate(); //var dd prints date i.e; 27 etc
var d = date.getDay();
var day = arday[d]; //var day prints day Friday
var mon = date.getMonth();
var year = date.getFullYear(); //var year prints year 2015
var month = armonth[mon];//var month prints month november
console.log(d);

function table(x) {
  var x = mon;
  document.getElementById('mytable').innerHTML='';
  var printtable;
  printtable += "<table border = '1'>"
  printtable += "<tr align = 'center'>"
  printtable += "<td onclick = 'monthdec()' id = 'mondec'><</td>";
  printtable += "<td  colspan = '5'>" + armonth[x] + "</td>";
  printtable += "<td onclick = 'monthinc()' id = 'moninc'>></td>";
  printtable += "<td></td>"
  printtable += "</tr>"
  printtable += "<tr align = 'center'>";
  for (var i = 0; i < arday.length; i++) {
    printtable += "<td>" + arday[i] + "</td>";
  }
  printtable += "</tr>";
  printtable += "</table>";
  $("#table1").html(printtable);
  document.getElementById('mytable').innerHTML= printtable;

}

function monthdec() { //function for month decrement
  if (mon <11 && mon >=1) {
    mon = mon-1;
    table(mon);
  }
}

function monthinc() { //function for month incerement
  if (mon < 11) {
    mon = mon+1;
    table(mon);
  }
}

function yeardec() {
  year = year-1;
  table(year);
}

function weekdays() {
var weekday = new Date(date.getFullYear(),date.getMonth()+1,0).getDate();
console.log(weekday);
date.setFullYear(date.getFullYear(),date.getMonth(),0);
initial =0;
start = d;
for (var i = 0; i < 6 ; i++){
  printtable1 += "<tr>"
  for (var j = 0; i < 7; j++){
    if (start = 0){
      printtable1 += "<td></td>";
    }
    else{
      break;
    }
  }
}

}
