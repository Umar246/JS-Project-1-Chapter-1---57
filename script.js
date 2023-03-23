// Toastify function
function toastify(msg) {
    Toastify({
        text: msg,
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: "#62b6cb",
            color: "//#1b4965",
        },
        onClick: function () { } // Callback after click
    }).showToast();
}

//_____________________________________________________________________________________________


function loginPage(){
 let userName =document.getElementById('input1').value ;
 if(!userName || userName.length<3 ){
    toastify('Please Enter Your Name')
    return;
 }  
 
 let password=document.getElementById('input2').value;
if(!password || password!='12345'){
    toastify('Enter Your Password Correctly')
    return;
}
 let email=document.getElementById('input3').value;
if(!email || email!="admin@gmail.com"){
    toastify('Enter Your Email Address Correctly')
    return;
}
if (password=='12345'&& email=='admin@gmail.com'){
    window.location.href='Home/home.html'

}

}