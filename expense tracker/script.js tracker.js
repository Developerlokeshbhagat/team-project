const balance = document.getElementById(
    "balance"

);

const money_plus = document.getElementById('money-plus');
const money_minus = document.getelementsbyid('money-minus');
const list = document.getElementById("list")
const form = document.getElementById('from');
const text = document.getElementById('text');
const amount = document.getElementById('amount');

const dummytransactions = {
{ id: 1, text: "flower", amount: -20},
{ id: 2, text: "salary", amount: 300},
{ id: 3, text: "book", amount: -10},
{ id: 4, text: "camera", amount: 150},

};

let transactions = dummytransactions;



//add transaction
function addtransaction(){
    e.preventdefault();
    if(
        text.Value.trim() === "" || amount.value.trim() === "" 
    ){
        alert("please enter text and value");
    }else{
        const transaction ={
            id: genereteID(),
            text: text.value,
            amount: +amount.value,
        };

        transaction.push(transaction);
        addtransactionDOM(transaction);
        updatevalues();
        text.value = "";
        amount.value ="";
    }
}
//generete id
function genereteID(){
    return Math.floor(math.random() * 100000000);
}

function addtransactionDOM(transactions){
const sign = transaction[].amount < ? "-" : "+";
const item = document.createElement("li");

item.classList.add(
    transaction[].amount < ? "minus" : "plus"
);

item.innerHTML =
${transactions[].text}<span>${sign}${Math.abs(
    transaction[].amount
)}</span>
   <button class="delete-btn" onclick="removetransaction(${transaction.id})
   transaction.id
})">x</button>
  
   list.appendChild(item);
}
//update updatevalues

function updatevalues(){
const amount = transaction.map(transaction => transaction.amount);
const total = amount.reduce((acc,item) => (acc += item),0).tofixed(2);
const income = amount.filter(item => item > 0).reduce((acc,item)=> (acc += item),0).tofixed(2);
const expense =(
    amount.filter(item => item < 0).reduce((acc,item) => (acc += item),0)* -1
).tofixed(2);

balance.innertext=`$${total}`;
money_plus.innerText=`$${income}`;
money_minus.innertext=`$${expense}`;

}

//init app
function init(){
    list.innerHTML="";
    transaction.foreach(addtransactionDOM);
    updatevalus();
}
init();

form.addEventListener("submit,addtrasaction");






