document.getElementById('submit-btn').addEventListener('click',function(){
    // step-2
    const winthdrawBalance=document.getElementById('withdraw-amount');
    const TotalAmount=winthdrawBalance.value ;
    const newWithdraw=parseFloat(TotalAmount)
    // step-3
    const withdrawPaisa=document.getElementById('withdraw-paisa');
    const previousWithdraw=withdrawPaisa.innerText;
    const previousPaisa=parseFloat(previousWithdraw);
    const totalPaisa=previousPaisa+newWithdraw;
    withdrawPaisa.innerText=totalPaisa;
    winthdrawBalance.value=" ";
    // step-5
   const mainBalance= document.getElementById('total-blance');
   const mainPreviousBalance=mainBalance.innerText;
   const previousBalance=parseFloat(mainPreviousBalance);
   const totalMainBalance=previousBalance -newWithdraw
   mainBalance.innerText=totalMainBalance;

})