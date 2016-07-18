var todoListManager = function (htmlElementHelper) {
    'use strict';
    
    var taskNameInput = htmlElementHelper.getHtmlElement('task_name'),
        addTaskButton = htmlElementHelper.getHtmlElement('add_task'),
        tasklListContainer = htmlElementHelper.getHtmlElement('task_list_container');
    
    addTaskButton.onclick = function () {
        if(!htmlElementHelper.hasUListAsChild(tasklListContainer)){
            htmlElementHelper.appendUlElement(tasklListContainer);
        }
        
        htmlElementHelper.appendLiElement(taskNameInput.value);
    };
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
        li.textContent = itemText;
        var list = document.getElementById(listId);
        list.appendChild(li);
    }
};

var htmlHelper = new htmlElementHelper()
var listManager = new todoListManager(htmlHelper);