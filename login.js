function saveData(){
    let email,password;
    email=document.getElementById("email").value;
    password=document.getElementById("password").value;

    let user_records = new Array();
    user_records=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
    // check whether the records are available in the user array 
    // if records are available then retrieve else return empty array 
    if(user_records.some((v)=>{
        return v.email==email && v.password==password
    })){
        alert("login successful!")
    }
    else{
        alert("unsuccesful")
    }
}