
function items(){
    var items=JSON.parse(localStorage.getItem('cart'));
    if(items.length>1){
        var n=document.getElementById('noofitems');
        n.innerHTML=items.length;
        var i=document.getElementById('items');
        i.innerHTML="item(s)";

    }
    else{
        var n=document.getElementById('noofitems');
        n.innerHTML=items.length;
        var i=document.getElementById('items');
        i.innerHTML="item";
        
    }
}

function show(){
    var cart=JSON.parse(localStorage.getItem('cart'));
    

    var show=document.getElementById('show');
    show.innerHTML=null;
    

    cart.forEach(element => {
        

        var outerborder=document.createElement('div');
        outerborder.setAttribute('id','outerborder');

        var name=document.createElement('div');
        name.innerText=element.name;
        name.setAttribute('id','name');


        var price=document.createElement('div');
        price.innerText=element.price;
        price.setAttribute('id','price');
  


        var photoborder=document.createElement('div');
        photoborder.setAttribute('id','photoborder');


       var image=document.createElement('img');
       image.src=element.image1;
       image.setAttribute('id','image');
       photoborder.append(image);


       var removeborder=document.createElement('div');
       removeborder.setAttribute('id','removeborder');

       var remove=document.createElement('div');
       remove.setAttribute('id','remove');
       remove.innerText="Remove";

       remove.onclick=function(){
            out(element);
       }
       removeborder.append(remove);
       


    
        outerborder.append(photoborder,name,price,removeborder);
        show.append(outerborder);
        
        
    });
    
}
show();
items();

function out(element){
    
    var cart=JSON.parse(localStorage.getItem('cart'));
    var newcart=[];

    for(var i=0;i<cart.length;i++){
        if(cart[i].name!=element.name){
            newcart.push(cart[i]);
        }
    }
    
    localStorage.setItem('cart',JSON.stringify(newcart));
    show();
    items();
    summary();
}

function summary(){
    var cart=JSON.parse(localStorage.getItem('cart'));
    var price=0;
    for(var i=0;i<cart.length;i++){
        var a=cart[i].price;
        var b=[];
        for(var x=1;x<a.length;x++){
            b.push(a[x]);
        }
        var c=+(b.join(""));
        price=price+c;
    }
    console.log(price);
    document.getElementById('totalsubdiv43').innerText="₹ "+price;


document.getElementById('totalsubdiv13').innerText="₹ "+price;
document.getElementById('totaladdressamount').innerText="₹ "+price;
            

    
}

function popup(){
    var x=document.getElementById('addaddressbutton').innerHTML;
    if(x=='ADD ADDRESS'){
    var a=document.getElementById('addresspopup');
    a.style="display:block;"}
    else{
        ordersummary();
    }
    
}

function removepopup(){


    var a=document.getElementById("addresspopup");
    a.style="display:none";
}
summary();

function changechange(event){
      event.preventDefault();
      
      var a=document.getElementById('addaddressbutton');
      a.innerHTML='CONTINUE';
      var b=document.getElementById('addresspopup');
      b.style='display:none';

      ordersummary();

      
}
function ordersummary(){
    window.location.href='ordersummary.html';
    var name=document.getElementById('receivernameinput');
    var phonenumber=document.getElementById('phonenumberinput');
    var pincode=document.getElementById('pincodeinput');
    var address=document.getElementById('addressinput');
    var state=document.getElementById('stateinput');
    var city=document.getElementById('cityinput');
    var country=document.getElementById('countryinput');

    var add={};
    add.name=name.value;
    add.number=phonenumber.value;
    add.pincode=pincode.value;
    add.address=address.value;
    add.state=state.value;
    add.city=city.value;
    add.country=country.value;

    localStorage.setItem('add',JSON.stringify(add));
    
}


function userlogin(){
    var a=JSON.parse(localStorage.getItem('login'));
    if(a!=null){
        var b=document.getElementById('signedinname');
        b.style='font-size:10px'
        b.innerHTML=a.email;
    }
}
userlogin();