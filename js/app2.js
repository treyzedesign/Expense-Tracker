window.onload = function(){
    let checker = JSON.parse(localStorage.getItem("income"))
    if(checker != null){
          // Yes there is data then set the new local storage 
          localStorage.setItem("reLoad", JSON.stringify(checker));

          // Then get the data back and push it to our users global array
          let lists = JSON.parse(localStorage.getItem("reLoad"));
          
          lists.forEach(function (item, index) {
            income.push(item)
          });
    }
          // terminate the localStorage
          localStorage.removeItem("reLoad")
}

let butt = document.getElementById("btn")
let list = document.getElementById("list")
let income = []
// let bal = []
butt.addEventListener('click', (e)=>{
    e.preventDefault()
    let amount = document.getElementById('amount').value
    console.log(typeof parseInt(amount));
    // alert("hrhdf")
    if(amount.length > 0){
    let checker = JSON.parse(localStorage.getItem('income'))
       if(checker == null){
            let current ={
                bal : parseInt(amount),
                id : Date.now()
            }
            income.push(current)
            localStorage.setItem("income", JSON.stringify(income))
            // renderBal()
            location.reload()

        }else{
            let current ={
                bal : parseInt(amount),
                id : Date.now()
            }
            income.push(current)
            localStorage.setItem("income", JSON.stringify(income))
            // renderBal()
            location.reload()

        }
       
    }
})

function renderBal (){
    let getIncome = JSON.parse(localStorage.getItem("income"))
    let balance = document.getElementById("balance")
    let income = document.getElementById("income")
    let expense = document.getElementById("minus")
    let incbox = []
    let espBox = []
    if(getIncome == null){
        balance.append("0.00")
    }
    else if(getIncome == null){
        income.append("0.00")
    }
    else if(getIncome == null){
        expense.append("0.00")
    }
    else if(getIncome == null){
        // const li = document.createElement('li');
        list.append(`
          <li class = "history">
             <div>No deposit or transaction made</div>
          </li>
        `)
        // list.append(li)
    }
    else{
        let bal = getIncome.reduce((acc,item)=>{
            return acc += item.bal
        },0)
        // console.log(bal);
        balance.append(bal)
        let inc = getIncome.forEach((item)=>{
            let val = item.bal
            let cal = Math.sign(val);
            if(cal === -1){
                espBox.push(val)
            }else{
                incbox.push(val)
            }
        })
        
        let myIncome = incbox.reduce((acc,item)=>{
            return acc += item
        },0)
        income.append(myIncome);
        let myexpense = espBox.reduce((acc,item)=>{
            return acc += item
        },0)
        expense.append(myexpense);

        getIncome.map(item =>{
       
             let val = item.bal
            let cal = Math.sign(val);
            if(cal === -1){
                 const li = document.createElement('li');
                li.innerHTML= `
                  <div class = "history">
                     <div>withdrew</div>
                     <div style="color: red;">+ ${item.bal}</div
                  </div>
                `
                list.append(li)
            }else{
                 const li = document.createElement('li');
                li.innerHTML= `
                <div class = "history">
                    <div>Deposited</div>
                    <div style="color: green;">+ ${item.bal}</div
                </div>
                `
                list.append(li)
            }
        })
    }
}
renderBal()

let button = document.getElementById('butt')
button.addEventListener('click', ()=>{
    let amount = document.getElementById('trans').value

    let getIncome = JSON.parse(localStorage.getItem("income"))

    let bal = getIncome.reduce((acc,item)=>{
        return acc += item.bal
    },0)
    if (bal < 1){
        alert("insufficient funds")
    }
    else if(amount > bal){
        alert("insufficient funds")
    }
    else{
    
        let current ={
            bal : parseInt(-amount),
            id : Date.now()
        }
        income.push(current)
        localStorage.setItem("income", JSON.stringify(income))
        location.reload() 
    }
    
})