var list = document.getElementById("list")

function addItem(){
    var addItem = document.getElementById('addItem');
    var li = document.createElement('li');
    li.setAttribute("class","liText")
    var liText = document.createTextNode(addItem.value);
    li.appendChild(liText);
   
   var delBtn = document.createElement('button');
   var delText = document.createTextNode("Delete");
  delBtn.setAttribute("class", "delBtn")
  delBtn.setAttribute("onclick","deleteBtn(this)")
   delBtn.appendChild(delText);
   
   
   var editBtn  = document.createElement('button');
   var editText = document.createTextNode('Edit');
   editBtn.setAttribute("class","editBtn");
   editBtn.setAttribute("onclick", "editBtn(this)")
   editBtn.appendChild(editText);
   li.appendChild(editBtn);
   
   
   li.appendChild(delBtn)
   
   
   
    list.appendChild(li);

    addItem.value = "";
    console.log(li);
}
function deleteBtn(e){
    e.parentNode.remove();
}

function deleteAll(){
    list.innerHTML = ""
}
function editBtn(k){

    var val = k.parentNode.firstChild.nodeValue;
    var editVal = prompt("Enter edit value",val);
    k.parentNode.firstChild.nodeValue = editVal;
}