function changeInbox() {
    let getMail = document.getElementById("open-email").innerHTML;

    let new_message = `
        <div class="new_message">
            <div class="new_from">from: no-reply@contact.` + location.hostname + `</div>
            <div class="new_justnow">just now</div>
            <div class="new_email">Dear ` + getMail + `, ...</div>
            <div class="new_readmore">read more</div>
        </div>
    `;
    document.getElementById('new-msn').innerHTML = new_message;
}