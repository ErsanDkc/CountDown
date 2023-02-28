const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const futureDate = document.querySelector("#future-date")
  const countDown = document.querySelectorAll(".count-down h2")
  const sayac = document.querySelector(".count-down")

   // new date assaignt
   let fDate = new Date()
   let fyear = fDate.getFullYear();
   let fmonth = fDate.getMonth()
   let fday = fDate.getDate()
   
   

    // future day start
  const newDate = new Date(fyear,fmonth,fday+10,11,30,0)

  let year = newDate.getFullYear()
  let month = newDate.getMonth()
  let day = newDate.getUTCDate()
  let hour = newDate.getHours()
  let min = newDate.getMinutes()
  let sec = newDate.getSeconds()
  month = months[month]
  week = weekdays[newDate.getDay()]
  futureDate.innerHTML = `giveaway ends on ${week} ,${day} ${month} ${year}, ${hour}:${min}am`

  // future day end

  // remainedTime start
  
  function remainedTime() {

    let newDatesec = newDate.getTime()
    
    let today = new Date().getTime()

    let downDay = Math.floor((newDatesec-today)/(24*60*60*1000))
    let downHour= (Math.floor((newDatesec-today)/(60*60*1000))) % 24
    let downMin = (Math.floor((newDatesec-today)/(60*1000))) %60
    let downSec = (Math.floor((newDatesec-today)/(1000))) % 60

    // set value in array

    const timeArray = [downDay,downHour,downMin,downSec]

    function edit(countDown){
      if(countDown<10) {
        return countDown = `0${countDown}`
      }
      return countDown
    }
        


    countDown.forEach((item,i) => 
      item.innerHTML = edit(timeArray[i])
    )
    
    if((newDatesec-today)<0) {
      clearInterval(remainedTime)
      sayac.innerHTML = `<h2 class="finished">We are sorry, Giveaway has expired..</h2>`

    }
    // 1sn = 1000ms
    // 1min = 60sn
    // 1hour = 60min
    // 1day = 24hour
    // 1month =
  }
  setInterval(remainedTime,1000)
  remainedTime()

  
  
   
    
      
  