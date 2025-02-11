

function submitData(){

    let Username = document.getElementById ("ID1").value
    let Email = document.getElementById ("ID2").value
    let Password = document.getElementById ("ID3").value
    let Number= document.getElementById ("ID4").value


    let userData = {
        
        myusername : Username,
        myemail : Email,
        mypassword : Password,
        mynumber : Number,

    }

console.log(userData);

}
