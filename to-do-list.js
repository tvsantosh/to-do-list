const inputbox = document.getElementById('inputbox');
const list = document.getElementById('list');

function addTask() {
    if (inputbox.value == '') {
        alert('Please enter a task');
    } else {
        let task = document.createElement('li');
        task.innerHTML = inputbox.value;
        list.appendChild(task);
        let span=document.createElement('span');
        span.innerHTML = "\u00d7";
        task.appendChild(span);
    }
    inputbox.value = '';
    savedata()

}

list.addEventListener('click', function(e)
{
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('unchecked');
        savedata()
    }
    else  if(e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        savedata()
    }
},false);

function savedata() {
    localStorage.setItem("data",list.innerHTML);
}

function show()
{
    list.innerHTML=localStorage.getItem("data");
}
show()