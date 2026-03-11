async function searchUser(){

    const username = document.getElementById("username").value
    
    const res = await fetch(`https://api.github.com/users/${username}`)
    
    const data = await res.json()
    
    const profile = document.getElementById("profile")
    
    if(data.message === "Not Found"){
    profile.innerHTML = "User not found"
    return
    }
    
    profile.innerHTML = `
    
    <div class="card">
    
    <img class="avatar" src="${data.avatar_url}">
    
    <div class="info">
    
    <h2>${data.name || data.login}</h2>
    
    <p class="username">@${data.login}</p>
    
    <p>${data.bio || "No bio available"}</p>
    
    <div class="stats">
    
    <div>
    <p>Followers</p>
    <h3>${data.followers}</h3>
    </div>
    
    <div>
    <p>Following</p>
    <h3>${data.following}</h3>
    </div>
    
    <div>
    <p>Repos</p>
    <h3>${data.public_repos}</h3>
    </div>
    
    </div>
    
    <div class="links">
    
    <p>📧 ${data.email || "Not Available"}</p>
    
    <p>📍 ${data.location || "Unknown"}</p>
    
    </div>
    
    </div>
    
    </div>
    
    `
    }