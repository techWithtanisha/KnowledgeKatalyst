console.log("robin");
var x=0;
document.getElementById("exp_comp").addEventListener("click",function(){
    if(x==0){document.getElementById("subject1").style.display="inline-block";x=1;
    document.getElementById("box2").style.display="none";
    document.getElementById("box3").style.display="none";
    document.getElementById("box4").style.display="none";}
    else if(x==1){document.getElementById("subject1").style.display="none";x=0;
    document.getElementById("box2").style.display="inline-block";
    document.getElementById("box3").style.display="inline-block";
    document.getElementById("box4").style.display="inline-block";}
})
document.getElementById("exp_comp2").addEventListener("click",function(){
    if(x==0){document.getElementById("subject2").style.display="inline-block";x=1;
    document.getElementById("box1").style.display="none";
    document.getElementById("box3").style.display="none";
    document.getElementById("box4").style.display="none";}
    else if(x==1){document.getElementById("subject2").style.display="none";x=0;
    document.getElementById("box1").style.display="inline-block";
    document.getElementById("box3").style.display="inline-block";
    document.getElementById("box4").style.display="inline-block";}
})

document.getElementById("exp_comp3").addEventListener("click",function(){
    if(x==0){document.getElementById("subject3").style.display="inline-block";x=1;
    document.getElementById("box1").style.display="none";
    document.getElementById("box2").style.display="none";
    document.getElementById("box4").style.display="none";}
    else if(x==1){document.getElementById("subject3").style.display="none";x=0;
    document.getElementById("box1").style.display="inline-block";
    document.getElementById("box2").style.display="inline-block";
    document.getElementById("box4").style.display="inline-block";}
})

document.getElementById("exp_comp4").addEventListener("click",function(){
    if(x==0){document.getElementById("subject4").style.display="inline-block";x=1;
    document.getElementById("box1").style.display="none";
    document.getElementById("box3").style.display="none";
    document.getElementById("box2").style.display="none";}
    else if(x==1){document.getElementById("subject4").style.display="none";x=0;
    document.getElementById("box1").style.display="inline-block";
    document.getElementById("box3").style.display="inline-block";
    document.getElementById("box2").style.display="inline-block";}
})



 
 