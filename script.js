function onLoad(){
  console.log("Site created on Feb 11, 2020");
}

function drop() {
  var x = document.getElementById("navbar");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
