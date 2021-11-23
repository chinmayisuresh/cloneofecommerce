function details(){
    var xx=document.getElementById('login').innerHTML;
    var x=localStorage.setItem('size',null);
    var details=JSON.parse(localStorage.getItem('detail'));
    console.log(details);
    
    var display=document.getElementById("display");
    
    var bigimageborder=document.createElement('div');
    bigimageborder.setAttribute('class','bigimageborder');

    var bigimage=document.createElement('img');
    bigimage.setAttribute('class','bigimage');
    bigimage.src=details.image1;
    bigimageborder.append(bigimage);

    var detail_border=document.createElement('div');
    detail_border.setAttribute('class','detail_border');


    var bewakooftext=document.createElement('h1');
    bewakooftext.setAttribute('class','bewakooftext');
    bewakooftext.innerHTML='Bewakoof';
    detail_border.append(bewakooftext);

    var name=document.createElement('h1');
    name.innerHTML=details.name;
    name.setAttribute('class','name');
    detail_border.append(name);

    var price=document.createElement('price');
    price.innerHTML=details.price;
    price.setAttribute('class','price');
    detail_border.append(price);
    
    var selectsizetext=document.createElement('div');
    if(details.category=='men'||details.category=='women'){
    selectsizetext.innerHTML="Select size";}
    else{
        selectsizetext.innerHTML=null;
    }
    selectsizetext.setAttribute('id','selectsizetext');
    detail_border.append(selectsizetext);
    

    if(details.category=='men'||details.category=='women'){
        

    var size=document.createElement('div');
    size.setAttribute('class','size');
    
    details.size.forEach(element => {
    var eachsize=document.createElement('div');
    eachsize.innerHTML=element;
    eachsize.setAttribute('class','eachsize');
    size.append(eachsize);
    detail_border.append(size);
    eachsize.onclick=function(){
        sizeselect(eachsize);
    }
        
    });}

     
    var cart=JSON.parse(localStorage.getItem('cart'));
    console.log('yep its me',cart);
    var names=[];
    for(var i=0;i<cart.length;i++){
        names.push((cart[i].name));
    }
    
    
    var addtocartborder=document.createElement('button');
    addtocartborder.setAttribute('id','addtocartborder');

    if((!names.includes(details.name))||(xx=='Login')){
    addtocartborder.innerHTML='ADD TO BAG';
            }
    else{
        addtocartborder.innerHTML='GO TO BAG';
    }
    
    
    addtocartborder.onclick=function(){
        cartgoing(details);
    }
    detail_border.append(addtocartborder);
    

    var deliveryoptions=document.createElement('div');
    deliveryoptions.setAttribute('class','deliveryoptions');
    deliveryoptions.innerHTML='Delivery options';
    detail_border.append(deliveryoptions);

    var enterpincodeborder=document.createElement('div');
    enterpincodeborder.setAttribute('class','enterpincodeborder');


    var enterpincode=document.createElement('input');
    enterpincode.placeholder="Enter pincode";
    enterpincode.setAttribute('class','enterpincode');
    enterpincodeborder.append(enterpincode);

    var enterpincodebutton=document.createElement('button');
    enterpincodebutton.setAttribute('class','enterpincodebutton');
    enterpincodebutton.innerHTML='Check'
    enterpincodeborder.append(enterpincodebutton);

    enterpincodebutton.onclick=function(){
        check(enterpincode.value);
    }

    

    detail_border.append(enterpincodeborder);

    var shipment=document.createElement('h3');
    shipment.setAttribute('id','shipment');
    detail_border.append(shipment);


    display.append(bigimageborder,detail_border);


}
details();

function sizeselect(eachsize){

    var a=document.getElementsByClassName('eachsize');
    for(var i=0;i<a.length;i++){
        a[i].style="border: 1px solid #e6e6e6"
    }
    
    eachsize.style='border:2px solid #51cccc';

    var b=eachsize.innerHTML;
    localStorage.setItem('size',JSON.stringify(b));

    
}


function check(enterpincode){
    if(enterpincode.length==6){
        document.getElementById('shipment').innerHTML='*Shipment available';
    }
    else{
        document.getElementById('shipment').innerHTML='Invalid pincode';
    }
}


function cartgoing(element){
    var x=document.getElementById('login').innerHTML;
    console.log(x)
    if(x=='Login'){
        window.location.href='login.html';
    }
else{
    var cartbutton=document.getElementById('addtocartborder');
    if(cartbutton.innerHTML=="GO TO BAG"){
        window.location.href="cart.html";
    }
   else if(JSON.parse(localStorage.getItem('size'))==null&&(element.category=='men'||element.category=='women')){
        console.log("please select size");
        var userselectsize=document.getElementById('selectsizetext');
        userselectsize.innerHTML='Please select size';
        userselectsize.style='color:red';

    }
    else{
        if(element.category=='men'||element.category=='women'){
        var userselectsize=document.getElementById('selectsizetext');
        userselectsize.innerHTML='Select size';
        userselectsize.style='color:rgba(0,0,0,.7)';
        
        var y=JSON.parse(localStorage.getItem('size'));
        element.usersize=y;}
        console.log(element);
        var cartbutton=document.getElementById('addtocartborder');

        var cartitems=JSON.parse(localStorage.getItem('cart'));
        cartitems.push(element);

        localStorage.setItem('cart',JSON.stringify(cartitems));
        
        cartbutton.innerHTML="GO TO BAG";
        
    }

}
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
    console.log(a);
    if(a=='yes'){

        userlogin();
    }
}
see();