const landingPage = document.getElementById("landing-page");
const submitButton = document.getElementById("submit-btn");
const mainPage = document.getElementById("main-page");
const username = document.getElementById("user-name");
const add = document.getElementById("addBtn");
const lists = document.getElementById("myUL");
const logOut = document.getElementById("log-out")


logOut.addEventListener('click',()=>{
  mainPage.style.display = "none";
  landingPage.style.display = "block";
})

submitButton.addEventListener('click',()=>{
  const name = document.getElementById("name").value;
  landingPage.style.display = "none";
  mainPage.style.display = "block";
  username.textContent = name;
});

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

function newElement(){
  var inputVal = document.getElementById("name").value;
  document.getElementById("showName").innerHTML = `Hello, ${inputVal}`;
  console.log(`Hello, ${inputVal}`);
}


var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Please put something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}