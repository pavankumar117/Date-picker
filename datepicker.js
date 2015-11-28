var armonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];

var arday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
'Saturday'];

var date = new Date(); //var date prints complete date
var dd = date.getDate(); //var dd prints date i.e; 27 etc
var d = date.getDay();
var day = arday[d]; //var day prints day Friday
var mon = date.getMonth(); //var month prints month november
var year = date.getFullYear(); //var year prints year 2015
var month = armonth[mon];

function table(mon) {
  var x = mon;
  console.log(x);
  document.getElementById('mytable').innerHTML='';
  var printtable;
  printtable += "<table border = '1'>"
  printtable += "<tr align = 'center'>"
  printtable += "<td onclick = 'monthdec()'><</td>";
  printtable += "<td>" + armonth[mon] + "</td>";
  printtable += "<td onclick = 'monthinc()'>></td>";
  printtable += "<td></td>"
  printtable += "<td onclick = 'myfunction2()'><</td>"
  printtable += "<td>" + year + "</td>";
  printtable += "<td onclick = 'myfunction2()'>></td>"
  printtable += "</tr>"
  printtable += "<tr align = 'center'>";
  for (var i = 0; i < arday.length; i++) {
    printtable += "<td>" + arday[i] + "</td>";
  }
  printtable += "</tr>"
  printtable += "</table>";
  document.getElementById('mytable').innerHTML= printtable;

function monthdec() { //function for month decrement
  console.log(x);
  if (mon <= armonth.length) {
    var temp = mon-1;
    table(temp);
  }
}
monthdec();
}


function monthinc() { //function for month incerement
  if (mon <= armonth.length) {
    var temp = mon+1;
    table(temp);
  }
}

function sayHello(name) {
    var text = 'Hello ' + name;
    var sayAlert = function() {
      alert(text);
    }
    sayAlert();
}
