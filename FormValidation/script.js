function seterror(id,error){
    //sets error inside tag of id
    element=document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML=error;

}//function to set errors in the html document.
function clearErrors(){
    errors=document.getElementsByClassName('formerror');
    for(let item of errors){
        item.innerHTML="";
    }
}//function to clear all the errors after the submit button is pressed.
function validateform(){
    var returnval=true;
    clearErrors();
    //perform validation and if the validation fails then set the value of returnval to false
    var name=document.forms['myForm']["fname"].value;
    
    if(name.length<5){
        seterror("name","*Length of name is too short");
        returnval=false;
    }
    // if(name.length==0){
    //     seterror("name","*Name field cannot be left empty");
    //     returnval=false;
    // }
    var email=document.forms['myForm']["femail"].value;
    
    if(email.length>30){
        seterror("email","*Email Length is too long");
        returnval=false;
    }
    var phone=document.forms['myForm']["fphone"].value;
    
    if(phone.length!=10){
        seterror("phone","*Phone number should be of 10 digits");
        returnval=false;
    }
    var password=document.forms['myForm']["fpass"].value;
    
    if(password.length<6){
        seterror("password","*Password should be atleast 6 characters");
        returnval=false;
    }

var cpassword=document.forms['myForm']["fcpass"].value;
    
    if(cpassword!=password){
        seterror("cpass","*Password and confirm password should match !");
        returnval=false;
    }

    


    return returnval;
}//function to validate the form.
