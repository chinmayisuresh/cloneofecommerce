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
summary();

function showing(){
    var show=JSON.parse(localStorage.getItem('add'));
    document.getElementById('namedisplay').innerHTML=show.name;
    document.getElementById('addressdisplay').innerHTML=show.address+","+show.city+","+show.state+","+show.pincode;
    document.getElementById('phonedisplay').innerHTML="Mobile :"+"  "+show.number;
}

showing();

function popup(){
    window.location.href="payment.html";
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