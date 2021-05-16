
   alert("This is simple calulator.Don't expect more...");

function input(val)
{
    document.getElementById("screen").value+=val;
}

function clr(){
    document.getElementById("screen").value=""
}

function eql(){
    var test=document.getElementById("screen").value
    var result=eval(test)
    document.getElementById("screen").value=result;
}

function space(){
    var test=document.getElementById("screen").value
    test=test.slice(0,test.length-1);
    document.getElementById("screen").value=test;
}