const githubForm = document.getElementById("github-form");
const input = document.getElementById("githubname");
const removeAllUsers = document.getElementById("clear-last-users");
const history = document.getElementById("last-users");

const ui = new UI();

eventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", receiveDatas);
    removeAllUsers.addEventListener("click", removeHistory);
    document.addEventListener("DOMContentLoaded", restoreHistory);
}

function receiveDatas(e) {
    let username = input.value.trim();

    Github_class.retrieveGhData(username)
    .then(response => {
        if(response.user.message === "Not Found") {
            ui.showError("User Not Found!");
        }
        else {
            ui.showUserInfo(response.user);
            ui.showRepoInfo(response.repo);
        }
    })
    .catch(err => ui.showError(err));
    ui.clearInputField();
    e.preventDefault();
}

function removeHistory() {

}

function restoreHistory() {

}