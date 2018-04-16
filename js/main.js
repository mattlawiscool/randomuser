var btn = document.querySelector("#btn");
var url = "https://randomuser.me/api/";
var fullName = document.querySelector("#fullname");
var userName = document.querySelector('username');
var profilePic = document.querySelector('img');
var emailAddress = document.querySelector("#email")
var city = document.querySelector("#city")



btn.addEventListener('click', function(){
    fetch(url)
    .then(function(response) {
        return response.json()
    })
    .then(function(data){
        var firstName = data.results[0].name.first
        var lastName = data.results[0].name.last
        var uFirstName = firstName.charAt(0).toUpperCase() + firstName.slice(1)
        var uLastName = lastName.charAt(0).toUpperCase() + lastName.slice(1)
        
        //Username
        var userName = data.results[0].login.username
        //pic
        var img = data.results[0].picture.large
        //Email and location
        var email = data.results[0].email
        var curCity = data.results[0].location.city
        var locationFormat = curCity.charAt(0).toUpperCase() + curCity.slice(1) 
        //Modify Dom
        fullName.innerText = `${uFirstName} ${uLastName}`;
        username.innerText = userName;
        profilePic.src = img;
        emailAddress.innerText = email;
        city.innerText = locationFormat;
        
    })
})

