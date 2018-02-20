// var allImagesArr = ['images/Princeton-University.png', 'images/Harvard-University.png', 'images/University-of-Chicago.png', 'images/Yale-University.png', 'images/Columbia-University.png', 'images/Massachusetts-Institute-of-Technology.png', 'images/Stanford-University.png', 'images/University-of-Pennsylvania.png', 'images/Duke-University.png', 'images/California-Institute-of-Technology.png', 'images/Dartmouth-College.png', 'images/Johns-Hopkins-University.png', 'images/Northwestern-University.png', 'images/Brown-University.png', 'images/Cornell-University.png', 'images/Rice-University.png', 'images/Vanderbilt-University.png', 'images/University-of-Notre-Dame.png', 'images/Washington-University-in-St.-Louis.png', 'images/Georgetown-University.png', 'images/Emory-University.png', 'images/University-of-California-Berkeley.png', 'images/University-of-California-Los-Angeles.png', 'images/University-of-Southern-California.png', 'images/Carnegie-Mellon-University.png', 'images/University-of-Virginia.png', 'images/Wake-Forest-University.png', 'images/University-of-Michigan-Ann-Arbor.png', 'images/Tufts-University.png', 'images/New-York-University.png', 'images/University-of-North-Carolina-Chapel-Hill.png', 'images/Boston-College.png', 'images/College-of-William-&-Mary.png', 'images/Brandeis-University.png', 'images/Georgia-Institute-of-Technology.png', 'images/University-of-Rochester.png', 'images/Boston-University.png', 'images/Case-Western-Reserve-University.png', 'images/University-of-California-Santa-Barbara.png', 'images/Northeastern-University.png', 'images/Tulane-University.png', 'images/Rensselaer-Polytechnic-Institute.png', 'images/University-of-California-Irvine.png', 'images/University-of-California-San-Diego.png', 'images/University-of-Florida.png', 'images/Lehigh-University.png', 'images/Pepperdine-University.png', 'images/University-of-California-Davis.png', 'images/University-of-Miami.png', 'images/University-of-Wisconsin-Madison.png', 'images/Villanova-University.png', 'images/Pennsylvania-State-University.png', 'images/University-of-Illinois-Urbana-Champaign.png', 'images/Ohio-State-University.png']

var allImagesArr = ['images/Princeton-University.png', 'images/Harvard-University.png', 'images/University-of-Chicago.png', 'images/Yale-University.png', 'images/Columbia-University.png', 'images/Massachusetts-Institute-of-Technology.png', 'images/Stanford-University.png', 'images/University-of-Pennsylvania.png', 'images/Duke-University.png', 'images/California-Institute-of-Technology.png', 'images/Dartmouth-College.png', 'images/Johns-Hopkins-University.png', 'images/Northwestern-University.png', 'images/Brown-University.png', 'images/Cornell-University.png', 'images/Rice-University.png', 'images/Vanderbilt-University.png', 'images/University-of-Notre-Dame.png', 'images/Washington-University-in-St.-Louis.png', 'images/Georgetown-University.png', 'images/Emory-University.png', 'images/University-of-California-Berkeley.png', 'images/University-of-California-Los-Angeles.png', 'images/University-of-Southern-California.png', 'images/Carnegie-Mellon-University.png', 'images/University-of-Virginia.png', 'images/Wake-Forest-University.png', 'images/University-of-Michigan-Ann-Arbor.png', 'images/Tufts-University.png', 'images/New-York-University.png', 'images/University-of-North-Carolina-Chapel-Hill.png', 'images/Boston-College.png', 'images/College-of-William-&-Mary.png', 'images/Brandeis-University.png', 'images/Georgia-Institute-of-Technology.png', 'images/University-of-Rochester.png', 'images/Boston-University.png', 'images/Case-Western-Reserve-University.png', 'images/University-of-California-Santa-Barbara.png', 'images/Northeastern-University.png', 'images/Tulane-University.png', 'images/Rensselaer-Polytechnic-Institute.png', 'images/University-of-California-Irvine.png', 'images/University-of-California-San-Diego.png', 'images/University-of-Florida.png', 'images/Lehigh-University.png', 'images/Pepperdine-University.png', 'images/University-of-California-Davis.png', 'images/University-of-Miami.png', 'images/University-of-Wisconsin-Madison.png', 'images/Villanova-University.png', 'images/Pennsylvania-State-University.png', 'images/University-of-Illinois-Urbana-Champaign.png', 'images/Ohio-State-University.png']

