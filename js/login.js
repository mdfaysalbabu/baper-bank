// step -1 addevenlistener handeler
document.getElementById('submit-btn').addEventListener('click',function(){
//    step- 2 get the email address inside the email input field
// always remember to use .value to get text form input field
  const emailField=document.getElementById('user-email');
  const userEmail=emailField.value ;
//   step-3 get password
const passField=document.getElementById('user-pass');
const userPass=passField.value ;
// step-4 verify email password
  if(userEmail==='faysal@gmail.com'&& userPass==='babu'){
    window.location.href='bank.html'
  }
  else{
    alert('invalid user')
  }
})