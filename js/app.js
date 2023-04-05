window.onload = function(){
    let checker = JSON.parse(localStorage.getItem("history"))
    if(checker != null){
          // Yes there is data then set the new local storage 
          localStorage.setItem("reLoad", JSON.stringify(checker));

          // Then get the data back and push it to our users global array
          let lists = JSON.parse(localStorage.getItem("reLoad"));
          console.log(lists);
          
          lists.forEach(function (item, index) {
            deposit.push(item)
            console.log(item);

          });
    }
          // terminate the localStorage
          localStorage.removeItem("reLoad")
    

}
let deposit = []
const box = []
let bal = []
    let butt = document.getElementById("btn")
    let list = document.getElementById("list")
butt.addEventListener("click", (e)=>{
    e.preventDefault()
    let amount = document.getElementById('amount').value
    console.log(typeof parseInt(amount));
    if(amount.length > 0){
    let checker = JSON.parse(localStorage.getItem('income'))
       if(checker == null){
        let current ={
            bal : parseInt(amount),
            amount : amount
        }
       box.push(current)
       deposit.push(current.amount)
       localStorage.setItem('income', JSON.stringify(box))
       localStorage.setItem("income2", JSON.stringify(box))
       localStorage.setItem("history", JSON.stringify(deposit))
       location.reload()
    }else{
        let getter = JSON.parse(localStorage.getItem('income'))
        let plus = getter.forEach((item) => {
            item.bal + parseInt(amount)
            console.log(item.bal + parseInt(amount));
            let current ={
                bal : item.bal + parseInt(amount),
                amount: amount
            }
            bal.push(current)
            deposit.push(current.amount)
            console.log(bal);
        });
        localStorage.setItem('income', JSON.stringify(bal))
        localStorage.setItem("income2", JSON.stringify(bal))
        localStorage.setItem("history", JSON.stringify(deposit))
       
        location.reload()

    }
    
    }
    
})
function balance(){
    let balance = document.getElementById("balance")
    let income = document.getElementById("income")
    let getinc = JSON.parse(localStorage.getItem('income2'))
    let getbal = JSON.parse(localStorage.getItem('income'))
    let history = JSON.parse(localStorage.getItem("history"))
    // console.log(getbal);
    if(getbal === null){
        balance.append("0.00")
    }if(getinc === null){
         income.append('0.00')
    }if(history === null){
        const li = document.createElement('li');
        li.innerHTML= `
          <div class = "history">
             <div>No deposit or transaction made</div>
          </div>
        `
        list.append(li)
    }
    else{
        getbal.map((item)=>{
            balance.append(item.bal)
        })
        getinc.map((item)=>{
            income.append(item.bal)
        })
        history.map((item)=>{
            const li = document.createElement('li');
            li.innerHTML= `
              <div class = "history">
                 <div>Deposited</div>
                 <div style="color: green;">+ ${item}</div
              </div>
            `
            list.append(li)
        })
    }
}
balance()

let trans =[]
 let button = document.getElementById('trns')
 button.addEventListener('click', (e)=>{
     e.preventDefault()
    let text = document.getElementById("text").value
    let trans = document.getElementById("trns").value
    if(text.length > 0 && trans.length > 0){
        let checker = JSON.parse(localStorage.getItem('spend'))
           if(checker != null){
            let current ={
                text: text,
                bal : parseInt(trans),
            }
           trans.push(current)
           localStorage.setItem('spend', JSON.stringify(trans))
           
           location.reload()
        }
    }
 })