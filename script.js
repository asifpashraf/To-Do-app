const one =document.getElementById('addTask')
// const ones =document.getElementById('addtask')
const myList =document.getElementById('taskHere')
const completed = document.getElementById("completed")

function createTask(){
    if(one.value==''){
        alert("write something")
    }
    else      {
        
        // alert("you are moving forward")
        
        //  created elemente
        const li = document.createElement('li')
        const span =document.createElement('input')
        const createcheck = document.createElement('input')
        const deleted = document.createElement('button')
        const edit = document.createElement('button')
        const complet = document.getElementById('completed')
        const tasks = document.getElementById("taskHere")

        
        span.style.border ='none'
    //event listener
    createcheck.addEventListener("click",function(){
        li.removeChild(createcheck)
        li.removeChild(edit)
        complet.appendChild(li)
        
    })
    edit.addEventListener("click",function(){
// edit option
        edit.textContent ="save"
        if(edit.textContent ="save"){
            edit.addEventListener("click",function(){
                edit.textContent ="edit"
            })
        }
        
        
    })
    deleted.addEventListener("click",function(){
        li.parentElement.removeChild(li)
    })
    // create text content

        // li.textContent =one.value
        span.value =one.value
        deleted.textContent ="delete"
        edit.textContent ="edit"
        
        createcheck.type ="checkBox"
        
        // append child for li
        myList.appendChild(li)
        li.appendChild(span)
        li.appendChild(createcheck)
        li.appendChild(edit)
        li.appendChild(deleted)
        one.value = ''
    }

}


function NightMode() {
    document.body.classList.toggle('night-mode');
}


