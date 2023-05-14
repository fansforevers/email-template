let user = {
    email : "fansforevers@gmail.com",
    license : "",

    listmail : [],
    duration : 10,
    forward : "fansforevers@gmail.com",
    allowcookie: false,
}

if(localStorage.getItem("user") === null || localStorage.getItem("user") === undefined) {
    setItem_localStorage();
    setTimeout(() => {
        window.location.reload();
    }, 500);
} else {
    getItem_localStorage();
}

function setItem_localStorage() {
    let retrieveUser = JSON.stringify(user);
    localStorage.setItem("user", retrieveUser);
    console.log(user);
    return;
}
function getItem_localStorage() {
    let retrieveUser = localStorage.getItem("user");
    user = JSON.parse(retrieveUser);
    console.log(user);
    return user;
}





// on header
document.getElementById("user-setting").addEventListener('click', () => {
    document.getElementById("user_duration").value = user.duration;

    document.getElementById("open-user-setting").classList.add("show");
});
    
const settings = `
<div class="container">
    <fieldset>
        <legend>Setting</legend>
        <label for="user_duration">
            duration: <input type="number" value="` + user.duration + `" id="user_duration">
        </label>
        <button id="save-setting">save setting</button>
    </fieldset>

    <button class="close-setting" onclick="close_setting()">close</button>
</div>
`;
document.getElementById("open-user-setting").innerHTML = settings;

// on main
function showList() {
    // console.log(user.listmail);

    let setListMail = ``;
    for(i=0; i < user.listmail.length; i++) {
        setListMail += `<li title="`+user.listmail[i]+`">
        <div class="mail" title="`+user.listmail[i]+`">`+ user.listmail[i].toLocaleLowerCase() + `@` + location.hostname +`</div>
    </li>`;
    }
    document.getElementById("list-mail").innerHTML = setListMail;

}
showList();

const openEmail = document.getElementById("open-email");
const optionEmail = document.getElementById("option-email");

const getList = document.querySelectorAll("li");
getList.forEach((x) => {
    x.addEventListener('click', (e) => {
        console.log(e.target.title);
        // var tet = e.target.title;
        openEmail.innerHTML = e.target.title + "@" +location.hostname;
        optionEmail.title = e.target.title;
        
    });
});

if(user.listmail.length < 1) {
    openEmail.innerHTML = rdmHash.toLocaleLowerCase() + "@" +location.hostname;
    
    user.listmail[0] = rdmHash.toLocaleLowerCase();
    optionEmail.title = user.listmail[0];
    
    // set and reresh
    let retrieveUser = JSON.stringify(user);
    localStorage.setItem("user", retrieveUser);
    getItem_localStorage();
} else {
    openEmail.innerHTML = user.listmail[0].toLocaleLowerCase() + "@" +location.hostname;
    optionEmail.title = user.listmail[0];
}

optionEmail.addEventListener('click', (e) => {
    // delete current mail 
    user.listmail = user.listmail.filter(item => item !== e.target.title);
    
    // set and reresh
    let retrieveUser = JSON.stringify(user);
    localStorage.setItem("user", retrieveUser);
    getItem_localStorage();
    showList();
});





let addNewMail = `
<label for="new_mail">
    <input type="text" id="new_mail" placeholder="tempmail" value="`+rdmHash.toLocaleLowerCase()+`">
    <strong>@`+location.hostname+`</strong>
</label>
<button id="random_create">random</button>
<button id="confirm_create">create</button>
`;
document.getElementById("this-new-mail").innerHTML = addNewMail;

document.getElementById("let-create").addEventListener('click', () => {
    document.getElementById("create").classList.add("create");
});
document.getElementById("random_create").addEventListener('click', () => {
    document.getElementById("new_mail").value = hash1[Math.floor(hash1.length * Math.random())].toLocaleLowerCase() + Math.floor(Math.random() * 10000);
});
document.getElementById("confirm_create").addEventListener('click', () => {
    document.getElementById("create").classList.remove("create");

    let confirm_create = document.getElementById("new_mail").value;
    user.listmail.unshift(confirm_create);
    
    // set and reresh
    let retrieveUser = JSON.stringify(user);
    localStorage.setItem("user", retrieveUser);
    getItem_localStorage();
    showList();
});




// footer copyright 
document.getElementById("cr").innerHTML += "2021 Copyright: " + location.hostname + " | privacy policy, cookies & terms of service";


var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

var month = months[d.getMonth()];

// Set the date we're counting down to
var countDownDate = new Date(`${month} `+(d.getDate() +1)+`, 2021`).getTime();


// countdown refresh email
function startTimer(duration, target) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // target.textContent = minutes + ":" + seconds;
        let targetDuration = document.getElementById(target);
            targetDuration.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
startTimer(user.duration, "countdown");
setTimeout(function() {
    changeInbox();
}, (user.duration * 1000) + 500);


const allowCookie = `
<div class="allow-cookie">
    <p>This site uses cookies. If you continue using this site, you agree the use of cookies. <a href="${location.hostname}/more">More info...</a></p>
    <button id="xcookie">Accept</button>
</div>`;

if(user.allowcookie === false) {
    document.body.innerHTML += allowCookie;
    
    document.getElementById("xcookie").addEventListener('click', (e) => {
        e.target.parentElement.style = "display:none";
        user.allowcookie = true;

        // set and reresh
        let retrieveUser = JSON.stringify(user);
        localStorage.setItem("user", retrieveUser);
        getItem_localStorage();
        window.location.reload();
    });
}
