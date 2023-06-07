class tasks {
    constructor(taskName,numberPriority,checkBox){
        this.name=taskName;
        this.priority=numberPriority;
        this.checkBox=checkBox;
    }
}

class buildTasks {
    taskContainer=[];
    tasksBody;
    constructor(tasksBody){
        this.taskB=tasksBody;
    }
    addTask(){
        if(this.validatinNameInput() && this.validatinPriorityInput()==true){
            var task = {
                name: taskName.value,
                priority: numberPriority.value,
            }
            this.taskContainer.push(task);
            this.sortList();
            this.trTask()
            this.clearTask()
        }
        else{
        }
    }
    

     trTask(){
        let result="";
        for (let i = 0 ; i < this.taskContainer.length; i ++ ){
            let tdItem = this.taskContainer[i];
    
            result+= `<tr>
            <td><select class="form-select"><option>Open</option><option>Done</option><option>Undone</option></select></td>
            <td>${tdItem.name}</td>
            <td>${tdItem.priority}</td>
            <td><button class="btn btn-warning" onclick="trBtn.updateTask(${i})">Edit</button></td>
            <td><button class="btn btn-danger" onclick="trBtn.deleteTask(${i})">Delete</button></td>
            <td><input class="form-check-input" type="checkbox" ${tdItem.checkBox} onclick="trBtn.box(${i})"></td>
            </tr>`;

        }
        result+= (this.taskContainer.length> 0)?`<button class="btn btn-success mt-5" onclick="trBtn.DeleteBox()">Delete Checked</button>`:``;
        this.taskB.innerHTML=result;
    }

    sortList(){
    
        let sortedList = document.getElementById("list").value;
        if(sortedList==2){
            this.taskContainer.sort(function(a, b){
                return (a.priority=='Medium')? -1 :1 
            });
            this.taskContainer.sort(function(a, b){
                return (a.priority=='High')? -1 :1 
            });
        }
        else if(sortedList==1){
            this.taskContainer.sort(function(a, b){
                return (a.priority=='Medium')? -1 :1 
            });
            this.taskContainer.sort(function(a, b){
                return (a.priority=='Low')? -1 :1 
            });
        }
        this.trTask();
    }
    deleteTask(i){
        this.taskContainer.splice(i, 1);
        this.tableRender();
    }
    
     clearTask() {
        taskName.value= "";
        numberPriority.value= "";
     } 

    updateTask(i){
        taskName.value=this.taskContainer[i].name;
        numberPriority.value=this.taskContainer[i].priority;
        this.deleteTask(i);
        this.trTask();
    }
    
    deleteTask(i){
        this.taskContainer.splice(i,1);
        this.trTask();
    }


    box(i,l){
        this.taskContainer
        [i].checkBox=
        this.taskContainer
        [i].checkBox? 0:1;
    }
    DeleteBox(){
        for (let i=0;i< this.taskContainer.length; i++){
            if(this.taskContainer[i].checkBox){this.deleteTask(i); i --;
            }}}

            
    validatinNameInput(){
                let regex=/^[Aa-zZ]/;
                if(regex.test(taskName.value)==true){
                    document.getElementById("errorTask").innerHTML= "Correct";
                    document.getElementById("errorTask").style.color="green";
                    taskName.style.borderColor="green";
                     return true;
                }
                else{
                    document.getElementById("errorTask").innerHTML= "This is a required Name";
                    document.getElementById("errorTask").style.color="red";
                    taskName.style.borderColor="red";
                    return false;
                }
            }
            validatinPriorityInput(){
                let regex=/^[A-Z]/;
                if(regex.test(numberPriority.value)==true){
                    document.getElementById("errorPriority").innerHTML= "Correct";
                    document.getElementById("errorPriority").style.color="green";
                    numberPriority.style.borderColor="green";
                     return true;
                }
                else{
                    document.getElementById("errorPriority").innerHTML= "Please make a selection";
                    document.getElementById("errorPriority").style.color="red";
                    numberPriority.style.borderColor="red";
                    return false;
                }
            }
}

const trBtn =  new buildTasks
(document.getElementById("tasksBody"));