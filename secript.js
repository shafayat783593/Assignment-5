

const currentDateTime = new Date();
let hours = currentDateTime.getHours();
const AmOrPm = hours >= 12 ? "PM" : "Am"
hours = hours % 12 || 12;
const minutes = currentDateTime.getMinutes();
const seconds = currentDateTime.getSeconds();
const currentTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${AmOrPm}`
const today = currentDateTime.getDay();
const year = currentDateTime.getFullYear();
const month = currentDateTime.getMonth() + 1;
const day = currentDateTime.getDate();
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const dayName = days[today];
const CurrentDate = `${day.toString().padStart(2, '0')}-${month.toString().padStart(2, '0')}-${year}`
const date = document.getElementById("date").innerText = CurrentDate
const todays = document.getElementById("day").innerText = dayName
const completedBtns = document.querySelectorAll(".complatedBtn")



for (let i = 0; i < completedBtns.length; i++) {
  const completed = completedBtns[i]

  completed.addEventListener("click", function (event) {
    event.target.parentNode
    const disableBUtton = completed.disabled = "true"
    if (disableBUtton) {
      completed.style.background = "gray"
    }

    let complatedTask = document.getElementById("complatedTask").innerText
    let convateComplatedNumber = parseInt(complatedTask)
    convateComplatedNumber = convateComplatedNumber + 1
    document.getElementById("complatedTask").innerText = convateComplatedNumber;

    const taskNumber = document.getElementById("task-number").innerText;
    let convateTaskNumber = parseInt(taskNumber)
    convateTaskNumber = convateTaskNumber - 1
    document.getElementById("task-number").innerHTML = convateTaskNumber;
    const massages = document.getElementById("massages")
    const div = document.createElement("div")
    const cardTitle = document.getElementById("card-title").innerText
    // console.log(cardTitle)
for (const element of cardTitle) {
  
  
}
    div.innerHTML = `

    <div  class="bg-[#F4F7FF] mt-4 rounded-lg p-4> 
      <p">  you have Completed the task  </p>
      <h2> ${cardTitle}</h2>
      <p>${currentTime}</p>
    </div>


    `
    massages.appendChild(div)
    document.getElementById("clear_history").addEventListener("click", function () {
      massages.style.display = "none"
    })

    alert("border updated successfully")
    if (convateTaskNumber == 0) {
      alert("congrates!!! you have completed all the current task")
    }
  })

}

// change background clour
const changeBackground = document.getElementById("change-bg").addEventListener("click", function () {

  let red = Math.random() * 255
  let green = Math.random() * 255
  let blue = Math.random() * 255
  // document.body.style.backgroundColor =
    document.body.style.background = "rgb(" + red + "," + green + "," + blue + ")"
})


const quiction = document.getElementById("quiction").addEventListener("click", function(){
  window.location.href = "./main.html"
})


