function validate(){
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var password1=document.getElementById('Password').value;
    var password2 = document.getElementById('confirmPassword').value;
    var phone_valid = /^[7-9]{1}[0-9]{9}$/;
     var email_valid = /^[a-z0-9._-]+@[a-z.]+.[a-z.]+$/.test(email)
    if(name=='' || name==null){
        alert("please enter the name");
        return false;
    } else if(name.length<3){
        alert("please enter the valid name");
        return false
    }else if(email=='' || email==null){
        alert("please enter the Email ID")
        return false;
    }else if(email_valid==false){
        alert("please enter the valid email-id");
        return false;
    }else  if(phone=='' || phone==null){
        alert("please enter the phone number")
        return false;
    }else if(!phone_valid.test(phone)){
        alert("enter the valid number")
        return false;
    }else if(password1=='' || password1==null){
        alert("please enter the password")
        return false;
    }else if(password1.length<6){
        alert("Enter the password minimum 6 charecters");
        return false;
    }else if(password2=='' || password2==null){
        alert("please enter the confirm-password")
        return false;
    }else if(password1 != password2){
        alert("Enter the valid password");
        return false;
    }
}

