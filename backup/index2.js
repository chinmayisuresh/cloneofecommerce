
function login(){
    console.log('I am working');
var a=document.getElementById('login').innerHTML;
console.log(a);
if(a=='Login'){
window.location.href='login.html';


}
}
function men(){
window.location.href='men.html';
}
function women(){
window.location.href='women.html';
}
function access(){
window.location.href='access.html';
}
function userlogin(){
var a=JSON.parse(localStorage.getItem('login'));
if(a!=null){
  var b=document.getElementById('login');
  var c=document.getElementsByClassName('search');
  c[0].style='margin-left:20%';
  b.style='font-size:10px;'
  b.innerHTML=a.email;
}
}

function see(){
var a=JSON.parse(localStorage.getItem('see'));
if(a=='yes'){
  
  userlogin();
}
}
see();

localStorage.setItem('showoff',JSON.stringify('men'));
secondmen();
function secondmen(){
localStorage.setItem('showoff',JSON.stringify('men'));
document.getElementById('secondmen').style='border-bottom:solid 4px #ffd835';
document.getElementById('secondwomen').style='border:none';
document.getElementById('secondaccess').style='border:none';

document.getElementById('showoffimage1').src="https://images.bewakoof.com/uploads/grid/app/WinteraWear-Bewakoof-Homepage-HeroBanner-men-1635769163.jpg"
document.getElementById('showoffimage2').src="https://images.bewakoof.com/uploads/grid/app/Hero-banner-Men-680X420-1636639165.jpg"
document.getElementById('showoffimage3').src="https://images.bewakoof.com/uploads/grid/app/bottom-wear-hero-banner-men-1636450508.jpg"

document.getElementById('hotdealimage1').src="https://images.bewakoof.com/uploads/grid/app/Hero-Banner-Bestseller-Men-1636644502.jpg";
document.getElementById('hotdealimage2').src="https://images.bewakoof.com/uploads/grid/app/b1g1-hero-banner-men-2-1628784434.jpg";
document.getElementById('hotdealimage3').src="https://images.bewakoof.com/uploads/grid/app/men-3-for-999-1634044532.png";


var menp=JSON.parse(localStorage.getItem('men'));
console.log(menp);
document.getElementById('whatnewimage1').src=menp[0].image1;
document.getElementById('whatname1').innerHTML=menp[0].name;
document.getElementById('whatnewimage2').src=menp[1].image1;
document.getElementById('whatname2').innerHTML=menp[1].name;
document.getElementById('whatnewimage3').src=menp[2].image1;
document.getElementById('whatname3').innerHTML=menp[2].name;
document.getElementById('whatnewimage4').src=menp[3].image1;
document.getElementById('whatname4').innerHTML=menp[3].name;
document.getElementById('whatnewimage5').src=menp[4].image1;
document.getElementById('whatname5').innerHTML=menp[4].name;

document.getElementById('trendimage1').src=menp[5].image1;
document.getElementById('trendname1').innerHTML=menp[5].name;
document.getElementById('trendimage2').src=menp[6].image1;
document.getElementById('trendname2').innerHTML=menp[6].name;
document.getElementById('trendimage3').src=menp[7].image1;
document.getElementById('trendname3').innerHTML=menp[7].name;
document.getElementById('trendimage4').src=menp[8].image1;
document.getElementById('trendname4').innerHTML=menp[8].name;
document.getElementById('trendimage5').src=menp[9].image1;
document.getElementById('trendname5').innerHTML=menp[9].name;

}

