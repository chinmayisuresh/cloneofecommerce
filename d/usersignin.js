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
function saving(){
    var a={};
    a.email=document.getElementById('useremail').value;
    a.password=document.getElementById('userpassword').value;
    a.phone=document.getElementById('usernumber').value;
    console.log(a)
    var sign=JSON.parse(localStorage.getItem('sign'));
    sign.push(a);
    localStorage.setItem('sign',JSON.stringify(sign));
    localStorage.setItem('see',JSON.stringify('yes'));
    localStorage.setItem('login',JSON.stringify(a));
    alert('Sign in successful');

    window.location.href='index2.html';

}