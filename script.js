const one =document.getElementById('addTask')
// const ones =document.getElementById('addtask')
const myList =document.getElementById('taskHere')
const completed = document.getElementById("completed")

function createTask(){
    if(one.value==''){
        alert("write somethimg")
    }
    else if(one.value!==''){
        // alert("you are moving forward")
        const li = document.createElement('li')
        li.id="myLi"
        const createcheck = document.createElement('input')
        createcheck.type ="checkBox"
        createcheck.id="myCheck"
        li.textContent =one.value
        myList.appendChild(li)
        li.appendChild(createcheck)
        one.value = ''
        
    }
    return li
}