function secondwomen(){
localStorage.setItem('showoff',JSON.stringify('women'));

document.getElementById('secondwomen').style='border-bottom:solid 4px #ffd835';
document.getElementById('secondmen').style='border:none';
document.getElementById('secondaccess').style='border:none';

document.getElementById('showoffimage1').src="https://images.bewakoof.com/uploads/grid/app/WinteraWear-Bewakoof-Homepage-HeroBanner-women-1635769163.jpg"
document.getElementById('showoffimage2').src="https://images.bewakoof.com/uploads/grid/app/Hero-banner-Women-680X420-1636639165.jpg"
document.getElementById('showoffimage3').src="https://images.bewakoof.com/uploads/grid/app/bottom-wear-hero-banner-women--1--1636450508.jpg"


document.getElementById('hotdealimage1').src="https://images.bewakoof.com/uploads/grid/app/Hero-Banner-Bestseller-Women-1636644502.jpg";
document.getElementById('hotdealimage2').src="https://images.bewakoof.com/uploads/grid/app/b1g1-hero-banner-women-2-1628784680.jpg";
document.getElementById('hotdealimage3').src="https://images.bewakoof.com/uploads/grid/app/women-3-for-999-1634044533.png";

var menp=JSON.parse(localStorage.getItem('women'));

document.getElementById('whatnewimage1').src=menp[0].image1;
document.getElementById('whatname1').innerHTML=menp[0].name;
document.getElementById('whatnewimage2').src=menp[1].image1;
document.getElementById('whatname2').innerHTML=menp[1].name;
document.getElementById('whatnewimage3').src=menp[2].image1;
document.getElementById('whatname3').innerHTML=menp[2].name;
document.getElementById('whatnewimage4').src=menp[3].image1;
document.getElementById('whatname4').innerHTML=menp[3].name;
document.getElementById('whatnewimage5').src=menp[4].image1;
document.getElementById('whatname5').innerHTML=menp[4].name;



document.getElementById('trendimage1').src=menp[5].image1;
document.getElementById('trendname1').innerHTML=menp[5].name;
document.getElementById('trendimage2').src=menp[6].image1;
document.getElementById('trendname2').innerHTML=menp[6].name;
document.getElementById('trendimage3').src=menp[7].image1;
document.getElementById('trendname3').innerHTML=menp[7].name;
document.getElementById('trendimage4').src=menp[8].image1;
document.getElementById('trendname4').innerHTML=menp[8].name;
document.getElementById('trendimage5').src=menp[9].image1;
document.getElementById('trendname5').innerHTML=menp[9].name;


}


function secondaccess(){
localStorage.setItem('showoff',JSON.stringify('access'));

document.getElementById('secondaccess').style='border-bottom:solid 4px #ffd835';
document.getElementById('secondwomen').style='border:none';
document.getElementById('secondmen').style='border:none';

document.getElementById('showoffimage1').src="https://images.bewakoof.com/uploads/grid/app/28thMay-Bewakoof-Homepage-CoverParade-HeroBanner-1622196929.jpg"
document.getElementById('showoffimage2').src="https://images.bewakoof.com/uploads/grid/app/Hero-Banner-Footwear-Common-1630562952.jpg"
document.getElementById('showoffimage3').src="https://images.bewakoof.com/uploads/grid/app/bewakoof-brag-worthy-bags-hero-banner-1626256915.jpg"

document.getElementById('hotdealimage1').src="https://images.bewakoof.com/uploads/grid/app/28thMay-Bewakoof-Homepage-CoverParade-HeroBanner-1622196929.jpg"
document.getElementById('hotdealimage2').src="https://images.bewakoof.com/uploads/grid/app/Hero-Banner-Footwear-Common-1630562952.jpg"
document.getElementById('hotdealimage3').src="https://images.bewakoof.com/uploads/grid/app/bewakoof-brag-worthy-bags-hero-banner-1626256915.jpg"

var menp=JSON.parse(localStorage.getItem('access'));
document.getElementById('whatnewimage1').src=menp[0].image1;
document.getElementById('whatname1').innerHTML=menp[0].name;
document.getElementById('whatnewimage2').src=menp[1].image1;
document.getElementById('whatname2').innerHTML=menp[1].name;
document.getElementById('whatnewimage3').src=menp[2].image1;
document.getElementById('whatname3').innerHTML=menp[2].name;
document.getElementById('whatnewimage4').src=menp[3].image1;
document.getElementById('whatname4').innerHTML=menp[3].name;
document.getElementById('whatnewimage5').src=menp[4].image1;
document.getElementById('whatname5').innerHTML=menp[4].name;

document.getElementById('trendimage1').src=menp[0].image1;
document.getElementById('trendname1').innerHTML=menp[0].name;
document.getElementById('trendimage2').src=menp[1].image1;
document.getElementById('trendname2').innerHTML=menp[1].name;
document.getElementById('trendimage3').src=menp[2].image1;
document.getElementById('trendname3').innerHTML=menp[2].name;
document.getElementById('trendimage4').src=menp[3].image1;
document.getElementById('trendname4').innerHTML=menp[3].name;
document.getElementById('trendimage5').src=menp[4].image1;
document.getElementById('trendname5').innerHTML=menp[4].name;


}
function showingoff(){
var a=JSON.parse(localStorage.getItem('showoff'));
if(a=='men'){
  men();
}
else if(a=='women'){
  women();
}
else{
  window.location.href='access.html';
}

}

foryou();
function foryou(){
var menp=JSON.parse(localStorage.getItem('access'));
document.getElementById('foryouimage1').src=menp[0].image1;
document.getElementById('foryouimage2').src=menp[1].image1;
document.getElementById('foryouimage3').src=menp[2].image1;
document.getElementById('foryouimage4').src=menp[3].image1;
document.getElementById('foryouimage5').src=menp[4].image1;


}