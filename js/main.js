var btn = document.querySelector("#btn");
var url = "https://randomuser.me/api/";
var fullName = document.querySelector("#fullname");
var userName = document.querySelector('username');
var profilePic = document.querySelector('img');


btn.addEventListener('click', function(){
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        console.log(data.results[0]);
        console.log(data.results[0].picture.large)
        //Name Section
        var firstName = data.results[0].name.first
        var lastName = data.results[0].name.last
        var uFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        var uLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
        //Username
        var userName = data.results[0].login.username
        //pic
        var img = data.results[0].picture.large
        //Modify Dom
        fullName.innerText = `${uFirstName} ${uLastName}`;
        username.innerText = userName
        profilePic.src = img
        
    })
})

