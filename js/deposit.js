// step-1 add eventlistener
document.getElementById('deposit-btn').addEventListener('click',function(){
  //  step-2 get the amount by input value
    const depoField=document.getElementById('deposit-field');
       const newTotalString=depoField.value ;
       const newTotal=parseFloat(newTotalString)
    // step-3 current account deposit
    const depositTotal=document.getElementById('depo-result');
    const previousTotalString=depositTotal.innerText;
    const previousTotal=parseFloat(previousTotalString)
    // step-4 total deposit
    const currentTotal=newTotal+previousTotal;
    depositTotal.innerText=currentTotal;
    depoField.value=" ";
    // step-5 get total balance
   const balanceTotal=document.getElementById('total-blance');
   const previousBalanceString=balanceTotal.innerText;
   const previousBalanceTotal=parseFloat(previousBalanceString);
//    step-6 total amount ad
   const TotalAmount=previousBalanceTotal+newTotal;
   balanceTotal.innerText=TotalAmount;

})