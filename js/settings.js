// change duration mail refresh
document.getElementById("save-setting").addEventListener('click', () => {
    let set_duration = document.getElementById("user_duration");
    console.log(set_duration.value);
    // console.log(user);
    user.duration = set_duration.value;

    // set and reresh
    let retrieveUser = JSON.stringify(user);
    localStorage.setItem("user", retrieveUser);
    getItem_localStorage();
});

// close settings
function close_setting() {
    document.getElementById("open-user-setting").classList.remove("show");
}