function store()
{
var a=document.getElementById("uname").value
var b=document.getElementById("psw").value

var reu=/\W/
if(reu.test(a))
{
alert("Username should not contain spaces or special symbols")

return
}
if(b.length<8)

{
alert("To secure your account password should be EIGHT characters in length")
return
}

localStorage.setItem("user",a)
localStorage.setItem("pswd",b)
document.getElementById("uname").value=""

document.getElementById("psw").value=""
document.getElementById
function storee()
{

var c=localStorage.getItem("user")
var d=localStorage.getItem("pswd")
document.getElementById("uname").value=c
document.getElementById("psw").value=d

}
