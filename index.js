function primeNum(){
    var num = document.getElementById("data").value;
    let cnt=0,i,clr;
    if (num =="")
    {

        document.getElementById("letter").innerHTML="Plz Enter Number";
    }
    
    else if (num<2)
    {
        clr.style.color="White";
        document.getElementById("letter").innerHTML="Not Prime";
        return;
        
    }

    for(i=2;i<num;i++){
        if(num%i===0){
            // console.log("Number is not prime");
            clr=document.getElementById("letter");
            // clr.style.color="White";
            document.getElementById("letter").innerHTML="Not Prime";
            break;
        }
        else{
            cnt++;
        }
    }
    if(cnt==num-2){
        console.log("prime");
        clr=document.getElementById("letter");
        // clr.style.color="White";
        document.getElementById("letter").innerHTML="Prime";
    }
    
}










