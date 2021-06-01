function calculate(){
    let biamount=document.getElementById("billamt").value;
    let service=document.getElementById("serviceQual").value;
    let people=document.getElementById("peopleamt").value;
     let heading=document.getElementById("total");
    if(biamount.length==0){
    alert("Please Enter Bill Amount");
    }
    let tip;
    if(people>1){
    tip=(biamount*service/people).toFixed(2);
     heading.classList.add("text-center");
         heading.innerHTML += "<br>TIP AMOUNT<br>" + "<sup>$</sup>" + tip+"<br />each";
    }else if(people==1){
         tip = (biamount * service).toFixed(2);
         heading.classList.add("mt-4");
         heading.classList.add("text-center");
         heading.innerHTML += "<br>TIP AMOUNT<br>" + "<sup>$</sup>" + tip;
    }
    
 
 }