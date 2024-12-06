// 3ayz el user y3ml sign up lw msh 3aml sign in abl keda
// lma y3ml sign-up ==> y2dr y3ml sign-in w yla2y welcome bel esm ely sglo
// array of objects ==> JSON            name :      email :     pass:       

//STEPS

//function lel link bta3 sign up twdy 3al sign up form
// function tkhzn el sign up data
// local storage          
// if condition 
//check el sign in data , lw sah wady 3l home lw la2a alert
//page el home wl design bta3ha b3del sign in
//logout button 

//Selection
var email = document.querySelector('#email')
var password = document.querySelector('#password')
var signUpUsername = document.querySelector('#username')
var signUpEmail = document.querySelector('#SignUpEmail')
var signUpPassword = document.querySelector('#SignUpPassword')
var logInBut = document.querySelector("#LoginBut")
var signUpBut = document.querySelector("#SignUpBut")
var signUpLink = document.querySelector("#SignUpLink")
var signInLink = document.querySelector("#SignInLink")
var signUpStatment = document.querySelector(".SignUpStat")
var signInStatment = document.querySelector(".SignInStat")
var SuccessfulSignUp = document.querySelector ('.SuccessStatment')
var logOutButton = document.querySelector ('#logoutBut')


//LINKS
signUpLink.addEventListener('click' , function(){
    email.classList.add('d-none')
    password.classList.add('d-none')
    logInBut.classList.add('d-none')
    signUpStatment.classList.add('d-none')
    username.classList.remove('d-none')
    signUpEmail.classList.remove('d-none')
    signUpPassword.classList.remove('d-none')
    signUpBut.classList.remove('d-none')
    signInStatment.classList.remove('d-none')
    
})
signInLink.addEventListener('click' , function(){
    email.classList.remove('d-none')
    password.classList.remove('d-none')
    logInBut.classList.remove('d-none')
    signUpStatment.classList.remove('d-none')
    username.classList.add('d-none')
    signUpEmail.classList.add('d-none')
    signUpPassword.classList.add('d-none')
    signUpBut.classList.add('d-none')
    signInStatment.classList.add('d-none')
    SuccessfulSignUp.classList.add('d-none')

})

//Sign-Up
var userData = []
var data = {}
if ( localStorage.getItem('userData') != null){
    userData = JSON.parse(localStorage.getItem('userData'))
}
function SignUpData (){
    
    if (validateData() == true){
        data = {
            userName : signUpUsername.value ,
            userEmail : signUpEmail.value , 
            userPassword : signUpPassword.value
        }
        
        SuccessfulSignUp.classList.remove('d-none')
        
        userData.push(data)
        SaveData ()
        // console.log(userData);
    }
    else {
        alert ( validateData() )
    }
}
signUpBut.addEventListener('click' , SignUpData )

//Sign-In
function signIn(){
    
    if (email.value == data.userEmail && password.value == data.userPassword){
        // console.log('yes');
        document.querySelector('#Form').classList.add('d-none')
        document.getElementById('home').innerHTML=`<h1 class="display-1">Welcome ${data.userName}</h1>`
        document.querySelector('#homeHeight').classList.add('vh-100')
        document.querySelector('#HomeMain').classList.remove('d-none')

    }
    else {
        alert('Incorrect email or password')
    }
    
}
logInBut.addEventListener('click' , signIn )

//SavingData
function SaveData (){
    localStorage.setItem('userData' , JSON.stringify(userData))
}

//LogOut
function logout (){
    // console.log('out');
    document.querySelector('#HomeMain').classList.add('d-none')
    document.querySelector('#Form').classList.remove('d-none')

        
}
logOutButton.addEventListener('click' , logout )

//Validation
var usernameRegex = /^[A-Z][a-z]{2,15}$/
var useremailRegex = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/ 
var userpasswordRegex = /^[a-z]{5,15}$/
function validateData () {

    if (usernameRegex.test(signUpUsername.value) == false){
        return 'Name must start with capital letter , 2-15 letters' ;
    }
    if (useremailRegex.test(signUpEmail.value) == false ){
        return 'email must be in the form of aaaaaa@bbbb.com' ;
    }
    if (userpasswordRegex.test(signUpPassword.value) == false ){
        return 'Password must 5 to 15 character ' ;
    }

    return true ;
}
