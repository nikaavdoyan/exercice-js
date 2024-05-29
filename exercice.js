const usernameEL =document.querySelector('#username');
const emailEL =document.querySelector('#email');
const passwordEL =document.querySelector('#password');
const confirmPasswordEl =document.querySelector('#confirm-password');

const forme = document.querySelector('#sign up');
const isRequired = value => value === '' ? false : true;
const isBetween =(length,min,max)=>length<min || length>max ?
false : true;
const isEmailValid = (email) => {
    const re = 
/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zAZ]{2,}))$/;
    return re.test(email);
    };
    const isPasswordSecure = (password) => {
        const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
        return re.test(password);
        };
const showError = (input,message)=>{
    

}