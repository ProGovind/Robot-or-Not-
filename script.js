let html_image = document.querySelectorAll("img");

let imgclassList = ["img1","img2","img3","img4","img5"];
let
  randomImg=imgclassList[parseInt(Math.random()*imgclassList.length)];
imgclassList.push(randomImg);
