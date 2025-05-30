let btn = document.getElementById('btn');
let popo = document.getElementById('poup');
let Content = document.getElementById('Content');
// add statement

function add() {
    poup.style.display = "block";
    Content.style.display = "block";
}

let btn2 = document.getElementById('btn2');

function Del(event) {
    event.target.parentElement.remove();
}


//Cancel button
let Cancle = document.getElementById('Cancle');
Cancle.addEventListener("click", (event) => {
    event.preventDefault()

    poup.style.display = "none";
    Content.style.display = "none";
    Heading.value = '';
    Authors.value = '';
    Comments.value = '';

})
//  bo1 one statement 

let bigContainer = document.getElementById("bigContainer");
let Heading = document.getElementById("Heading");
let Authors = document.getElementById("Authors");
let Comments = document.getElementById("Comments");
let Adding = document.getElementById("Adding");
let bor1 = document.getElementById('bor1');

Adding.addEventListener('click', (event) => {
    event.preventDefault()

    let div = document.createElement('div')
    div.setAttribute("id", "bor1")
    div.innerHTML = `
                <h2 id="h2" style="text-align: center;color: black;">Task</h2>
     <h2>${Heading.value}</h2>
            <h3>${Authors.value}</h3>
            <p>${Comments.value}</p>
            <button id="btn1" onclick="Del(event)"> Remove <i class="fa fa-recycle" aria-hidden="true"></i></button>`;
    if ('a' == Heading.value && 'a' == Authors.value && 'a' == Comments.value) {
        bigContainer.append(div);
        Heading.value = '';
        Authors.value = '';
        Comments.value = '';
        Content.style.display = "none";
        poup.style.display = "none";

    }
    else{
         Content.style.display = "none";
        poup.style.display = "none";

    }
})
// window.onbeforeunload = function(){
//     return "?";
// }
let pare = document.getElementById('pare');
let user = document.getElementById('users');
let login = document.getElementById('login');
let nav = document.getElementById('nav');
let Username = document.getElementById('Username');


login.addEventListener('click', (event) => {

    if ('' != user.value) {
        event.preventDefault()
        Username.append(user.value + "💛")
        pare.style.display = "none";
        nav.style.display = "block";
    }
});
//  quit function

let impo = document.getElementById('impo');
let par = document.getElementById('par');

function Quit() {
    par.style.display = "block";
    nav.style.display = "none";

}
function Yes() {
    pare1.style.display = "block"
    par.style.display = "none"
    nav.style.display = "none";
}

function No() {
    nav.style.display = "block";
    par.style.display = "none";

}
let btn4 = document.getElementById('btn4');
let btn5 = document.getElementById('btn5');


//  old name enter

let pare1 = document.getElementById('pare1');
let users = document.getElementById('userss');
let logins = document.getElementById('logins');
let log = document.getElementById('log');
let ReName = document.getElementById('ReName');

function rename(){
    pare1.style.display='none'
    pare.style.display='block'
    user.value=''; 
}

logins.addEventListener('click', (event) => {

    if (users.value == user.value) {
        event.preventDefault()
        pare1.style.display = "none";
        nav.style.display = "block";
        users.value = '';

    }
});
