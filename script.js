let input = document.getElementById('in');
let submit= document.getElementById('submit');
const ulEl=document.getElementById("ul-el");

let myTask=[];
submit.addEventListener('click', ()=>{
     
    myTask.push(input.value);
   
    localStorage.setItem("task",JSON.stringify(myTask));
    input.value=""
    render(myTask)
})

let TaskFromLocalStorage=JSON.parse(localStorage.getItem("task"));

if(TaskFromLocalStorage){   

    myTask= TaskFromLocalStorage
    render(myTask)
 }
 

function render(myTask){
    let listItems=""      //for 3rd or method
    for(let i=0; i< myTask.length; i++){
    
    
        listItems+=  `<li>  ${ myTask[i] }    </li>` 
    }
    
    ulEl.innerHTML=listItems   //for 3rd or method
    
    }

    deleteBtn.addEventListener("dblclick", function(){
        localStorage.clear()
        mylead=[]
        render(mylead)
    
    })

