function display(){
    var display=document.getElementById('display');
    display.innerHTML=null;
    var men=JSON.parse(localStorage.getItem('men'));

    men.forEach(element => {
        var border=document.createElement('div');
        border.setAttribute('class','border');
        border.onclick=function(){
            details(element);
        }

        var imageborder=document.createElement('div');
        imageborder.setAttribute('class','imageborder');
        
        var image=document.createElement('img');
        image.src=element.image1;
        image.setAttribute('class','image');
        imageborder.append(image);
        
        var name=document.createElement('div');
        name.innerHTML=element.name;
        name.setAttribute('class','name');

        var price=document.createElement('div');
        price.innerHTML=element.price;
        price.setAttribute('class','price');
 

       
        border.append(imageborder,name,price);
        display.append(border);
    });
}
display();

function details(element){
    localStorage.setItem('detail',JSON.stringify(element));
    window.location.href="details.html";
}

function displayingcategory(){
    var a=document.getElementById('categorydisplayblock');
    if(a.style.display=='block'){
        a.style='display:none';
    }
    else{
    a.style='display:block';}
}

function displayingcategorymen(){
    window.location.href='men.html';
}
function displayingcategorywomen(){
    window.location.href='women.html';
}
function displayingcategoryaccess(){
    window.location.href='access.html';
}

function displayingprice(){
    var a=document.getElementById('pricedisplayblock');
    if(a.style.display=='block'){
        a.style='display:none';
    }
    else{
    a.style='display:block';}

}



function lowtohigh(){
       display();
       
     
}


function hightolow(){
    var men=JSON.parse(localStorage.getItem('men'));
    var high=[];
    for(var i=men.length-1;i>=0;i--){
         high.push(men[i]);
    }
    var display=document.getElementById('display');
    display.innerHTML=null;

    high.forEach(element => {
        var border=document.createElement('div');
        border.setAttribute('class','border');
        border.onclick=function(){
            details(element);
        }

        var imageborder=document.createElement('div');
        imageborder.setAttribute('class','imageborder');
        
        var image=document.createElement('img');
        image.src=element.image1;
        image.setAttribute('class','image');
        imageborder.append(image);
        
        var name=document.createElement('div');
        name.innerHTML=element.name;
        name.setAttribute('class','name');

        var price=document.createElement('div');
        price.innerHTML=element.price;
        price.setAttribute('class','price');
 

       
        border.append(imageborder,name,price);
        display.append(border);
    });
}






function login(){
    window.location.href='login.html';
    if(a=='login'){
        window.location.href='login.html';}
}
function men(){
    window.location.href='men.html';
}
function women(){
    window.location.href='women.html';
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