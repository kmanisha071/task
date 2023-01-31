let acc_no_counter = 0;

let accounts = []

function createAccount(name, address) {
    acc_no_counter += 1;
    return {
        "account_no": acc_no_counter,
        "name": name,
        "address": address,
        "balance": 0
    }
}




function main() {
    let choice = false;
    do {
        console.log("=================================");
        console.log("           MENU                  ");
        console.log("=================================");
        console.log("[1] Create Account");
        console.log("[2] View Account");
        console.log("[3] Deposit");
        console.log("[4] Withdraw");
        choice = prompt(":: ");

        switch (parseInt(choice)) {
            case 1:
                {
                    console.log("=================================")
                    console.log("     CREATE ACCOUNT                ")
                    console.log("=================================")
                    name = prompt("Enter the name:: ")
                    address = prompt("Enter the address:: ")
                    let account = createAccount(name, address)
                    accounts.push(account)
                    console.log("Account Created")
                }
                break
            case 2:
                console.log("view")
                //console.log("Name-", name)
                //console.log("Address-",address)
                //console.log("Balance = 0")
                search = prompt("Search by name:")

                let obj = accounts.find(o => o.name === search);
                if (obj) {
                    console.log(obj);

                }
                else {
                    console.log("Enter valid name");
                }




                break;
            case 3:
                console.log("deposit")
                search = prompt("Search by name:")
                deposit = prompt("Enter amount:")

                let index = accounts.findIndex(value => value.name === search);
                if (index != -1) {
                    //console.log(index);
                    accounts[index].balance = parseInt(accounts[index].balance) + parseInt(deposit);
                }

                break;

            case 4:
                console.log("withdraw")
                search = prompt("Search by name:")
                withdraw = prompt("Enter amount:")

                let index2 = accounts.findIndex(value => value.name === search);
                if (index2 != -1) {
                    accounts[index].withdraw = ((accounts[index2].balance + deposit) > 0);
                    let totalbalance = ((accounts[index2].balance + deposit) - withdraw);
                    console.log(totalbalance);
                }
                    break;
            
        default:
                console.log("invalid");
        }
    } while (true);


}


main();
