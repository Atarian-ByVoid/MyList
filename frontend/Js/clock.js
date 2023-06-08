function updateClock() {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let date = now.toLocaleDateString();

    hours = addLeadingZero(hours);
    minutes = addLeadingZero(minutes);
    seconds = addLeadingZero(seconds);
  
    let time = hours + ":" + minutes + ":" + seconds;
    let dateTime = date + " " + time;


    document.getElementById("clock").textContent = dateTime;
  
    setTimeout(updateClock, 1000);
  }
  
  function addLeadingZero(value) {
    if (value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  }
  
  updateClock();
  