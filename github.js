class Github_class {
    // constructor() {
    //     this.url = "https://api.github.com/users/";
    // }

    static async retrieveGhData(username) {
        const userData = await fetch("https://api.github.com/users/" + username);
        const repoData = await fetch("https://api.github.com/users/" + username + "/repos");
        const userJSON = await userData.json();
        const repoJSON = await repoData.json();

        return {
            user:userJSON,
            repo:repoJSON
        }
    }
}