function subb()

{
var e=document.getElementById("eid").value 
var d=document.getElementById("dep").value 
var s=document.getElementById("sal").value
var a=document.getElementById("add").value
var repm=/\d/

var rep=/\W/
if(!repm.test(e))
{
alert("EMP-ID should contains only DIGITS")

}
if(rep.test(d))
{
alert("DEPARTMENT should contains only letters")

}
if(!repm.test(s))
{
alert("SALARY should contains only DIGITS")
}
var db=openDatabase('mydb','1.0','dts',2 * 1024 * 1024)
db.transaction(function(tx){

tx.executeSql('CREATE TABLE IF NOT EXISTS EMP(empid real unique,dept text,sal real,addr text)')
tx.executeSql('INSERT INTO EMP(empid,dept,sal,addr)VALUES(?,?,?,?)',[e,d,s,a])

})
}
function disc()
{

var db=openDatabase('mydb','1.0','dts',2 * 1024 * 1024)
db.transaction(function(tx){

tx.executeSql('SELECT * FROM EMP',[],function(tx,results){ var i;len = results.rows.length

var r,c1,c2,c3,c4,de,sa,ad,ed
for(i=0;i<=len;i++)
{

t = document.getElementById("my")

r	= t.insertRow(1) c1 = r.insertCell(0)
c2 = r.insertCell(1)
c3 = r.insertCell(2)
c4 = r.insertCell(3)
ed=results.rows.item(i).empid
de=results.rows.item(i).dept
sa=results.rows.item(i).sal
ad=results.rows.item(i).addr

c1.innerHTML =ed
c2.innerHTML =de
c3.innerHTML =sa
c4.innerHTML =ad

}
})
})

}
