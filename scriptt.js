function login(){
    const username=document.getElementById("username").value.trim();
    const password=document.getElementById("password").value.trim();
    if(username==="triveni"&& password==="1234"){
        alert(`Login Successful...,WECOME ${username}`)
    }
    else{
        alert("Invalid Username or Password")
    }
}