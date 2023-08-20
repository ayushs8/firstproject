document.getElementById("dt1").style.color="red";
document.getElementById("dt1").style.fontSize="30px"
function cal(ele1)
{
  if(isNaN(ele1.value))
  {
    document.getElementById('dt1').innerText="Please Enter numbers only";
    
  }
  else {
    document.getElementById('dt1').innerText="";
    if(ele1.value.length >2)
    {
      document.getElementById('dt1').innerText="Please enter  only two digit";
      
    }
      else 
      {
     document.getElementById('dt1').innerText="";
     
     
      }
      
      
    }
  
    
    
  }
 
  document.getElementById("dt2").style.color="red";
document.getElementById("dt2").style.fontSize="30px"
function val(ele2) 
{
  if(isNaN(ele2.value))
  {
    document.getElementById('dt2').innerText="Please Enter numbers only";
    
  }
  else {
    document.getElementById('dt2').innerText="";
    if(ele2.value.length >10)
    {
      document.getElementById('dt2').innerText="Please enter  only ten digit";}
      else 
      {
     document.getElementById('dt2').innerText="";
     
     
      }
      
      
    }
}

function fun(user)
{
var user=document.getElementById("user").value;
var userstyle=document.getElementById("user");
var userexp=/^[A-Za-z_.0-9]{6,30}@[A-Za-z]{2,12}.[A-Za-z.]{2,8}$/;
if(userexp.test(user))
  {
   userstyle.style.outline="2px solid green";
   userstyle.style.border="none";
  }
  else
  {
     userstyle.style.outline=":2ps solid black";
     userstyle.style.border="none";
    
    
  }
}
document.getElementById("yt").style.color="red";
document.getElementById("yt").style.fontSize="30px"

function fun2()
{
var correct_way=/^[A-Za-z]/;
var a=document.getElementById("box2").value;

  

  if(a.match(correct_way))
  true;
  else {
    document.getElementById("yt").innerHTML="*only alphabets allowed";
    return false;
  }
}
document.getElementById("yt2").style.color="red";
document.getElementById("yt2").style.fontSize="30px"

function fun3()
{
var correct_way=/^[A-Za-z]/;
var a=document.getElementById("box3").value;

  

  if(a.match(correct_way))
  true;
  else {
    document.getElementById("yt2").innerHTML="*only alphabets allowed";
    return false;
  }
}
  document.getElementById("yt3").style.color="red";
document.getElementById("yt3").style.fontSize="30px"

function fun4()
{
var correct_way=/^[A-Za-z]/;
var a=document.getElementById("box7").value;

  if(a.match(correct_way))
  true;
  else {
    document.getElementById("yt3").innerHTML="*only alphabets allowed";
    return false;
  }
}
document.getElementById("yt4").style.color="red";
document.getElementById("yt4").style.fontSize="30px"

function fun5()
{
var correct_way=/^[A-Za-z]/;
var a=document.getElementById("box9").value;

  

  if(a.match(correct_way))
  true;
  else {
    document.getElementById("yt4").innerHTML="*only alphabets allowed";
    return false;
  }
}
document.getElementById("yt5").style.color="red";
document.getElementById("yt5").style.fontSize="30px"

function fun6()
{
var correct_way=/^[A-Za-z]/;
var a=document.getElementById("box10").value;

 

  if(a.match(correct_way))
  true;
  else {
    document.getElementById("yt5").innerHTML="*only alphabets allowed";
    return false;
  }
}