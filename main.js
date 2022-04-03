
var bankATM = {
  branch: "PSK",
  open: true,
  options: ["(1) open a bank account", "(2) put money in your bank account", "(3) withdraw money from your account",
    "(4) request for a loan", "(5) close your account"]
}

var client = {
  id: 1,
  name: "",
  family: "",
  credit: 0
}



function findId(){
  let name = prompt("Please enter your name", "Harry Potter");
    if (name != null) {
    document.getElementById("name").innerHTML =
    "Hello " + name;
    client.name = name;
  }
}


function dataLoop() {
  for (let i in bankATM.options) {
    console.log(bankATM.options[i])
  }
}


const openBankAccount = () => {
  findId();
  const family = prompt("FAMILY NAME");
  client.family = family;
  console.log(`YOU ACCOUNT >>>> ${client.name} ${client.family} \n CREDIT OF ${client.credit}`);
  console.log('_______________________');
  confirm("WOULD YOU LIKE TO CONTINUE?") ? putMoney() : console.log("THANKS FOR TRUSTING OUR BANK");

}
const putMoney = () => {
  const amount = prompt("PLEASE INSERT THE AMOUNT YOU WANT TO PUT IN YOUR ACCOUNT");
  client.credit = amount;
  console.log(`${client.name} ${client.family}'s CREDIT >>>> ${client.credit} Euro`);
  console.log('_______________________');
}


while (bankATM.open) {
  dataLoop()
  const answer = prompt("HOW CAN I HELP? SELECT BY NUMBER");
  if (answer > 0 && answer < 6) {
    console.log('_______________________');
    console.log(bankATM.options[answer - 1]);
    openBankAccount()
  }


  bankATM.open = false;
}


