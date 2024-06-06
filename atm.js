const judeAccount = {
    accountName: "Onele Jude" ,
    acctNumber: 1234567890 ,
    pin: 5555 ,
    acctBalance: 300000 ,
    phoneNumber: +2348022334455 ,

}
 // Get the pin being entered in the website pin input box
 const getPin = document.getElementById("pin")

 // Catch and present the pin from the site
 function catchAtmPin(){
    const pinEntered = getPin.value
    console.log(pinEntered, ' i have been called')

    checkPin(pinEntered)

    return pinEntered

}

// compare supplied pin to the Account's pin
function checkPin(pin){
    // 
    if(Number(pin) === judeAccount.pin){
        console.log('correct pin')
        alert('correct pin')

    }else{
        console.log('incorrect pin')
        alert('incorrect pin')
    }
}

function checkAcctBalance() {
    const bal = judeAccount.acctBalance
    alert(bal)
}
console.log (judeAccount)

//Get withdrawal amount

const withdrawAmount = document.getElementById("with")


function withdrawal() {
    const amount = Number (withdrawAmount.value)
    //const amount1= Number(amount)
    console.log (amount)
judeAccount.acctBalance = judeAccount.acctBalance - amount
console.log(judeAccount.acctBalance)
alert('Withdrawal Successful' + ' ' + judeAccount.acctBalance)
}