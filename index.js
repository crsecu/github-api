//1. create function that grabs user input and passes it into fetchUser function
//2. fetch data from api fetchUser

document.querySelector("#add-button").addEventListener('click', function(){
    let userInput = document.querySelector("#user-input").value;
    
    fetchUser(userInput);

    document.querySelector("#user-input").value = "";
})

let fetchUser = function(query) {
    console.log(query);
    let url = "https://api.github.com/repos/facebook/react/commits/" + query;

    fetch(url, {
      method: "GET",
      dataType: "json",
    })
    .then(data => data.json())
    .then(data => grabUserAvatar(data))
    .catch(error => console.log('error', error))
};

let grabUserAvatar =  function(data) {
    let avatar = data.author.avatar_url || null;
    let name = data.commit.author.name || null;
    console.log(data);

    let template = `
    <div class="card">
    <img src="${avatar}" alt="Profile Image" />
    <h2>${name}</h2>
    </div>
    `;

    document.querySelector("#card-container").innerHTML += template;

}

