var todoListManager = function (htmlElementHelper) {
    'use strict';
    
    var taskNameInput = htmlElementHelper.getHtmlElement('task_name'),
        addTaskButton = htmlElementHelper.getHtmlElement('add_task'),
        tasklListContainer = htmlElementHelper.getHtmlElement('task_list_container'),
        deleteTasksButton = htmlElementHelper.getHtmlElement('delete_tasks');
    
    addTaskButton.onclick = function () {
        if(!htmlElementHelper.hasUListAsChild(tasklListContainer)){
            htmlElementHelper.appendUlElement(tasklListContainer);
        }
        
        htmlElementHelper.appendLiElement(taskNameInput.value);
    };
    
    deleteTasksButton.onclick = function(){
        htmlElementHelper.removeMarkedTasks();
    }
};
    
var htmlElementHelper = function () {
    'use strict';
    
    var listId = 'todo-list';
    
    this.getHtmlElement = function (elementId) {
        var htmlElement = document.getElementById(elementId)
        return htmlElement;
    };
    
    this.hasUListAsChild = function(htmlElement){
        var elementChildNodes = htmlElement.childNodes;
        
        for(var i=0; i < elementChildNodes.length; i++){
            var currentElement = elementChildNodes[i];
            return currentElement.nodeName === 'UL';
        }
    };
    
    this.appendUlElement = function(htmlElement){
        var ulList = document.createElement('UL');
        ulList.id = listId;
        htmlElement.appendChild(ulList);
    }
    
    this.appendLiElement = function(itemText){
        var li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.innerHTML = itemText;
        //li.textContent = itemText;
        li.appendChild(checkbox);
        
        var label = document.createElement('label')
        label.appendChild(document.createTextNode(itemText));

        li.appendChild(label);
        
        var list = document.getElementById(listId);
        list.appendChild(li);
    }
    
    this.removeMarkedTasks = function(){
        var listItems = document.getElementsByTagName('li');
        var listItemsChecked = [];
        
        for(var i = 0; i < listItems.length; i++){
            var curentItemChildNodes = listItems[i].childNodes;
            for(var j = 0; j < curentItemChildNodes.length; j++){
                if(curentItemChildNodes[j].nodeName === 'INPUT'){
                    if(curentItemChildNodes[j].checked){
                        listItemsChecked.push(listItems[i]);
                    }
                }
            }
        }
        
        for(var k = 0; k< listItemsChecked.length; k++){
            listItemsChecked[k].remove();
        }
    }
};

var htmlHelper = new htmlElementHelper()
var listManager = new todoListManager(htmlHelper);