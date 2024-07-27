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
        const createcheck = document.createElement('input')
        const deleted = document.createElement('button')
        const edit = document.createElement('button')

        

    //event listener
        deleted.addEventListener("click",function(){
            myList.removeChild(li)
        })
        createcheck.addEventListener("click",function(){
            const complet = document.getElementById('completed')
            complet.appendChild(li)
            
        })
        // create text content

        li.textContent =one.value
        deleted.textContent ="delete"
        edit.textContent ="edit"
        
        createcheck.type ="checkBox"
        
        // append child for li
        myList.appendChild(li)
        li.appendChild(createcheck)
        li.appendChild(edit)
        li.appendChild(deleted)
        one.value = ''
    }

}

