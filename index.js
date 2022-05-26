const washBtn = document.getElementById('wash-car')
const mowBtn = document.getElementById('mow-lawn')
const pullBtn = document.getElementById('pull-weeds')
const task = document.getElementById('task-el')
const total = document.getElementById('total-el')
const sum = document.getElementById('sum')
let services = [{task: 'Wash Car', Total: '$10'},
                {task: 'Mow Lawn', Total: '$20'},
                {task: 'Pull Weeds', Total: '$30'}]
let totalAmount = 0
let isWashCarAlive = true
let isMowLawnAlive = true
let isPullWeedsAlive = true
//console.log(container)
washBtn.addEventListener('click', function(){
    if(isWashCarAlive === true){
        task.innerHTML += `<li>Wash Car</li>`
        total.innerHTML += `<li>$10</li>`
        totalAmount += 10
        render()
        isWashCarAlive = false 
        }else{console.log('already picked!')}
        })
mowBtn.addEventListener('click', function(){
    if(isMowLawnAlive === true){
        task.innerHTML += `<li>Mow Lawn</li>`   
        total.innerHTML += `<li>$20</li>`
        totalAmount += 20 
        render() 
        isMowLawnAlive = false
    } else{ console.log('already picked!')}
 
})
pullBtn.addEventListener('click', function(){
    if(isPullWeedsAlive===true){
    task.innerHTML += `<li>Pull Weeds</li>`
   total.innerHTML += `<li>$30</li>`
   totalAmount += 30
   render()
   isPullWeedsAlive = false
    } else { console.log('already picked!')}
})
function render(){
    sum.textContent = '$' + totalAmount}
  
  function reset(){
      totalAmount = 0
    task.innerHTML = 'TASK'
    total.innerHTML = 'TOTAL'
    sum.textContent = '$'+ 0
    isMowLawnAlive = true
    isWashCarAlive = true
    isPullWeedsAlive = true
}

