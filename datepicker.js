var armonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
'August', 'September', 'October', 'November', 'December'];

var arday = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',
'Saturday'];


  var date = new Date();
  var dd = date.getDate();
  var d = date.getDay();
  var day = arday[d];
  var mon = date.getMonth();
  var year = date.getFullYear();
  var month = armonth[mon];

  //var dd prints date i.e; 27 etc
  //var date prints complete date
  //var day prints day Friday
  //var month prints month november
  //var year prints year 2015

function table(a) {
    document.getElementById('mytable').innerHTML='';
    var str;
    str += "<table border = '1'>"
    str += "<tr align = 'center'>"
    str += "<td onclick = 'mdec()'><</td>";
    str += "<td id = 'getmonth'>" + armonth[a] + "</td>";
    str += "<td onclick = 'minc()'>></td>";
    str += "<td></td>"
    str += "<td onclick = 'myfunction2()'><</td>"
    str += "<td>" + year + "</td>";
    str += "<td onclick = 'myfunction2()'>></td>"
    str += "</tr>"
    str += "<tr align = 'center'>";
    for (var i=0; i<arday.length; i++) {
      str += "<td>" + arday[i] + "</td>";
    }
    //str += "<td>Sun</td><td>Mon</td><td>Tue</td><td>wed</td><td>thur</td><td>Fri</td><td>Sat</td>"
    str +="</tr>"
    str += "</table>";
    document.getElementById('mytable').innerHTML= str;
    console.log ('hello');
}

/*
  function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
      alert(name); // use variable declared in the parent function
    }
    displayName();
  };
  init();
*/







function mdec() {
    table();
    console.log(c);
    var c = mon-1;
    if(c<armonth.length){
    console.log(c);
    table(c);
  }
  }


function minc() {

    var c = mon+1;
    if(c<armonth.length){
      table(c);
    }
}








/*function add(){
  var a = 10;
  console.log(a);
  function sub(){
    alert(a);
  }
  return sub;
};
var all = add();
all();


function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
};

var Func = makeFunc();
Func();
*/
