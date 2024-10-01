function saveData(){
    let fname,lname,username,password;
    fname=document.getElementById("fname").value;
    lname=document.getElementById("lname").value;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;

    let user_records = new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    // check whether the records are available in the user array 
    // if records are available then retrieve else return empty array 
    if(user_records.some((v)=>{
        return v.email==email
    })){
        alert("Duplicate Data!");
    }
    else{
        user_records.push({
            "lname":lname,
            "fname":fname,
            "email":email,
            "password":password,
        })
        localStorage.setItem("users",JSON.stringify(user_records));
        window.location.href="login.html";
    }
    
    document.getElementById("myform").reset();

}