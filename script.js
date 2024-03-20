const subscribeBtn = document.getElementById("subscribeBtn");
const homeBtn = document.getElementById("homeBtn");
const label = document.getElementById("label");
const signUp = document.getElementById("signUp");
const logIn = document.getElementById("logIn");
const xBtn = document.getElementById("xBtn");

let userName;

subscribeBtn.addEventListener("click", function(){
    alert("Congrats! You have been succesfully subscribed!!!");
});
signUp.addEventListener("click", function(){
    userName = prompt("Write your log in name");
    alert("Good, now just press logIn button to website greed you with your name you just write");
    
});
logIn.addEventListener("click", function(){
    console.log(userName);
    if(!userName){
        alert(`Name ${userName} is not correct, write your name plz`);
    } else if(!/^[a-zA-Z]+$/.test(userName)){
        alert("Not correct name, only char is avaliable! Write your name plz! You alowed use only english language");
    } else {
        label.innerHTML = `Hello ${userName}`;
    }
});
xBtn.addEventListener("click", (event) => label.innerHTML = "");