// var script = document.createElement('script');
// script.src = "CMRotate.js";
// document.head.appendChild(script); //or something of the likes
// script.onload = function(){
//   randomizeWheel();
// }

//preload
for(var img of allImagesArr){
  imgObj = new Image();
  imgObj.src = img;
}

allImagesArr = shuffle(allImagesArr);
randomizeWheel();

function clickFn(no, bgArr) {
  var schoolLink = "https://collegefork.com/dive/colleges/";
  // console.log(bgArr[no].slice(7, -4));
  schoolLink += bgArr[no].slice(7, -4) + "/index.html";
  // console.log(schoolLink);
  window.open(schoolLink)
  // alert('click no - ' + (no + 1));
}

function shuffle(b) {
    var a = b;
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

document.getElementById('changeButton2').addEventListener('click', function(){
  window.location.href="https://collegefork.com/dive/list.html";}, false)

var changeButton = document.getElementById("changeButton1");
changeButton.addEventListener('click', handleClick, false);
var currButtonColor = -1;

var changeButtonColorStyles = document.createElement("style");
changeButtonColorStyles.innerHTML =
"#changeButton1 {background-color:" +" ;}#changeButton1:hover {background-color:" +
 " ;}";
document.head.appendChild(changeButtonColorStyles);

changeButtonColor();

function handleClick() {
  changeButtonColor();
  randomizeWheel();
  // console.log("in");
}
function randomizeWheel() {
  disposeIt();

  var tempArr = [];
  // console.log(allImagesArr.slice(18));
  // console.log(shuffle(allImagesArr.slice(18)));
  tempArr = [].concat(shuffle(allImagesArr.slice(20)));
  // console.log(tempArr);
  tempArr = tempArr.concat(allImagesArr.slice(0,20));
  allImagesArr = tempArr;
  // console.log(allImagesArr.slice(0,17).length);
  // console.log(allImagesArr);
  var displayArray = allImagesArr.slice(0,20);
  // console.log(displayArray);
  //18 schools at a time


  // CMRotate.init('rotate-div', 150, 200, 350, 12, 500, backgroundImages, clickFn);
  // var script1 = document.createElement('script');
  // script1.src = "CMRotate.js";
  // document.head.replaceChild(script1, script);
  // reloadCMRotate();
  // setTimeout(function(){
  //   CMRotate.init('rotate-div', 200, 300, 350, 14, 600, displayArray, clickFn); //pass in 18 background images
  // }, 20);
  setTimeout(function(){
    CMRotate.init('rotate-div', 200, 300, 620, 9, 880, displayArray, clickFn); //pass in 18 background images
  }, 20);



}

// document.getElementById("disposeButton").addEventListener("click", disposeIt, false);
function disposeIt() {
  CMRotate.dispose();

    document.getElementById("rotate-div").innerHTML = "";

}

function changeButtonColor() {
  var randColor = getRandomInt(0, 359);
  if(currButtonColor==-1) {
    changeButtonColorTo(randColor);
  }else {
    while(Math.abs(randColor - currButtonColor) < 30
      || Math.abs(randColor - currButtonColor) > 330) {
        randColor = getRandomInt(0, 359);
      }
    changeButtonColorTo(randColor);
  }
  currButtonColor = randColor;

}

function changeButtonColorTo(color) {
  var iniButtonColor = "hsl(" + color + ", 60%, 50%)";
  var hoverButtonColor = "hsl(" + color + ", 60%, 35%)";
  changeButtonColorStyles.innerHTML = "#changeButton1 {background-color:" +
    iniButtonColor + " ;}#changeButton1:hover {background-color:" + hoverButtonColor +
    " ;}#changeButton1:active {background-color:" + hoverButtonColor + " ;}";
}

//both inclusive
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
