class UI {
    constructor() {
        this.profileDiv = document.getElementById("profile");
        this.repoDiv = document.getElementById("repos");
        this.lastUsers = document.getElementById("last-users");
        this.inputField = document.getElementById("githubname");
        this.cardBody = document.querySelector("card-body");
    }

    clearInputField() {
        this.inputField.value = "";
    }
    showUserInfo(userData) {
        this.profileDiv.innerHTML = `
        <div class="card card-body mb-3">
        <div class="row">
          <div class="col-md-4">
            <a href="${userData.html_url}" target = "_blank">
             <img class="img-fluid mb-2" src="${userData.avatar_url}"> </a>
             <hr>
             <div id="fullName"><strong>${userData.name}</strong></div>
             <hr>
             <div id="bio">${userData.bio}</div>
            </div>
          <div class="col-md-8">
                <button class="btn btn-secondary">
                      Follower  <span class="badge badge-light">${userData.followers}</span>
                </button>
                <button class="btn btn-info">
                     Following  <span class="badge badge-light">${userData.following}</span>
                  </button>
                <button class="btn btn-danger">
                    Repos  <span class="badge badge-light">${userData.public_repos}</span>
                </button>
                <hr>
                <li class="list-group">
                    <li class="list-group-item borderzero">
                        <span id="company">${userData.company}</span>
                        
                    </li>
                    <li class="list-group-item borderzero">
                       <span id = "location">${userData.location}</a>
                        
                    </li>
                    <li class="list-group-item borderzero">
                        <span id="mail">${userData.email}</span>
                        
                    </li>
                    
                </div>
                   
                
          </div>
    </div> 
        `;
    }

    showError(message) {
        const div = document.createElement("div");
        div.className = "alert alert-danger";
        div.textContent = message;
        this.cardBody.appendChild(div);
        setTimeout(() => {
            div.remove();
        }, 2000);
    }

    showRepoInfo(repos) {
        this.repoDiv.innerHTML = "";
        repos.forEach(repo => {
            this.repoDiv.innerHTML += `
            <div class="mb-2 card-body">
            <div class="row">
                <div class="col-md-2">
                <span></span>
                <a href="${repo.html_url}" target = "_blank" id = "repoName">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <button class="btn btn-secondary">
                        Stars  <span class="badge badge-light" id="repoStar">${repo.stargazers_count}</span>
                    </button>

                    <button class="btn btn-info">
                        Forks  <span class="badge badge-light" id ="repoFork">${repo.forks_count}</span>
                    </button>
            
                </div>
            </div>
            </div>
            `;
        });
    }
}