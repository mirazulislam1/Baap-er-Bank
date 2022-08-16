    document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawElement = document.getElementById('withdraw-field');
    const withdrawElementString = withdrawElement.value;
    const newWithdrawElement = parseFloat(withdrawElementString);


    const totalWithdrawElement = document.getElementById('total-withdraw')
    const totalBalanceElementString = totalWithdrawElement.innerText;
    const totalBalanceElement = parseFloat(totalBalanceElementString);

    

    withdrawElement.value = '';

    const BalanceElement = document.getElementById('balance-total');
    const totalBalanceString = BalanceElement.innerText;
    const totalBalance = parseFloat(totalBalanceString);
    
    if(newWithdrawElement > totalBalance){
        alert('bap er bank a ato taka nai');
        return;
    }
    const newTotalWithdraw = totalBalanceElement + newWithdrawElement;
    totalWithdrawElement.innerText = newTotalWithdraw;

    const currentBalance = totalBalance - newWithdrawElement
    BalanceElement.innerText = currentBalance;

})