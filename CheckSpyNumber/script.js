function checkSpyNumber(){
    const numberInput=document.getElementById("numberInput").value;
    const digits=numberInput.toString().split("").map(Number);
    const product=digits.reduce((a,b)=>a*b,1);
    const sum=digits.reduce((a,b)=>a+b,0);

    if(sum===product){
        document.getElementById("result").textContent=`${numberInput} is a spy Number!`;
    }
    else{
        document.getElementById("result").textContent=`${numberInput} is not a spy Number`;
    }
}