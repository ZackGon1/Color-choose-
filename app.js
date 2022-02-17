const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');
const navLogo = document.querySelector('#navbar__logo');

// Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle('is-active');
  menuLinks.classList.toggle('active');
};

menu.addEventListener('click', mobileMenu);

// Show active menu when scrolling
const highlightMenu = () => {
  const elem = document.querySelector('.highlight');
  const homeMenu = document.querySelector('#home-page');
  const aboutMenu = document.querySelector('#about-page');
  const servicesMenu = document.querySelector('#services-page');
  let scrollPos = window.scrollY;
  // console.log(scrollPos);

  // adds 'highlight' class to my menu items
  if (window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight');
    homeMenu.classList.remove('highlight');
    servicesMenu.classList.remove('highlight');
    return;
  } else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight');
    aboutMenu.classList.remove('highlight');
    return;
  }

  if ((elem && window.innerWIdth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight');
  }
};

window.addEventListener('scroll', highlightMenu);
window.addEventListener('click', highlightMenu);

//  Close mobile Menu when clicking on a menu item
const hideMobileMenu = () => {
  const menuBars = document.querySelector('.is-active');
  if (window.innerWidth <= 768 && menuBars) {
    menu.classList.toggle('is-active');
    menuLinks.classList.remove('active');
  }
};

menuLinks.addEventListener('click', hideMobileMenu);
navLogo.addEventListener('click', hideMobileMenu);
// copy code from the card :
function myFunction() {
  var copyText = document.getElementById("myInput");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}
function myFunction1() {
  /* Get the text field */
  var copyText1 = document.getElementById("myIinput");
  copyText1.select();
  copyText1.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText1.value);
  alert("Copied the text: " + copyText1.value);

}
function myFunction2() {
  /* Get the text field */
  var copyText2 = document.getElementById("myIinput1");
  copyText2.select();
  copyText2.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(copyText2.value);
  alert("Copied the text: " + copyText2.value);

}

// dark mood 
// const mood = document.getElementsByClassName('mood')[0]
// mood.addEventListener('click',()=>{
//     document.body .classList.toggle('dark')

// })
function darkmode(){
  var SetTheme = document.body;
  SetTheme.classList.toggle("dark")
  var theme;
  if(SetTheme.classList.contains("dark")){
      console.log("Dark mode");
      theme = "DARK";
  }else{
      console.log("Light mode");
      theme = "LIGHT";
  }
  // save to localStorage
  localStorage.setItem("PageTheme", JSON.stringify(theme));
  // ensure you convert to JSON like i have done -----JSON.stringify(theme)
}

setInterval(() => {
  let GetTheme = JSON.parse(localStorage.getItem("PageTheme"));
  console.log(GetTheme);
  if(GetTheme === "DARK"){
      document.body.classList = "dark";
  }else{
      document.body.classList = "";
  }
}, 5);


// for animated form
//Assigning DOM elements to variables
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const container = document.querySelector('.container');
const animateCircles = document.querySelector('.animate-circles');

//Listen for for submission
form.addEventListener('submit', (e) => {  
//prevent default loading when form is submitted
    e.preventDefault();

  // Get values of form fields and assign to new variables
    const usernameValue = username.value;
    const emailValue = email.value;
    const passwordValue = password.value;
    const password2Value = password2.value;
  
  //conditional statements to check if form value is valid ..... If form value is not valid an error function is triggered but if it is valid a success function is triggered

    if (usernameValue === '') {
        errorMessage(username, "Username is empty");
    } else {
        successMessage(username);
    }

    if (emailValue === '') {
        errorMessage(email, "Email is empty");
    } else if (!validateEmail(emailValue)) {
        errorMessage(email, "Email is invalid");
    } else {
        successMessage(email);
    }

    if (passwordValue === '') {
        errorMessage(password, "Password is empty");
    } else {
        successMessage(password);
    }

    if (password2Value === '') {
        errorMessage(password2, "Password is empty");
    } else if (password2Value !== passwordValue) {
        errorMessage(password2, "Both Passwords does not match");
    } else {
        successMessage(password2);
    }

// conditional statement to check if all values are valid so the bubbles can appear
    if (username.parentElement.classList.contains('success') && email.parentElement.classList.contains('success') && password.parentElement.classList.contains('success') && password2.parentElement.classList.contains('success')) {

        container.classList.add('complete');
        animateCircles.classList.add('complete');

    }
});


// function to be triggered if form valu is not valid. This function simply adds the error CSS class and removes that of success if it exists

function errorMessage(value, message) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('success')) {
        formControl.classList.remove('success');
        formControl.classList.add('error');
    } else {
        formControl.classList.add('error');
    }
    formControl.querySelector('.errorMessage').textContent = message;


}

// function to be triggered if form valu is valid. This function simply adds the success CSS class and removes that of error if it exists

function successMessage(value) {
    const formControl = value.parentElement;

    if (formControl.classList.contains('error')) {
        formControl.classList.remove('error');
        formControl.classList.add('success');
    } else {
        formControl.classList.add('success');
    }
}

//This is a simple function to validate the email 

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
