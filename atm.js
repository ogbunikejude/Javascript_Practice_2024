// const judeAccount = {
//     accountName: "Onele Jude" ,
//     acctNumber: 1234567890 ,
//     pin: 5555 ,
//     acctBalance: 30000 ,
//     phoneNumber: +2348022334455 ,

// }
// const segunAccount = {
//     accountName: "Segun" ,
//     acctNumber: 1234567891 ,
//     pin: 1234 ,
//     acctBalance: 40000 ,
//     phoneNumber: +2348022334456 ,

// }

const accounts = [
    {
    acctName: 'Onele Jude' ,
    acctNumber: 1234567890 ,
    pin: 5566 ,
    acctBalance: 30000 ,
    phoneNumber: +2348022334455 ,
},
{
    acctName: 'Segun' ,
    acctNumber: 1234567800 ,
    pin: 1234 ,
    acctBalance: 50000 ,
    phoneNumber: +2348022334456 ,
}, 
{
    acctName: 'Caye' ,
    acctNumber: 1234567892 ,
    pin: 4567 ,
    acctBalance: 40000 ,
    phoneNumber: +2348022334457 ,
},

]
 // Get the pin being entered in the website pin input box
 const getPin = document.getElementById("pin")
 const msgOne = document.getElementById("msg1")
 const msgTwo = document.getElementById("msg2")
const username = document.getElementById("username")

//Function to find a user with the account number provided
function findUser(acctNumber){
    const user = accounts.find((element)=>{
        return element.acctNumber == acctNumber
     })
     if (user== undefined || user== null){
        alert('User does not exist')

     }
     return user

}

function findIndexOfUser(acctNumber){
     const index = accounts.findIndex((element)=>{
        return element.acctNumber == acctNumber
     })
     if (index === -1) {
        alert('Account not found')
     }

     return index
}

// Function to get account number and user pin and serach database if the account number and pin exists
 function welcomeAtmUser() {
    const acctNumber = Number(prompt('What is your Account Number?'))
    if (Number.isNaN(acctNumber)) {
        alert('Invalid Account Number')
    }
    const acctPin = Number(prompt('Enter your PIN number?'))
    if (Number.isNaN(acctPin)) {
        alert('Incorrect PIN')
    }
     const user = findUser(acctNumber)
     
    if (user.pin === acctPin) {
        username.innerText = username.innerText + ' ' + user.acctName + '!'
       
    } else {
        alert('Invalid Account Number and Pin')
    }
   
    localStorage.setItem('Account Number', user.acctNumber)
    console.log(user)
 }

 // Catch and present the pin from the site
 function catchAtmPin(){
    const pinEntered = getPin.value
    console.log(pinEntered, ' i have been called')

    checkPin(pinEntered)

    return pinEntered

}

// compare supplied pin to the Account's pin
// function checkPin(pin){
//     // 
//     if(Number(pin) === judeAccount.pin){
//         console.log('correct pin')
//         alert('correct pin')

//     }else{
//         console.log('incorrect pin')
//         alert('incorrect pin')
//     }
// }

// function checkAcctBalance() {
//     const bal = judeAccount.acctBalance
//     msgOne.innerHTML = 'Your Account balance is ' + '  ' + bal
// }
// console.log (judeAccount)

function checkBalance () {
    let acctNumber = localStorage.getItem('Account Number')

    const user = findUser(acctNumber)
    msgTwo.innerHTML = 'Your Account Balance is' +'   '+ user.acctBalance


}

//Get withdrawal amount

const withdrawAmount = document.getElementById("with")


// function withdrawal() {
//     const withdraw = Number (prompt('How much do you want to withdraw?'))
//   if (withdraw >= judeAccount.acctBalance) {
//     msgTwo.innerHTML = 'Insufficient funds'
    
//   } else {
//     judeAccount.acctBalance -= withdraw
//   }

// The line above can also be rewritten as shown below
// judeAccount.acctBalance = judeAccount.acctBalance - withdraw
// console.log(judeAccount.acctBalance)
// msgOne.innerHTML = 'Withdrawal Successful!!' + '    ' + 'Please Take your Cash' 
// msgTwo.innerHTML = 'Your new balance is ' +'   '+ judeAccount.acctBalance
// }

