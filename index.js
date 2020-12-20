const listitem = [];
function AddTodo(){
    let todoitem = " ";
    todoitem = document.getElementById("bar").value;

    const liElem = document.createElement('li');
    liElem.setAttribute('id',listitem.length);

    const removebtn = document.createElement('button');
    removebtn.setAttribute('class', 'removebttn');
    removebtn.setAttribute('onclick','deletetodo(event)');
    removebtn.setAttribute('id',listitem.length);
    removebtn.innerHTML = '\u00D7';
   




    liElem.innerHTML = todoitem;
    liElem.appendChild(removebtn);

    const myul = document.getElementById('myul');
    myul.appendChild(liElem);

    listitem.push(todoitem);
    console.log(listitem);


}

function deletetodo(element){
     const index  = element.target.id;
     const liElem = document.getElementById(index);
     const ulElem = document.getElementById('myul');
     ulElem.removeChild(liElem);
    listitem.splice(index,1);
    console.log(listitem);
    

}
