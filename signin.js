function login(){
    let name = document.getElementById("name").value
    let password = document.getElementById("password").value
    let check = true
    if(name===""){
        document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
        check = false
      }else{
        document.getElementById("nameError").innerHTML=""
      }
    if(password===""){
        document.getElementById("nameError").innerHTML="이름이 올바르지 않습니다."
        check = false
      }else{
        document.getElementById("nameError").innerHTML=""
      }

    if(check===true) { 
        alert("로그인에 성공하였습니다.")
        location.href="index.html"
    }
}