function acctWithdrawal(){
    let acctNumber = localStorage.getItem('Account Number')
    const user = findUser(acctNumber)

    const withdrawAmount = Number(prompt('Please Enter the amount to Withdraw'))
    if (withdrawAmount >= user.acctBalance) {
        msgTwo.innerHTML = 'Insufficient funds'
    } else {
        user.acctBalance -= withdrawAmount

        const userindex = findIndexOfUser(acctNumber)
        accounts[userindex]= user

        msgOne.innerHTML = 'Withdrawal Successful' 
        msgTwo.innerHTML = 'Your Account Balance is now' +'   '+ user.acctBalance

    }
}
// function deposit() {
//     const deposit = Number(prompt('How much do you want to deposit'))
//     judeAccount.acctBalance += deposit

//     console.log(judeAccount.acctBalance)

//     msgOne='deposit Successful' 
//     msgTwo= 'your Account Balance is now' +'   '+ judeAccount.acctBalance
// }

function acctPinChange (){
    let acctNumber = localStorage.getItem('Account Number')

    const user = findUser(acctNumber)
    const oldPin = Number(prompt('Please Enter Your Old PIN'))

    if (oldPin==user.pin) {
        const newPin1 = Number(prompt('Enter Your New Pin'))
        const newpin3 = Number(prompt('Re-Enter Your New Pin'))
        if (newPin1===newpin3) {
            user.pin=newPin1

            const userIndex= findIndexOfUser(acctNumber)
            accounts[userIndex] = user

            msgOne.innerHTML= 'Pin changed successfully'
        } else {
            msgTwo.innerHTML = 'Pin Mismatch, please enter your new pin again'
        }

    } else {
        msgTwo.innerHTML = 'Pin Mismatch, please enter your old pin again'
    }


}

// function changePin() {
//     const newPin = Number(prompt('Please enter Your New PIN'))
//     const newPin2 = Number(prompt ('Please Enter Your new Pin again'))

//     if (newPin=== newPin2) {
//         judeAccount.pin=newPin
//         console.log(judeAccount)
//         msgOne.innerHTML= 'Pin changed successfully'
//     } else {
//         msgTwo.innerHTML = 'Pin Mismatch, please enter your new pin again'
        
//     }
// }

// Working with Array methods

function depositIntoAccount(){
    let acctNumber = localStorage.getItem('Account Number')
    // const userData= JSON.parse(data)
    // const acctNumber = userData.acctNumber

console.log(acctNumber, 'After parsing')
    const deposit = Number(prompt('How much do you want to deposit?'))

    const user = findUser(acctNumber)

    user.acctBalance += deposit

    const userIndex = findIndexOfUser(acctNumber)  // Find index of user
    accounts[userIndex] = user  // update user account

    console.log(user.acctBalance)

    msgOne.innerHTML = 'Deposit Successful' 
    msgTwo.innerHTML = 'Your Account Balance is now' +'   '+ user.acctBalance

}

function transfer (){
    let acctNumber = localStorage.getItem('Account Number')
    console.log(accounts)

    const acctNumberOne = Number(prompt('Please enter the Account Number to transfer to?'))
    if (Number.isNaN(acctNumberOne)) {
        alert('Invalid Account Number')
    }
     const user1 = findUser(acctNumberOne)
     const user = findUser(acctNumber)
     
    if (user1.acctNumber === acctNumberOne) {
        alert('Beneficiary Name is '+ '  '  + user1.acctName)
        // msgOne.innerHTML = 'Beneficiary Name is '+ '  '  + user1.acctName
   
    } 
    const transferAmount = Number(prompt('How much do you want to transfer?'))
    if ( transferAmount >= user.acctBalance) {
        msgTwo.innerHTML = 'Insufficient Fund'
    } 
    
    else {       

        user1.acctBalance += transferAmount
        user.acctBalance -= transferAmount
        const userindex = findIndexOfUser(acctNumber)
        accounts[userindex]= user
        const userIndexOne = findIndexOfUser(acctNumberOne)
        accounts[userIndexOne]= user1
        console.log(accounts)

        msgOne.innerHTML = 'Transfer Successful' 
        msgTwo.innerHTML = 'Your Account Balance is now' +'   '+ user.acctBalance
    }
    }
