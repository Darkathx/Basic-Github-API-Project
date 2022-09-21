class Storage {
    static getSearchedUsers() {
        let history;
        if(localStorage.getItem("history") === null) {
            history = [];
        }
        else {
            history = JSON.parse(localStorage.getItem("history"));
        }
        return history;
    }

    static addSearchedUser(username) {
        let history = Storage.getSearchedUsers();
        if(history.indexOf(username) === -1) {
            history.push(username);
        }
        localStorage.setItem("history" ,JSON.stringify(history));
    }

    static clearAllHistory() {
        localStorage.removeItem("history");
    }
}