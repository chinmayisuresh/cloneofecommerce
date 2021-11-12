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
    document.getElementById('pay').innerHTML="Pay Rs."+price;
}
summary();

function takeouttothankyou(event){
    event.preventDefault();
    window.location.href="thankyou.html";
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