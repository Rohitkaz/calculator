function calc(){
var result=document.getElementById("input").value;
document.getElementById("input").value=eval(result);
}
function del()
{
   var result= document.getElementById("input");
   result.value=result.value.slice(0,-1);
}