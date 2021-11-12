function men(){
    window.location.href='men.html';
}
function women(){
    window.location.href='women.html';
}
function usersignin(){
    window.location.href='usersignin.html';
}
function userlogin(){
    window.location.href='userlogin.html';
}

function checking(){
    var x={};
    x.email=document.getElementById('useremail').value;
    x.password=document.getElementById('userpassword').value;

    var check=JSON.parse(localStorage.getItem('sign'));
    var flag=0;
    for(var i=0;i<check.length;i++){
        if(check[i].email==x.email){
            if(check[i].password==x.password){
                var flag=1;
                localStorage.setItem('login',JSON.stringify(x));
                localStorage.setItem('see',JSON.stringify('yes'));
                alert('Succesfully logged in');
                break;
            }      
        }
    }
    if(flag==1){
        window.location.href='index2.html';
    }
     else{
         alert('Wrong password or email');
     }

}