if (localStorage.getItem('loggedIn') != null){
    document.getElementById("sapa_user").innerHTML = 'Hello ' + localStorage.getItem('loggedIn');
}

function daftar(){
    const input_username = document.getElementById("input_username").value;
    const input_email = document.getElementById("input_email").value;
    const input_alamat = document.getElementById("input_alamat").value
    const input_passsword = document.getElementById("input_password").value;
    const input_gender = document.querySelector('input[class="radio"]:checked').value;

    const input_checkbox = document.getElementById("checked").checked;

    const username = JSON.parse(localStorage.getItem("username")) || [];
    const password = JSON.parse(localStorage.getItem("password")) || [];
    
    
    const nama = JSON.parse(sessionStorage.getItem("username")) || [];
    // const nama = JSON.parse(sessionStorage.getItem("nama")) || [];
    const email = JSON.parse(sessionStorage.getItem("email")) || [];
    const alamat = JSON.parse(sessionStorage.getItem("alamat")) || [];
    const gender = JSON.parse(sessionStorage.getItem("gender")) || [];

    // const indexAcc = (sessionStorage.getItem("indexAcc"));
   

    if (username.includes(input_username)){
        alert("Username Sudah Dimiliki !")
    }
    if (input_checkbox === false){
        alert("Harap Centang Persetujuan !")
    }
    else{
        // Push username dan password ke dalam local storage
        username.push(input_username);
        localStorage.setItem("username", JSON.stringify(username));
        
        password.push(input_passsword);
        localStorage.setItem("password", JSON.stringify(password));
        
        //Push username buat disapa
        localStorage.setItem("loggedIn", (input_username))
        
        // push index
        const lastIndex = username.length - 1;
        localStorage.setItem("indexAcc", lastIndex)
        
        // Push selain username dan password ke dalam session storage
        // push nama
        nama.push(input_username);
        sessionStorage.setItem("nama", JSON.stringify(nama));
        
        // push email
        email.push(input_email);
        sessionStorage.setItem("email", JSON.stringify(email));

        // push alamat
        alamat.push(input_alamat);
        sessionStorage.setItem("alamat", JSON.stringify(alamat));
        
        // push gender
        gender.push(input_gender);
        sessionStorage.setItem("gender", JSON.stringify(gender))
        
        alert("Sign Up Success")
        document.getElementById("submit").href = "biodata.html"
    }
}

function signin(){
    let usnInput = document.getElementById("usn").value;
    let pswInput = document.getElementById("psw").value;
    
    const username = JSON.parse(localStorage.getItem("username")) || [];
    const password = JSON.parse(localStorage.getItem("password")) || [];
    
    if (usnInput == ""){
        alert ("Please fill the username") ;
    }
    else if (pswInput == ""){
        alert ("Please fill the Password") ;
    }
    else if (username.includes(usnInput)){
        if (username.indexOf(usnInput) == password.indexOf(pswInput)) {
            alert("Welcome "+ usnInput)
            localStorage.setItem("loggedIn", (usnInput))
            document.getElementById("signin").href = "index.html"
            localStorage.setItem("indexAcc", (username.indexOf(usnInput)))
        }
        else if (username.indexOf(usnInput) != password.indexOf(pswInput)){
            alert("Invalid username or password")
        }
        else{
            alert ("Invalid username or password")
        }    
    }
    else{
        alert ("Invalid username or Password");
    }
}