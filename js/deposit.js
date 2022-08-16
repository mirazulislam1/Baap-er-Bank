document.getElementById('btn-deposit').addEventListener('click',function(){
    const depositFieldElement = document.getElementById('deposit-field')
    const newDepositString = depositFieldElement.value;
    const newDeposit = parseFloat(newDepositString);
    
    const previousdeposit = document.getElementById('previous-deposit');
    const previousdepositTotalString = previousdeposit.innerText;
    const previousdepositTotal = parseFloat(previousdepositTotalString);

    const totalNewDeposit = previousdepositTotal + newDeposit;
    previousdeposit.innerText = totalNewDeposit;
    depositFieldElement.value = '';

    const totalBalanceElement = document.getElementById('balance-total');
    const totalBalanceString = totalBalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    const currentBalance = totalBalance + newDeposit
    totalBalanceElement.innerText = currentBalance;
    
 
})