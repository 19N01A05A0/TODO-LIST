/*console.log("hello")
let a=prompt("enter key")
let b=prompt("enter value")*/
localStorage.setItem("KEE","DS")
//document.write(localStorage.getItem(a))
function myFunction()
{
    document.getElementById("task_form").style.display="inline"
}
let s=document.getElementById("submit")
s.addEventListener('click',(e)=>
{
e.preventDefault()
let taskc=task.value
let descc=desc.value
console.log(taskc,descc)
localStorage.setItem("todo",[taskc,descc])
document.getElementById("task_form").style.display="none"
}
)
let d=document.getElementById("delete")
d.addEventListener('click',(e)=>
{
e.preventDefault()
localStorage.removeItem("todo")
document.getElementById("task_form").style.display="none"
}
)
let sh=document.getElementById("show-btn")
sh.addEventListener('click',(e)=>
{
    val=localStorage.getItem("todo")
    val1=val.split(",")
    console.log(val,typeof(val),val1,val1[0],val1[1])
document.getElementById("taskname").innerHTML=val1[0]
document.getElementById("taskdesc").innerHTML=val1[1]
document.getElementById("task_form").style.display="none"
document.getElementById("show-items").style.display="inline"
document.getElementById("close").style.display="inline"
}
)
let c=document.getElementById("close")
c.addEventListener('click',(e)=>
{
document.getElementById("task_form").style.display="none"
document.getElementById("show-items").style.display="none"
document.getElementById("close").style.display="none"
}
)
