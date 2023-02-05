var content = `

<header>
    <div>
        <span>SHADOW</span>
    </div>
    <div>
        <img src="./img/user.svg">
        <span>user</span>
        <select>
            <option>EN</option>
            <option>ES</option>
            <option>FR</option>
            <option>PL</option>
            <option>RU</option>
        </select>
    </div>
</header>

<main>

    <div class="temp">
        <div class="premium">
            <div>
                <span>1/10 free email</span>
                <span>
                    <p>upgrade to <button>Premium</button></p>
                </span>
            </div>
        </div>
        <ul>
            <li>
                <div class="list">
                    <span id="countdown">00</span>
                    <img src="./img/list.svg">
                </div>
                <div class="mail">${rdmHash}@${location.hostname}</div>
                <div class="notif">
                    <img src="./img/notif.svg">
                    <span id="new-notif">1</span>
                </div>
                <div class="editor">
                    <button>
                        <img src="./img/edit.svg">
                    </button>
                    <button>
                        <img src="./img/sett.svg">
                    </button>
                    <button>
                        <img src="./img/delete.svg">
                    </button>
                </div>
            </li>
            <li>
                <div class="clear">
                    <img src="./img/clear.svg">
                    <p>Clear</p>
                </div>
                <div class="create">
                    <img src="./img/create.svg">
                    <p>Create</p>
                </div>
            </li>
        </ul>
    </div>

    <div class="inbox">
        <div class="head">
            <div>
                <img src="./img/temp.svg">
                <span>${rdmHash}@${location.hostname}</span>
            </div>
            <div>
                <img src="./img/lock.svg">
            </div>
        </div>

        <div id="new-msn" class="msn">
            <div class="no_message">
                <p>no message</p>
            </div>
        </div>
    </div>
    
</main>

<section>
    <div class="sect-first">
        <img src="./img/noads.svg">
        <p>no ADS (7 days) for free user. <br>Protects from adware and malware.</p>
    </div>
    <div class="sect-second">
        <img src="./img/step.svg">
        <p>You will have the email after you click the lock button before it finally disappears because it is reloaded, you can create more temporary email after you register.</p>
    </div>
    <div class="sect-third">
        <img src="./img/temporary.svg">
        <p>Emails are just temporarily stored. We just store the latest mails received in memory and flush them out as needed. Temporary Email box at your disposal because no one likes an inbox full of spam emails.</p>
    </div>
    <div class="sect-forth">
        <img src="./img/support.svg">
        <p>Use our simple and functional design to get your disposable email. We provide either a random email account or you can choose an address of your choice for example : shadow@${location.hostname}. Please support us to become your favorite temporary email service.</p>
    </div>
</section>

<footer>
    <p>&copy; 2021 Copyright: ${location.hostname} | privacy policy, cookies & terms of service</p>
</footer>

<div id="cookie">
    <div>
        <p>This site uses cookies. If you continue using this site, you agree the use of cookies. <a href="${location.hostname}/more">More info...</a></p>
        <button onclick="xcookie()">Accept</button>
    </div>
</div>
<div class="maintenance">
    <div>
        under maintenance <br>
        <span id="demo"></span>
    </div>
</div>

`;

var new_message = `
    <div class="new_message">
        <div class="new_from">from: no-reply@contact.${location.hostname}</div>
        <div class="new_justnow">just now</div>
        <div class="new_email">Dear ${rdmHash}, ...</div>
        <div class="new_readmore">read more</div>
    </div>
`;

document.getElementById('content').innerHTML = content;

function myCopy() {
    var copyText = document.getElementById("myCopy");
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Temp-mail: " + copyText.value);
  }
  

var d = new Date();
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
// document.getElementById("demo").innerHTML = months[d.getMonth()];
var month = months[d.getMonth()];

// Set the date we're counting down to
var countDownDate = new Date(`${month} `+(d.getDate() +1)+`, 2021`).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = hours + "h "
  + minutes + "m " + seconds + "s ";
    
  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

function myAlert() {
    alert("Oops!");
};

function xcookie() {
    document.getElementById('cookie').style = "display:none";
}

setTimeout(function() { 
    document.getElementById('new-notif').style = "display:block";
    document.getElementById('new-msn').innerHTML = new_message;
}, 12000);


// countdown
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        // display.textContent = minutes + ":" + seconds;
        display.textContent = seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}
    window.onload = function () {
        var aMinutes = 10,
            display = document.querySelector('#countdown');
        startTimer(aMinutes, display);

        display_tp = document.querySelector('#countdown_tp');
        startTimer(aMinutes, display_tp);
    };



