let nname = document.getElementById("nname");
let add = document.getElementById("add");
let taskList = document.getElementById("taskList");
let cat = document.getElementById("cat");
let dLine = document.getElementById("dLine");
//let filterDrop //= document.getElementById





document.addEventListener("DOMContentLoaded", function() {
let filterButtons = document.querySelectorAll(".filButn");

filterButtons.forEach(button => {
button.addEventListener("click", function() 
{

filterButtons.forEach(btn => btn.classList.remove("active"));
  this.classList.add("active");
  
  let filter = this.dataset.filter;
  let allTasks = document.querySelectorAll("#taskList li");
  
  allTasks.forEach(item => {
    let taskCategory = item.querySelector(".task-category").textContent.trim();
    let taskStatus = item.querySelector(".status-dropdown").value.trim();
    
    if (filter === "all" || taskCategory === filter || taskStatus === filter) {
      item.style.display = "";
    } else {
      item.style.display="none";


    }
  });

});
});

document.querySelector(".filButn[data-filter='all']").click();
});



add.addEventListener("click", function () {
    let taskText = nname.value ;

    if (taskText === "") {
        alert("Please enter an item!");
        return;
    } 

let categoryText = cat.options[cat.selectedIndex].text;
let deadlineD = dLine.value;




    let listItem = document.createElement("li");
  //  listItem.innerText = taskText;

let ispasDay = false;
if (deadlineD) {
    let today = new Date ();
    let deadline = new Date(deadlineD);

    if (today > deadline) {
        ispasDay = true;
    }

}

listItem.classList.add("show");

let deadline = "";
if (ispasDay) {
deadline = '<span style="color:black; font-weight:bold; "> DEADLINE HAS PASSED! </span>';""}

listItem.innerHTML =`


<div class="task-content">
<strong>Task:</strong> ${taskText} <br>

<strong>Category:</strong> <span class="task-category"> ${categoryText} </span> <br>
<strong>Deadline:</strong> ${deadlineD || "No Deadline Selected"} ${deadline} <br>


<strong>Status:</strong>
<select class="status-dropdown">
<option value = "Not started">Not started</option>
<option value = "Completed">Completed</option>
<option value = "In Progress"> In Progress </option>
</select>
</div>

`;

    taskList.appendChild(listItem);

    nname.value="";
    dLine.value = "";


   /* if (typeof(Storage) !== "undefined") {
      localStorage.setItem("welcomeMessage", "Welcome back!"");
      let message = localStorage.getItem("welcomeMessage");
      document.getElementById("message").textContent = message;
    } else {
      document.getElementById("message").textContent = "Sorry, your browser does not support Web Storage...";
    }
*/


})