const billamount =document.querySelector("#bill-amount");
const tippercentage= document.querySelector("#tip-percentage");
const calculate = document.querySelector("#calculate");
const output = document.querySelector("#total-bill");

calculate.addEventListener("click",()=>{

    if(billamount.value ==="" || tippercentage.value ==="")
    {
      alert("Please enter the value");
      return;
    }
    else if(billamount.value <0 || tippercentage.value <0)
    {
      alert("Please enter the positive value");
      return;
    }
    else
    {
      const billamountvalue = parseFloat(billamount.value);
      const tippercentagevalue = parseFloat(tippercentage.value);
      console.log(billamountvalue,tippercentagevalue );
      const tiplamount = billamountvalue * (tippercentagevalue/100);
      const totalbill = billamountvalue + tiplamount;
      output.innerText = totalbill;
    }
})